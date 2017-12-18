import {Student} from './Student/Student.js';
import {Staff} from './Staff/Staff.js';

let student = new Student("Joaquim da Silva", "male", new Date("1975-10-05"), "A1234");
let staff = new Staff("Maria Antonieta", "female", new Date("1969-02-10"), "maintenance");

console.log("student", student);
console.log("staff", staff);