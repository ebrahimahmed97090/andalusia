export class Employee {
    name: string;
    department: string;
    code: number;
    birthDay: Date;
    gender: string;

    constructor(
        name: string,
        department: string,
        code: number,
        birthDay: Date,
        gender: string
    ) {
        this.name = name;
        this.department = department;
        this.code = code;
        this.birthDay = birthDay;
        this.gender = gender;
    }
}
