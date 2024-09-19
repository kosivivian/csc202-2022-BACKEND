import { Module } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';
import { ClinicalRecordsController } from './clinical-records.controller';
 import { TypeOrmModule } from '@nestjs/typeorm';
 import { ClinicalRecord } from './entities/clinical-record.entity';
import { PatientsModule } from '../patients/patients.module';
@Module({
   imports: [TypeOrmModule.forFeature([ClinicalRecord]), PatientsModule],
  controllers: [ClinicalRecordsController],
  providers: [ClinicalRecordsService],
})
export class ClinicalRecordsModule {}
