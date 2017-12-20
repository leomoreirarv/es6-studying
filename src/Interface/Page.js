export class Page{
    constructor(){
        this.createMainElement();
    }

    init(id, title){
        let mainElement = this.createMainElement(id);
        let titleElement = this.createTitleElement(title);
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
        let element = document.createElement("h4");
        element.innerHTML = text;
        return element;
    }
}