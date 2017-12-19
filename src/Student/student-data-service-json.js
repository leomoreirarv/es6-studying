import { StudentDataService } from './student-data-service.js';
import { Student } from './Student.js';

export class StudentDataServiceJson extends StudentDataService{
    constructor(data){
        super();
        this._data = data;
        this._reg = [];
    }

    loadStudents(){
        for(let d of this._data){
            this._reg.push(new Student(d._name, d._gender, new Date(d._birthdate), d._reg));
        }
    }

    saveStudent(student){
    }

    readAllStudents(){
        return this._reg;
    }
}