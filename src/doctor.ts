import { personalInfo } from "./personalDetails";

class doctorInfo extends personalInfo{
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public gender: string,
        public specialty: string,
        public position: string,
        public department?: string
    ){
        super(id, name, age, gender)
    }
    displayPersonalInfo(): string {
        return `${super.displayPersonalInfo()}, Specialty: ${this.specialty}, Postition: ${this.position}, Department: ${this.department}`
    }
}

const doc = new doctorInfo(1, "Confidence DUC", 20, "Male", "Surgical", "CEO", "")
console.log(doc.displayPersonalInfo());

