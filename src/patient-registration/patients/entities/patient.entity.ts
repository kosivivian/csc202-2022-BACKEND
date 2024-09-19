
 import { ClinicalRecord } from "src/patient-registration/clinical-records/entities/clinical-record.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    surname: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    homeAddress: string;

    @Column()
    dateOfRegistration: Date;

    @Column({default: "_22120613016"})
    developerMatricNo: string;

    @OneToMany(() => ClinicalRecord, (clinicalrecord) => clinicalrecord.patient)
    clinicalrecord: ClinicalRecord[];

}
