import { Controller, Get, Post, Body, Render, Param, Delete, Put, Patch } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  //@Get('create')
  //@Render('users/create-patients.html')
  //createForm(){
    
  //}

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }

  @Patch(':patientId/clinicalrecord/clinicalrecordId')
  setClinicalRecordById(@Param('patientId') patientId: number, @Param('clinicalrecordId') userId: number) {
  return this.patientsService.setClinicalRecordById(patientId, userId);
}
  @Delete(':patientId/clinicalrecord')unsetClinicalRecordById(@Param('patientId') patientId: number) {
  return this.patientsService.unsetClinicalRecordById(patientId);
}
}
