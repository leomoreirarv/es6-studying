import { Page } from "../Page.js";
import { StudentRepository } from "../../Student/student-repository.js";
import { StudentDataServiceLocalStorage } from "../../Student/student-data-service-localstorage.js";
import { StudentData } from "../../Student/students-data.js";


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
        let tableElement = document.createElement("table");
        tableElement.setAttribute("class", "table");
        let contentElement = document.getElementById("student-content");
        for(let d of data){
            let rowElement = document.createElement("tr");
            for(let c of Object.keys(d)){
                let colElement = document.createElement("td");
                colElement.innerText = d[c];
                rowElement.appendChild(colElement);
            }
            tableElement.appendChild(rowElement);
        }
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