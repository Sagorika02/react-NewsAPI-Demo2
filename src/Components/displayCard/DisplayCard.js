import React from 'react'

export default function Filcard({ news}) {
    // to Display filter news
    return (
        <div>
            <div className="col-sm-6 offset-md-3">
                <div className="card mt-3">
                    <div data-testid="cardClass" className="card-body">
                        <img className="card-img-top h-25" src={news ? news.urlToImage : ""} alt="" />
                        <div className="card-body">
                            <h5 className="card-title h2 text-danger">{news ? news.title : ""}</h5>
                            <p className="card-text b">{news ? news.description : ""}</p>
                            <p className="card-text">
                                <small className="text-muted">{news ? news.author : ""}</small>
                            </p>
                            <p className="card-text"><a href={news ? news.url : ""}>Click Me</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


