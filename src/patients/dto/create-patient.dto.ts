import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1, { message: 'Age must be a positive number' })
  age: number;

  @IsNotEmpty()
  @IsString()
  diagnostic: string;

  @IsNotEmpty()
  @IsNumber()
  doctorId: number;
}
