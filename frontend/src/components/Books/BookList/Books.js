import React from "react";
import BookTerm from "../BookTerm/bookTerm"
import Link from "react-router-dom/Link";

const books=(props) =>{
    return (
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
                      {props.books.map((term)=>{
                          return(
                              <BookTerm term={term} onDelete={props.onDelete} onTaken={props.onTaken}/>
                          )
                      })}
                      </tbody>
                  </table>
              </div>
              <div className="col mb-3">
                  <div className="row">
                      <div className="col-sm-12 col-md-12">
                          <a classname={"btn tbn-block btn-dark"} href="/books/add">Add new book</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );

}

export default books;
