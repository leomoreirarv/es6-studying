export class StudentRepository{
    constructor(DataService){
        this._students = DataService.readAllStudents()
    }

    list(){
        return this._students;
    }

    findBy(reg, key){
        let result = []
        console.log(this._students.find(function(value){
            let k = key ? key : "_reg";
            return value[k].match(reg);
        }));
        return result;
    }
}