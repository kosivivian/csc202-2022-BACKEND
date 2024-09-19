

export class CreateClinicalRecordDto {
    readonly patientId: string;
    readonly clinicdate: Date;
    readonly natureOfAilment: string;
    readonly medicinePrescribed: string;
    readonly procedureUndertaken: string;
    readonly nextAppointmentDate: Date;
    
}
