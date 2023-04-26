
import './App.css';
import React, {Component} from "react";
import Books from "../Books/BookList/Books"
import LibraryService from "../../repository/libraryRepository";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Categories from "../Categories/Categories"
import Header from "../Header/header"
import BookAdd from "../Books/bookAdd/bookAdd"

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            books: [],
            categories: [],
            authors: []
        }
    }

    loadBooks=()=>{
        LibraryService.fetchBooks()
            .then((data)=>
        {
            this.setState({
                books: data.data
            })
        })
    }

    loadCategories=() =>{
        LibraryService.fetchCategories()
            .then((data) =>
            {
                this.setState({
                    categories:data.data
                })
            })
    }

    loadAuthors=() =>{
        LibraryService.fetchAuthors()
            .then((data)=>{
                this.setState({
                    authors: data.data
                })
            })
    }

    deleteBook = (id) =>{
        LibraryService.deleteBook(id)
            .then(()=>{
                this.loadBooks();
            })
    }

    markAsTaken = (id) =>{
        LibraryService.markAsTaken(id)
            .then(()=>{
                this.loadBooks();
            })
    }

    addBook= (name, bookCategory, author, availableCopies) =>{
        LibraryService.addBook(name, bookCategory, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }


    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }

    render() {
        return(
           <Router>
               <Header/>
               <main>
                   <div className={"container"}>
                       <Route path={"/categories"} exact render={()=> <Categories categories={this.state.categories}/>}/>
                        <Route path={"/books/add"} exact render={()=> <BookAdd authors={this.state.authors} categories={this.state.categories} onAddBook={this.addBook}/>}/>
                       <Route path={"/books"} exact render={()=> <Books books={this.state.books} onTaken={this.markAsTaken} onDelete={this.deleteBook}/>}/>



                   </div>
               </main>
           </Router>
        )
    }
}

export default App;
