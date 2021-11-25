import React, { useEffect, useState } from 'react'
import Card from '../card/Card';


export default function DisplayCard() {
    // Fetching data from api
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/news', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
   

    return (
        <div>             
            <h2 id="heading" data-testid="ancestor" style={{ textAlign: 'center' }} className="mt-3"><u data-testid="descendant">Daily Live News Feed</u></h2>
            {
                news.map(data => <Card id={data.id} image={data.urlToImage}  title={data.title} author={data.author} />)
            }       
        </div>
    )
}
