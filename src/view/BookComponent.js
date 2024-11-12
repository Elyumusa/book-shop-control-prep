import { createElement } from "../framework/render.js";


function createBookComponentTemplate(book) {
    const {title,author,genre}=book

    return (
        `<div class="book">
        <h2>Title: ${title}</h2>
        <p>Author: ${author}</p>
        <p>Genre: ${genre}</p>
        <button class="delete-button">Delete книгу</button>
        </div>`
    )
}

export default class BookComponent {
    #handleClick=null
    #clickHandler=(evt)=>{
        evt.preventDefault()
        this.#handleClick()
    }
    constructor({book, onDeleteClick}) {
        this.book=book;
        this.#handleClick=onDeleteClick
        this.getelement().addEventListener("click",this.#clickHandler)
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