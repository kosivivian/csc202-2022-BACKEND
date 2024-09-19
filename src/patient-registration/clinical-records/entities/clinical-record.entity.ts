 import { Patient } from "src/patient-registration/patients/entities/patient.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClinicalRecord {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     patientId: string;

     @Column() //the day the patient is attended to in the clinic
     clinicDate: Date;
 
     @Column() // a brief description of the nature of ailment
     natureOfAilment: string;

     @Column()
     medicinePrescribed: string;

     @Column()
     procedureUndertaken: string;

     @Column()
     nextAppointmentDate: Date;


     @ManyToOne(() => Patient, (patient) => patient.clinicalrecord)
     patient: Patient;

}
