import { createElement } from "../framework/render.js";

function createBookListComponentTemplate() {
    return (
        `<div class="book-list">
            <h2>Книги</h2>
        </div>`
    )
}

export default class BookListComponent{


    get template(){
       return createBookListComponentTemplate()
    }

    getelement(){
        if(!this.element){
            this.element=createElement(this.template)
        }
        console.log(`let's do: ${this.element.innerHTML}`)
        return this.element;
    }
}