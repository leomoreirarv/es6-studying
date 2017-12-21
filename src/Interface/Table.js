export class Table{
    constructor(data, header){
        this._data = data;
        this._header = header ? header : Object.keys(this._data[0]);
    }
    
    buildTable(){
        let tableElement = this.createTableElement();
        let tableHeadElement = this.createHeaderElement(this._header);
        let tableBodyElement = this.createTBodyElement();
        tableElement.appendChild(tableHeadElement);
        for(let row of this._data){
            let tableRowElement = this.createTRowElemenent();
            for(let cell of Object.keys(row)){
                let tableCellElement = this.createTCellElement();
                tableCellElement.innerText = row[cell];
                tableRowElement.appendChild(tableCellElement);
            }
            tableBodyElement.appendChild(tableRowElement);
        }
        tableElement.appendChild(tableBodyElement);
        return tableElement;
    }

    createHeaderElement(keys){
        let tableTHeadElement = this.createTHeadElement();
        let tableRowElement = this.createTRowElemenent();
        for(let cell of keys){
            let tableTHeadCellElement = this.createTHeadCellElement();
            tableTHeadCellElement.innerText = cell;
            tableRowElement.appendChild(tableTHeadCellElement);
        }
        tableTHeadElement.appendChild(tableRowElement);
        return tableTHeadElement;
    }
    
    createTableElement(){
        let tableElement = document.createElement("table");
        tableElement.setAttribute("class", "table table-striped");
        return tableElement;
    }

    createTBodyElement(){
        let tBodyElement = document.createElement("tbody");
        return tBodyElement;
    }

    createTHeadElement(){
        let tHeadElement = document.createElement("thead");
        return tHeadElement;
    }

    createTHeadCellElement(){
        let tHeadCellElement = document.createElement("th");
        return tHeadCellElement;
    }

    createTRowElemenent(){
        let tRowElement = document.createElement("tr");
        return tRowElement;
    }

    createTCellElement(){
        let tCellElement = document.createElement("td");
        return tCellElement;
    }
}