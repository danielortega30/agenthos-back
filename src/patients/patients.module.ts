import { DoctorsModule } from '../doctors/doctors.module';
import { Module } from '@nestjs/common';
import { Patient } from './entities/patient.entity';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Patient]), DoctorsModule],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
