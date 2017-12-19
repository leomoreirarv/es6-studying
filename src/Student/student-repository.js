export class StudentRepository{
    constructor(DataService){
        this._students = DataService.readAllStudents()
    }

    list(){
        return this._students;
    }
}