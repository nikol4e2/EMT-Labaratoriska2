import React from "react";
import BookTerm from "../BookTerm/bookTerm"
import Link from "react-router-dom/Link";
import ReactPaginate from "react-paginate";
class Books extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {

        const offset=this.state.size*this.state.page;
        const nextPageOffset=offset+this.state.size;
        const pageCount= Math.ceil(this.props.books.length/this.state.size);
        const products= this.getProductsPage(offset, nextPageOffset);

        return(
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"} >
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies </th>
                            </tr>
                            </thead>
                            <tbody>
                            {products}
                            </tbody>
                        </table>
                    </div>
                    <ReactPaginate  previousLabel={"back"}
                                    nextLabel={"next"}
                                    breakLabel={<a ref="/#">...</a>}
                                    breakClassName={"break-me"}
                                    pageClassName={"ml-1"}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handleClick}
                                    containerClassName={"pagination m-4 justify-content-center"}
                                    activeClassName={"active"}
                    />
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <a className={"btn tbn-block btn-dark"} href="/books/add">Add new book</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    handleClick=(data)=>
    {
        let selected=data.selected;
        this.setState({
            page:selected
        })
    }

    getProductsPage = (offset, nextPageOffset) =>{
        return this.props.books.map((term)=>{
            return(
                <BookTerm term={term} onDelete={this.props.onDelete} onTaken={this.props.onTaken} onEdit={this.props.onEdit}/>
            )
        }).filter((book, index)=>{
            return index >= offset && index<nextPageOffset;
        })
    }
}



export default Books;
