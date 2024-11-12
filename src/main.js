import { render } from "./framework/render.js";
import { books } from "./mock/books.js";
import BooksModel from "./model/book-model.js";
import BookListPresenter from "./presenter/book-list-presenter.js";
import BookComponent from "./view/BookComponent.js";
import FormAddBookComponent from "./view/form-add-book-components.js";

const booksModel=new BooksModel()
const bookListContainer = document.querySelector('.book-list'); 
const bookListPresenter= new BookListPresenter({bookListContainer,booksModel})
const formAddBookcomponent= new FormAddBookComponent({onClick:handleNewBookButtonClick})
const formContainer=document.querySelector('.book-form')
render(formAddBookcomponent,formContainer);
bookListPresenter.init()

function handleNewBookButtonClick() {
    bookListPresenter.addBook()
}

