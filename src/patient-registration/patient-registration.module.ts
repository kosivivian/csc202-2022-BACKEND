import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { ClinicalRecordsModule } from './clinical-records/clinical-records.module';

@Module({
  imports: [PatientsModule, ClinicalRecordsModule]
})
export class PatientRegistrationModule {}
