import { render } from "../framework/render.js";
import BookListComponent from "../view/book-list-component.js";
import BookComponent from "../view/BookComponent.js";

//This is where the list of books will be presented 
export default class BookListPresenter{
    #booklistComponent= new BookListComponent();
    #booklistContainer=null;
    #booksModel=null;
    constructor({bookListContainer, booksModel}){
        this.#booklistContainer=bookListContainer;
        this.#booksModel=booksModel
        this.#booksModel.addObserver(this.#handleModelChange.bind(this))
    }
    init(){
        render(this.#booklistComponent,this.#booklistContainer)
        this.#renderBookslist();
    }
    //This function renders and displays the our html elements on the html doc
    #renderBookslist(){
        for (let index = 0; index < this.#booksModel.books.length; index++) {
            const b=this.#booksModel.books[index]
            //Create book component
            const bookComponent= new BookComponent({book:b,onDeleteClick:()=>this.deleteBook(b)})
            //Display
            render(bookComponent,this.#booklistComponent.getelement())
            
        }
    }

    deleteBook(book){
        console.log(`Reacehed herer: ${book.id} ${this.#booksModel.books.length}`)
        this.#booksModel.deleteBook(book.id)
    }
    //This function will be called, when we add a new book to the books list
    #handleModelChange(){
        this.#clearbookslistSection()
        this.#renderBookslist();
    }

    #clearbookslistSection(){
        this.#booklistComponent.getelement().innerHTML='';
    }

    addBook(){
        const title=document.querySelector('#book-title');
        const author=document.querySelector('#book-author');
        const genre=document.querySelector('#book-genre');
        if (!title||!author||!genre) {
            return
        }
        this.#booksModel.addBook({'id':Math.floor(Math.random() * 101),'title':title.value,'author':author.value,'genre':genre.value})
        document.querySelector('#book-title').value=''
        document.querySelector('#book-author').value=''
        document.querySelector('#book-genre').value=''
    }
}