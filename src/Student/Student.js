import {Person} from '../Person/Person.js';

export class Student extends Person{
   constructor(name, gender, birthdate, reg){
       super(name, gender, birthdate);
        this._reg = reg;
   }

   get reg(){
       return this._reg;
   }

   set reg(value){
       this._reg = reg;
   }
}