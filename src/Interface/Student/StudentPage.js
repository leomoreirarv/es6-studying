import { Page } from "../Page.js";
import { Table } from "../Table.js";


export class StudentPage extends Page{
    constructor(repository){
        super("page-student", "Student Page");
        this._repository = repository;
    }

    init(){
        super.init();
        this.createContentElement();
        let data = this._repository.list();
        this.createTableElement(data);
    } 

    createContentElement(){
        let main = document.getElementById("main");
        let mainCol = document.createElement("div");
        mainCol.setAttribute("class", "container");
        mainCol.setAttribute("id", "student-content");
        main.appendChild(mainCol);
    }

    createTableElement(data){
        let table = new Table(data, ["Name", "Gender", "Birthdate", "COD"]);
        let tableElement = table.buildTable();
        let contentElement = document.getElementById("student-content");
        contentElement.appendChild(tableElement);
    }
}