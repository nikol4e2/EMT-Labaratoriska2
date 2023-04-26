import axios from "../custom-axios/axios";

const LibraryService={
    fetchBooks:() =>{
        return axios.get("/books");
    },

    fetchCategories:()=>{
        return axios.get("/books/categories");
    },
    fetchAuthors:()=>{
        return axios.get("/books/authors");
    },

    deleteBook: (id) =>{
        return axios.delete(`/books/delete/${id}`);
    },

    markAsTaken: (id) =>{
        return axios.post(`/books/marktaken/${id}`);
    },
    addBook: (name, bookCategory, author, availableCopies) =>{
        return axios.post("/books/add",{
            "name": name,
            "bookCategory": bookCategory,
            "author": author,
            "availableCopies": availableCopies
        })
    },
    editBook: ( id, name,  bookCategory,  author,  availableCopies) => {
        return axios.put(`/books/edit/${id}`,{
            "name": name,
            "bookCategory": bookCategory,
            "author": author,
            "availableCopies": availableCopies
        });

    },
    getBook:(id) =>{
        return axios.get(`/books/${id}`);
    }

}

export default LibraryService;