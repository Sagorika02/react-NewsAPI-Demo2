import React from 'react'

export default function Card(props) {
    // Add data into json file
    const Addnews = () => {
        fetch(' http://localhost:3001/api/v1/news',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(props)
            })
    }
    return (
        <div>           
            <div className="col-sm-6 offset-md-3">
                <div className="card mt-3">
                    <div data-testid="cardClass" className="card-body">
                        <img src={props.image} className="card-img-top" alt="Cannot Load" />
                        <div className="card-body">
                            <h5 data-testid="checkTitle" className="card-title">{props.title}</h5>
                            <p data-testid="checkText" className="card-text">{props.author}</p>
                            <a data-testid="btnSubmit" href="#" className="btn btn-primary" onClick={Addnews}>Read Later</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
