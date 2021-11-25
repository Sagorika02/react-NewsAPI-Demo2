

import React from "react";
const DisplayCard = (props) => {

    return (
        <div className="col-md-3">
            <div className="card mt-3">
                <div data-testid="card" className="card-body">
                
                    <h5 data-testid="cardh5"  className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                    <p className="card-text">{props.description}</p>
                   
                </div>
            </div>
        </div>
    )
};
export default DisplayCard;
