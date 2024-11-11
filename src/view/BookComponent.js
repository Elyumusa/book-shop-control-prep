import { createElement } from "../framework/render.js";


function createBookComponentTemplate(book) {
    const {title,author,genre}=book

    return (
        `<div class="book">
        <h2>Title: ${title}</h2>
        <p>Author: ${author}</p>
        <p>Genre: ${genre}</p>
        </div>`
    )
}

export default class BookComponent {
    constructor({book}) {
        this.book=book;
    }

    get template(){
       return createBookComponentTemplate(this.book)
    }

    getelement(){
        if(!this.element){
            this.element=createElement(this.template)
        }
        return this.element;
    }
}