import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DoctorsModule } from './doctors/doctors.module';
import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      connectTimeout: 60000,
      ssl: {
        rejectUnauthorized: false,
      },
      extra: {
        trustServerCertificate: true,
        Encrypt: true,
        IntegratedSecurity: false,
        connectionLimit: 10,
      },
    }),
    DoctorsModule,
    PatientsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
