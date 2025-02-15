import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { DoctorsService } from '../doctors/doctors.service';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
    private doctorsService: DoctorsService,
  ) {}

  async create(createPatientDto: CreatePatientDto, userId: number) {
    if (createPatientDto.doctorId) {
      await this.doctorsService.findOne(createPatientDto.doctorId);
    }

    const patient = this.patientsRepository.create({
      ...createPatientDto,
      createdById: userId,
      updatedById: userId,
    });

    return this.patientsRepository.save(patient);
  }

  findAll() {
    return this.patientsRepository.find({
      where: { deletedAt: IsNull() },
      relations: ['doctor'],
    });
  }

  async findOne(id: number) {
    const patient = await this.patientsRepository.findOne({
      where: { id, deletedAt: IsNull() },
      relations: ['doctor'],
    });
    if (!patient) {
      throw new NotFoundException(`Patient #${id} not found`);
    }
    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto, userId: number) {
    if (updatePatientDto.doctorId) {
      const doctor = await this.doctorsService.findOne(
        updatePatientDto.doctorId,
      );
      const patient = await this.findOne(id);
      this.patientsRepository.merge(patient, {
        ...updatePatientDto,
        updatedById: userId,
        doctor: doctor, // Include the doctor object in the merge
      });
      return this.patientsRepository.save(patient);
    }

    const patient = await this.findOne(id);
    this.patientsRepository.merge(patient, {
      ...updatePatientDto,
      updatedById: userId,
    });
    return this.patientsRepository.save(patient);
  }

  async remove(id: number) {
    const patient = await this.findOne(id);
    return this.patientsRepository.softRemove(patient);
  }
}
