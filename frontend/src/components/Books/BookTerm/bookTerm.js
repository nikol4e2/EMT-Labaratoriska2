import React from "react";


const bookTerm = (props) =>{
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.bookCategory}</td>
            <td scope={"col"} >{props.term.author.name}</td>
            <td scope={"col"} >{props.term.availableCopies}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"} onClick={()=> props.onDelete(props.term.id)}>Delete</a>
                <a title={"Taken"} className={"btn btn-success"} onClick={()=>props.onTaken(props.term.id)}>Mark as taken</a>
            </td>
        </tr>
    )
}

export default bookTerm;