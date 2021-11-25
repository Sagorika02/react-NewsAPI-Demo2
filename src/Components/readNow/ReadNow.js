import DisplayCard from '../displayCard/DisplayCard'
import React, { useState, useEffect } from "react";

const ReadNow = () => {
  
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3002/News')
            .then(res => res.json())
            .then((data) => setNews(data));
    }, [])

   
    return (<div>
                <h2>ReadNow</h2>
             <div data-testid="outerdiv" className="container">
                <div data-testid="innerdiv" className="row">
                
                    {
                       news.map(item => <DisplayCard  title={item.title}  author={item.author} description={item.description} />)
                    }
                
                </div>
            </div>
      </div>
    )
};

export default ReadNow;
