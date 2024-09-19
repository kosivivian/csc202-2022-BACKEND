import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
 import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
     @InjectRepository(Patient)
 private patientsRepository: Repository<Patient>
  ){}
   async create(createPatientDto: CreatePatientDto) { 
    const newPatient = this.patientsRepository.create(createPatientDto)
    return this.patientsRepository.save(newPatient);
   }
  async findAll() {
    //return `This action returns all patients`;
     return await this.patientsRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} patient`;
     return await this.patientsRepository.findOne({
      where: {
        id,
      }
     });
  }
  

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    //return `This action updates a #${id} patient`;
    return await this.patientsRepository.update(id, 
    updatePatientDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} patient`;
     return await this.patientsRepository.delete(id);
  }

  async setClinicalRecordById(patientId: number, clinicalrecordId: 
number) {
try {
return await 
this.patientsRepository.createQueryBuilder()
.relation(Patient, "clinicalrecord")
.of(patientId)
.set(clinicalrecordId)
} catch (error) {
throw new HttpException({
status: 
HttpStatus.INTERNAL_SERVER_ERROR,
error: `There was a problem setting user for 
student: ${error.message}`,
}, HttpStatus.INTERNAL_SERVER_ERROR);
}
}
async unsetClinicalRecordById(patientId: number) {
try {
return await 
this.patientsRepository.createQueryBuilder()
.relation(Patient, "clinicalrecord")
.of(patientId)
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
  


