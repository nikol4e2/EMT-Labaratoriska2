import React from "react";


const bookTerm = (props) =>{
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.bookCategory}</td>
            <td scope={"col"} >{props.term.author.name}</td>
            <td scope={"col"} >{props.term.availableCopies}</td>
        </tr>
    )
}

export default bookTerm;