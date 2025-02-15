import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Doctor } from '../../doctors/entities/doctor.entity';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  diagnostic: string;

  @Column({ nullable: true })
  doctorId: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.patients)
  @JoinColumn({ name: 'doctorId' })
  doctor: Doctor;
}
