import { Menu } from "./Menu.js";

export class Route extends Menu{
    constructor(mainMenu){
        super(mainMenu);
        this._routes = {};
        this.listenerRoute();
    }

    addRoute(name, title, obj){
        let me = this;
        me._routes[name] = {
            name: name, 
            obj: obj
        }
        super.createMenuItem(name, title, this.changeRoute);
    }

    changeRoute(routeName){
        console.log("route", routeName);
        window.dispatchEvent(new CustomEvent("changeRoute", { detail: { route: routeName }}));
    }

    listenerRoute(){
        let me = this;
        window.addEventListener("changeRoute", function(e){
            let obj = me._routes[e.detail.route].obj;
            obj.init();
        });
    }
}