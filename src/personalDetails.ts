export class personalInfo{
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public gender: string  //(user can enter their gender by them self)for learning purpose suppose to a boolean
    ){}

    displayPersonalInfo():string{
        return `Personal Details id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Sex: ${this.gender}`
    }
}