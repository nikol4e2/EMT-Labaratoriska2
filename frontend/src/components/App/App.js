
import './App.css';
import React, {Component} from "react";
import Books from "../Books/BookList/Books"
import LibraryService from "../../repository/libraryRepository";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Categories from "../Categories/Categories"
import Header from "../Header/header"


class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            books: [],
            categories: []
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


    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
    }

    render() {
        return(
           <Router>
               <Header/>
               <main>
                   <div className={"container"}>

                       <Route path={"/books"} exact render={()=> <Books books={this.state.books}/>}/>
                       <Route path={"/categories"} exact render={()=> <Categories categories={this.state.categories}/>}/>
                        <Redirect to={"/books"}/>

                   </div>
               </main>
           </Router>
        )
    }
}

export default App;
