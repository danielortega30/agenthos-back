import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}

  create(createDoctorDto: CreateDoctorDto, userId: number) {
    const doctor = this.doctorsRepository.create({
      ...createDoctorDto,
      createdById: userId,
      updatedById: userId,
    });
    return this.doctorsRepository.save(doctor);
  }

  findAll() {
    return this.doctorsRepository.find({
      where: { deletedAt: IsNull() },
      relations: ['patients'],
    });
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto, userId: number) {
    const doctor = await this.findOne(id);
    this.doctorsRepository.merge(doctor, {
      ...updateDoctorDto,
      updatedById: userId,
    });
    return this.doctorsRepository.save(doctor);
  }

  async remove(id: number) {
    const doctor = await this.findOne(id);
    return this.doctorsRepository.softRemove(doctor);
  }

  async findOne(id: number) {
    const doctor = await this.doctorsRepository.findOne({
      where: { id },
      relations: ['patients'],
    });
    if (!doctor) {
      throw new NotFoundException(`Doctor #${id} not found`);
    }
    return doctor;
  }
}
