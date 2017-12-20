import { Page } from "../Page.js";

export class StudentPage extends Page{
    constructor(){
        super();
        this._id = "page-student";
        this._title = "Student Page";
        super.init(this._id, this._title);
    }
    
}