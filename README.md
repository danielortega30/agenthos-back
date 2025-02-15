# Hospital Management API

## Description

A NestJS application for managing hospital operations, including patients, doctors, and appointments.

## Project Setup

```bash
$ npm install
```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

````plaintext
# Database Configuration
DB_HOST=your_database_host
DB_PORT=5432
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name

# Application Configuration
PORT=3000

# Application Configuration
PORT=3000

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
````

## Dependencies

### Main Dependencies

```json
{
  "@nestjs/common": "^10.0.0",
  "@nestjs/config": "^3.1.1",
  "@nestjs/core": "^10.0.0",
  "@nestjs/platform-express": "^10.0.0",
  "@nestjs/typeorm": "^10.0.1",
  "class-validator": "^0.14.1",
  "typeorm": "^0.3.17"
}
```

### Available Endpoints

#### Patients API

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/patients`     | Get all patients           |
| GET    | `/api/patients/:id` | Get a patient by ID        |
| POST   | `/api/patients`     | Register a new patient     |
| PATCH  | `/api/patients/:id` | Update patient information |
| DELETE | `/api/patients/:id` | Delete a patient record    |

#### Doctors API

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | `/api/doctors`     | Get all doctors           |
| GET    | `/api/doctors/:id` | Get a doctor by ID        |
| POST   | `/api/doctors`     | Register a new doctor     |
| PATCH  | `/api/doctors/:id` | Update doctor information |
| DELETE | `/api/doctors/:id` | Delete a doctor record    |

#### Appointments API

| Method | Endpoint                | Description                |
| ------ | ----------------------- | -------------------------- |
| GET    | `/api/appointments`     | Get all appointments       |
| GET    | `/api/appointments/:id` | Get an appointment by ID   |
| POST   | `/api/appointments`     | Create a new appointment   |
| PATCH  | `/api/appointments/:id` | Update appointment details |
| DELETE | `/api/appointments/:id` | Cancel an appointment      |

#### Medical Records API

| Method | Endpoint                   | Description                   |
| ------ | -------------------------- | ----------------------------- |
| GET    | `/api/medical-records`     | Get all medical records       |
| GET    | `/api/medical-records/:id` | Get a medical record by ID    |
| POST   | `/api/medical-records`     | Create a new medical record   |
| PATCH  | `/api/medical-records/:id` | Update medical record details |
| DELETE | `/api/medical-records/:id` | Delete a medical record       |
