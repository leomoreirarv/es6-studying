export class Page{
    constructor(id, title){
        this._id = id;
        this._title = title;
    }

    init(){
        document.getElementById("main").innerHTML = "";
        let mainElement = this.createMainElement(this._id);
        let titleElement = this.createTitleElement(this._title);
        document.getElementById("main").appendChild(mainElement);
        mainElement.appendChild(titleElement);
    }

    createMainElement(id){
        let element = document.createElement("div");
        element.setAttribute("id", id);
        element.setAttribute("class", "container");
        return element;
    }

    createTitleElement(text){
        let box = document.createElement("div");
        box.setAttribute("class", "page-header");
        let element = document.createElement("h3");
        element.innerHTML = text;
        box.appendChild(element);
        return box;
    }
}