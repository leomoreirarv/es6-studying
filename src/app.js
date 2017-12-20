import { HomePage } from './Interface/Home/HomePage.js';
import { StudentPage } from './Interface/Student/StudentPage.js';

class App{
    constructor(){
        new HomePage();
        new StudentPage();
    }
}

new App();
