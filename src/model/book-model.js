import { books } from "../mock/books.js";

export default class BooksModel{
    #books=books
    #observers=[]
    get books(){
        return this.#books;
    }

    addBook(book){
        const length=this.#books.push(book);
        console.log(`Length of books list: ${length}`)
        this._notifyObservers();
        return book;
    }

    addObserver(observer){
        this.#observers.push(observer);
    }
    removeObserver(observer){
        this.#observers=this.#observers.filter((obs)=>obs!==observer)
    }
    _notifyObservers(){
        this.#observers.forEach((observer)=>observer());
    }
}