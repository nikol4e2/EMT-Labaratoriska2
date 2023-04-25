
import './App.css';
import React, {Component} from "react";
import Books from "../Books/Books"
import LibraryService from "../../repository/libraryRepository";


class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            books: []
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

    componentDidMount() {
        this.loadBooks();
    }

    render() {
        return(
            <div>
                <Books books={this.state.books}/>
            </div>
        )
    }
}

export default App;
