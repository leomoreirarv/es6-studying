import {Person} from '../Person/Person.js';

export class Staff extends Person{
    constructor(name, gender, birthdate, sector){
        super(name, gender, birthdate);
        this._sector = sector;
    }

    get sector(){
        return this._sector;
    }

    set sector(value){
        this._sector = value;
    }
}