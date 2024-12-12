import { personalInfo } from "./personalDetails";

class patientInfo extends personalInfo{
    constructor(
        public id: number,
        public name: string,
        //public DateOfBirth: Date,
        public age: number,
        public gender: string,
        public phone: number
        
    ){
        super(id, name, age, gender)
    }
    displayPersonalInfo(): string {
        return `${super.displayPersonalInfo()}, PhoneNo: ${this.phone}`
    }
}

const patient = new patientInfo(1, "Confidence DUC", 16, "Male", 8064366528)
console.log(patient.displayPersonalInfo());

