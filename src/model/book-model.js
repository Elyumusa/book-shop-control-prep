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
    deleteBook(book_id){
        this.#books=this.#books.filter((book)=>book.id!==book_id)
        this._notifyObservers();
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