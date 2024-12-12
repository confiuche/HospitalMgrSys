"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personalDetails_1 = require("./personalDetails");
class doctorInfo extends personalDetails_1.personalInfo {
    constructor(id, name, age, gender, specialty, position, department) {
        super(id, name, age, gender);
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.specialty = specialty;
        this.position = position;
        this.department = department;
    }
    displayPersonalInfo() {
        return `${super.displayPersonalInfo()}, Specialty: ${this.specialty}, Postition: ${this.position}, Department: ${this.department}`;
    }
}
const doc = new doctorInfo(1, "Confidence DUC", 20, "Male", "Surgical", "CEO", "");
console.log(doc.displayPersonalInfo());
