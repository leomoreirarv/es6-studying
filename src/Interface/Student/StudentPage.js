import { Page } from "../Page.js";
import { StudentRepository } from "../../Student/student-repository.js";
import { StudentDataServiceLocalStorage } from "../../Student/student-data-service-localstorage.js";
import { StudentData } from "../../Student/students-data.js";
import { Table } from "../Table.js";


export class StudentPage extends Page{
    constructor(){
        super("page-student", "Student Page");
    }

    init(){
        super.init();
        this.createContentElement();
        this.createTableElement(this.loadData());
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

    loadData(){
        var studentData = new StudentData();
        var studentDataService = new StudentDataServiceLocalStorage(studentData);
        studentDataService.loadStudents();
        var students = new StudentRepository(studentDataService);
        return students.list();
    }

}