import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
const Card = (props) => {
    const title = props.title;
    const author = props.author;
    const description = props.description;
    const AddNewsHandler = () => {
        props.AddFunction({ id: uuidv4(), title,author,description });
    }

    return (
        <div className="col-md-3">
            <div className="card mt-3">
                <div className="card-body">
               
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary" onClick={AddNewsHandler}>ReadLater</a>
                </div>
            </div>
        </div>
    )
};
export default Card;
