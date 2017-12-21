import { StudentDataService } from './student-data-service.js';
import { Student } from './Student.js';

export class StudentDataServiceLocalStorage extends StudentDataService{
    constructor(data){
        super();
        this._data = data ? data : [];
        this._reg = [];
    }

    loadStudents(){
        for(let d of this._data){
            this.saveStudent(new Student(d._name, d._gender, new Date(d._birthdate), d._reg));
        }
    }

    saveStudent(student){
        localStorage.setItem("students", []);
        this._reg.push(student);
        localStorage.setItem("students", JSON.stringify(this._reg));
    }

    readAllStudents(){
        for(let student of this._reg){
            student._birthdate = moment(student._birthdate).format("DD/MM/YY");
            student._reg = student._reg.substr(0, 10);
        }
        return this._reg;
    }
}