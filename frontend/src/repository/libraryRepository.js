import axios from "../custom-axios/axios";

const LibraryService={
    fetchBooks:() =>{
        return axios.get("/books");
    },

    fetchCategories:()=>{
        return axios.get("/books/categories")
    }

}

export default LibraryService;