import { HomePage } from './Interface/Home/HomePage.js';
import { StudentPage } from './Interface/Student/StudentPage.js';
import { StaffPage } from './Interface/Staff/Staff.js';
import { StudentData } from './Student/students-data.js';
import { StudentDataServiceLocalStorage } from './Student/student-data-service-localstorage.js';
import { StudentRepository } from './Student/student-repository.js';
import { Route } from './Interface/Route.js';

export class App{
    init(){
        let route = new Route("main-menu");
        route.addRoute("home", "Home", new HomePage());
        route.addRoute("student", "Sudent", new StudentPage(this.studentRepository()));
        route.addRoute("staff", "Staff", new StaffPage());
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
app.init();