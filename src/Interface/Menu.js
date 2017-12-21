export class Menu{
    constructor(id){
        this._id = id;
        this._menuElement = document.getElementById(id);
    }

    createMenuItem(name, title, method){
        let me = this;
        let itemMenu = document.createElement("li");
        itemMenu.setAttribute("class", "nav-item");
        let linkMenu = document.createElement("a");
        linkMenu.setAttribute("class", "nav-link");
        linkMenu.setAttribute("href", "#");
        linkMenu.innerText = title;
        linkMenu.onclick = function(){
            method(name);
        }
        itemMenu.appendChild(linkMenu);
        me._menuElement.appendChild(itemMenu);
    }
}