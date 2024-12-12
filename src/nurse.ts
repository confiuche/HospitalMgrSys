import { personalInfo } from "./personalDetails";

class doctorInfo extends personalInfo{
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public gender: string,
        public position: string
    ){
        super(id, name, age, gender)
    }
    displayPersonalInfo(): string {
        return `${super.displayPersonalInfo()}, Postition: ${this.position}`
    }
}

const doc = new doctorInfo(1, "Sifon Isaac", 19, "Female", "Jnr")
console.log(doc.displayPersonalInfo());

