import { HomePage } from './Interface/Home/HomePage.js';
import { StudentPage } from './Interface/Student/StudentPage.js';
import { StaffPage } from './Interface/Staff/Staff.js';
import { StudentData } from './Student/students-data.js';
import { StudentDataServiceLocalStorage } from './Student/student-data-service-localstorage.js';
import { StudentRepository } from './Student/student-repository.js';

export class App{
    constructor(){
        this.createRoutes();
        this.addRoutes();
        this.listenerRoute();
        this.changeRoute("home");
    }

    createRoutes(){
        let me = this;
        me._routes = {};
        me._menuElement = document.getElementById("main-menu");
    }

    addRoute(name, title, obj){
        let me = this;
        me._routes[name] = {
            name: name, 
            obj: obj
        }
        me.createMenuItem(name, title);
    }

    createMenuItem(name, title){
        let me = this;
        let itemMenu = document.createElement("li");
        itemMenu.setAttribute("class", "nav-item");
        let linkMenu = document.createElement("a");
        linkMenu.setAttribute("class", "nav-link");
        linkMenu.setAttribute("href", "#");
        linkMenu.innerText = title;
        linkMenu.onclick = function(){
            me.changeRoute(name);
        }
        itemMenu.appendChild(linkMenu);
        me._menuElement.appendChild(itemMenu);
    }

    addRoutes(){
        let me = this;
        me.addRoute("home", "Home", new HomePage());
        me.addRoute("student", "Student", new StudentPage(this.studentRepository()));
        me.addRoute("staff", "Staff", new StaffPage());
    }

    changeRoute(route){
        window.dispatchEvent(new CustomEvent("changeRoute", { detail: { route: route }}));
    }

    listenerRoute(){
        let me = this;
        window.addEventListener("changeRoute", function(e){
            let obj = me._routes[e.detail.route].obj;
            obj.init();
        });
    }

    studentRepository(){
        var studentData = new StudentData();
        var studentDataService = new StudentDataServiceLocalStorage(studentData);
        studentDataService.loadStudents();
        var studentRespository = new StudentRepository(studentDataService);
        return studentRespository;
    }
}

var app = new App();