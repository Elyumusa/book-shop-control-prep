import { createElement } from "../framework/render.js"

function createFormAddBookComponentTemplate() {
    return (`
        <form id="book-form">
                <input type="text" id="book-title" placeholder="Название книги" required />
                <input type="text" id="book-author" placeholder="Автор" required />
                <select id="book-genre" required>
                    <option value="">Выбрать жанр</option>
                    <option value="Fiction">Художественная</option>
                    <option value="Science">Научная</option>
                    <option value="Fantasy">Фантастика</option>
                    <option value="Biography">Биография</option>
                </select>
                <button type="submit">Добавить книгу</button>
            </form>
        `)
}

export default class FormAddBookComponent {
    #handleClick=null

    #clickHandler=(evt)=>{
        evt.preventDefault()
        this.#handleClick()
    }

    constructor({onClick}){
        this.#handleClick=onClick;
        this.getelement().addEventListener('submit',this.#clickHandler)
    }

    get template(){
        return createFormAddBookComponentTemplate()
    }

    getelement(){
        if(!this.element){
            this.element=createElement(this.template)
        }
        return this.element;
    }

    removeElement(){
        this.element=null;
    }
}