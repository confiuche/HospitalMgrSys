"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalInfo = void 0;
class personalInfo {
    constructor(id, name, age, gender //(user can enter their gender by them self)for learning purpose suppose to a boolean
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    displayPersonalInfo() {
        return `Personal Details id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Sex: ${this.gender}`;
    }
}
exports.personalInfo = personalInfo;
