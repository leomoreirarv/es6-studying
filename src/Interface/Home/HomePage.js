import { Page } from "../Page.js";

export class HomePage extends Page{
    constructor(){
        super();
        this._id = "page-home";
        this._title = "Home Page";
        super.init(this._id, this._title);
    }
}