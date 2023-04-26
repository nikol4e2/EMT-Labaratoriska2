
import './App.css';
import React, {Component} from "react";
import Books from "../Books/BookList/Books"
import LibraryService from "../../repository/libraryRepository";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Categories from "../Categories/Categories"
import Header from "../Header/header"
import BookAdd from "../Books/bookAdd/bookAdd"

import BookEdit from "../Books/BookEdit/bookEdit";


class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            books: [],
            categories: [],
            authors: [],
            selectedBook:{}
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

    getBook=(id) =>{
        console.log("BookID:",id);
        LibraryService.getBook(id)
            .then((data)=> {
                console.log("getBook data", data.data)


                this.setState({
                    selectedBook: data.data
                })
            })

    }


    editBook=(id, name,  bookCategory,  author,  availableCopies) =>{
        LibraryService.editBook(id,name,bookCategory,author,availableCopies)
            .then(()=>this.loadBooks());


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
                       <Switch>
                           <Route path={"/categories"} exact render={()=> <Categories categories={this.state.categories}/>}/>
                           <Route path={"/books/add"} exact render={()=> <BookAdd authors={this.state.authors} categories={this.state.categories} onAddBook={this.addBook}/>}/>
                           <Route path={"/books/edit/:id" } exact render={()=> <BookEdit authors={this.state.authors} categories={this.state.categories} onEditBook={this.editBook} selectedBook={this.selectedBook}  />}/>
                           <Route path={"/books"} exact render={()=> <Books books={this.state.books} onTaken={this.markAsTaken} onDelete={this.deleteBook} onEdit={this.getBook}/>}/>


                           <Redirect to={"/books"}/>
                       </Switch>



                   </div>
               </main>
           </Router>
        )
    }
}

export default App;
