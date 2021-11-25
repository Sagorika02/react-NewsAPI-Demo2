import Card from "../card/Card";

import React, { useState, useEffect } from "react";

const Dashboard = () => {
  
    const [news, setNews] = useState([]);
    useEffect(() => {
           fetch('http://localhost:3001/api/v1/news',
    {
      headers:{
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
    })     .then(res => res.json())
            .then((data1) => setNews(data1));
    }, [])

    const AddNewsFunction = (addnews) => {
        fetch('http://localhost:3002/News', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addnews)
        })
        setNews([...news, addnews]);
    }

    return (<div><h2>Trending News</h2>
             <div data-testid="outerdiv" className="container">
                <div data-testid="innerdiv" className="row">
                
                    {
                       news.map(item => <Card AddFunction={AddNewsFunction} title={item.title}  author={item.author} description={item.description} />)
                    }
                
                </div>
            </div>
      </div>
    )
};

export default Dashboard;
