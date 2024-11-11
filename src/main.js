import { books } from "./mock/books.js";
import BookComponent from "./view/BookComponent.js";


const bookListContainer = document.querySelector('.book-list'); 

for (let index = 0; index < books.length; index++) {
    //Create book component
    const bookComponent= new BookComponent({book:books[index]})
    //Display
    bookListContainer.insertAdjacentElement('beforeend',bookComponent.getelement())
    
}