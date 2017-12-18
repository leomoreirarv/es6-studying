export class Person {
    constructor(name, gender, birthdate){
        this._name = name;
        this._gender = gender;
        this._birthdate = birthdate;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name =  value;
    }

    get gender(){
        return this._gender;
    }

    set gender(value){
        this._gender = value;
    }

    get birthdate(){
        return this._birthdate;
    }

    set birthdate(value){
        this._birthdate = value;
    }
}