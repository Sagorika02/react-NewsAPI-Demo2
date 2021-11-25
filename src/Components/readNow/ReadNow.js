import React, { useState, useEffect } from 'react'

export default function ReadNow() {

    // Fetching data from db.json
    const [read, setRead] = useState([]);
    useEffect(() => {
        fetch(' http://localhost:3002/news')
            .then(res => res.json())
            .then(data => setRead(data))
    }, []);

    return (
        <div className="readnow">
            <div data-testid="value" className="container">
                <div data-testid="rowClass" className="row">
                    {
                        read.map(item => <div key={item.id} className="col-md-4 mt-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item?item.urlToImage:''} className="card-img-top" alt="Not Avaiable" />
                                <div className="card-body">
                                    <h5 className="card-title">{item?item.title:''}</h5>
                                    <p className="card-text">{item?item.description:''}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
