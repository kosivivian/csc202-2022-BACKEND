import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';

@Controller('clinical-records')
export class ClinicalRecordsController {
  constructor(private readonly clinicalRecordsService: ClinicalRecordsService) {}

  @Post()
  create(@Body() createClinicalRecordDto: CreateClinicalRecordDto) {
    return this.clinicalRecordsService.create(createClinicalRecordDto);
  }

  @Get()
  findAll() {
    return this.clinicalRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicalRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClinicalRecordDto: UpdateClinicalRecordDto) {
    return this.clinicalRecordsService.update(+id, updateClinicalRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicalRecordsService.remove(+id);
  }

  @Patch(':clinicalrecordId/patient/patientId')
  setPatientById(@Param('clinicalrecordId') clinicalrecordId: number, @Param('patientId') patientId: number) {
  return this.clinicalRecordsService.setPatientById(clinicalrecordId, patientId);
}
  @Delete(':clinicalrecordId/patient')unPatientById(@Param('clinicalrecordId') clinicalrecordId: number) {
  return this.clinicalRecordsService.unsetPatientById(clinicalrecordId);
}
}
