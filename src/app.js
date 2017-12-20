import { HomePage } from './Interface/Home/HomePage.js';
import { StudentPage } from './Interface/Student/StudentPage.js';
import { StaffPage } from './Interface/Staff/Staff.js';

export class App{
    constructor(){
        this.createRoutes();
        this.addRoute("home", "Home", new HomePage());
        this.addRoute("student", "Student", new StudentPage());
        this.addRoute("staff", "Staff", new StaffPage());
        this.listenerRoute();
        this.changeRoute("home");
    }

    createRoutes(){
        this._routes = {};
        this._menuElement = document.getElementById("main-menu");
    }

    addRoute(name, title, obj){
        let me = this;
        me._routes[name] = {
            name: name, 
            obj: obj
        }
        let itemMenu = document.createElement("li");
        let linkMenu = document.createElement("a");
        linkMenu.innerText = title;
        linkMenu.onclick = function(){
            me.changeRoute(name);
        }
        itemMenu.appendChild(linkMenu);
        me._menuElement.appendChild(itemMenu);
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
}

new App();