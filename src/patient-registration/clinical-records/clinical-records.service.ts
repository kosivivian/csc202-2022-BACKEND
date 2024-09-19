import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { ClinicalRecord } from './entities/clinical-record.entity';
import { Patient } from '../patients/entities/patient.entity';

@Injectable()
export class ClinicalRecordsService {
  constructor(
    @InjectRepository(ClinicalRecord)
    private clinicalrecordRepository: Repository<ClinicalRecord>,

    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>
  ) { }
  async create(createClinicalRecordDto: CreateClinicalRecordDto) {
    const newClinicalRecord = this.clinicalrecordRepository.create(createClinicalRecordDto)
    return this.clinicalrecordRepository.save(newClinicalRecord);
  }

  async findAll() {
    return await this.clinicalrecordRepository.find({ relations: ['patient'] });
  }

  async findOne(id: number) {
    return await this.clinicalrecordRepository.findOne({
      where: {
        id
      }});
  }

  async update(id: number, updateClinicalRecordDto: UpdateClinicalRecordDto) {
    return await this.clinicalrecordRepository.update(id, updateClinicalRecordDto);
  }

  async remove(id: number) {
     return await this.clinicalrecordRepository.delete(id);
  }

  async setPatientById(clinicalrecordId: number, patientId: 
number) {
try {
return await 
this.clinicalrecordRepository.createQueryBuilder()
.relation(ClinicalRecord, "patient")
.of(clinicalrecordId)
.set(patientId)
} catch (error) {
throw new HttpException({
status: 
HttpStatus.INTERNAL_SERVER_ERROR,
error: `There was a problem setting user for 
student: ${error.message}`,
}, HttpStatus.INTERNAL_SERVER_ERROR);
}
}

async unsetPatientById(clinicalrecordId: number) {
try {
return await this.clinicalrecordRepository.createQueryBuilder()
.relation(ClinicalRecord, "patient")
.of(clinicalrecordId)
.set(null)
} catch (error) {
throw new HttpException({
status: 
HttpStatus.INTERNAL_SERVER_ERROR,
error: `There was a problem unsetting user 
for student: ${error.message}`,
}, HttpStatus.INTERNAL_SERVER_ERROR);
}
}
}
