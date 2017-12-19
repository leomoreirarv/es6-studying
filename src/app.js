import { StudentDataServiceLocalStorage } from './Student/student-data-service-localstorage.js';
import { StudentRepository } from './Student/student-repository.js';
import { Student } from './Student/Student.js';
import { StudentData } from './Student/students-data.js';

let sd = new StudentData();

let ds = new StudentDataServiceLocalStorage(sd);
let student1 = new Student("Leonardo Moreira", "Male", new Date("1982-08-02"), "123456789");
ds.loadStudents();
ds.saveStudent(student1);
let repo = new StudentRepository(ds);

console.log("students", repo.list());