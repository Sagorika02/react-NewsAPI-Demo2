import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Filcard from '../DisplayCard/displayCard';
import { v4 as uuidv4 } from 'uuid';
import { Modal, InputGroup, Button, ButtonGroup, FormControl } from 'react-bootstrap';

export default function Dashboard(props) {
  const [news, setNews] = useState([]);

  //UseParam
  const { showModal } = useParams();

  //States  
  const [endPoint, setEndPoint] = useState(1);
  // States for filtering
  const [country, setCountry] = useState('in');
  const [category, setCategory] = useState('');
  const [newSource, setNewSource] = useState('');
  const [query, setQuery] = useState('');
  const [pageSize, setPageSize] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [show, setShow] = useState(true);


  useEffect(() => {
    //Checking The Category
    if (showModal) handleShow();

    //Fetching The Model From Source    
    fetch('http://localhost:3001/auth/v1/isAuthenticated', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        //Data Recovering
        if (props.loginStatus) {
          fetch(
            'https://newsapi.org/v2/everything?q=covid&apiKey=177d00a5b1ac4dffaf4f029600fd4147&language=en&page=1'
          )
            .then((res) => res.json())
            .then((ele) => setNews(ele.articles));
        }

      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmitFilter = () => {
    if (!(pageSize >= 20 && pageSize <= 100) && endPoint !== 3) {
      if (!pageSize) {
        setPageSize(20);
        // console.log('pageSize', pageSize);
      } else {
        alert('Enter Correct pageSize(20-100)');
        return;
      }
    }
    let title;
    if (endPoint === 1) {
      title = 'top-headlines';
    } else if (endPoint === 2) {
      title = 'everything';
    } else {
      title = 'sources';
    }
    const urlContst = `https://newsapi.org/v2/${title}?${country !== '' && newSource === '' ? endPoint !== 2 ? 'country=' + country : '' : endPoint === 1 && newSource === ''
        ? 'country=in'
        : ''
      }${category !== '' && newSource === '' ? '&category=' + category : ''}${newSource !== '' ? 'sources=' + newSource : ''
      }${query !== '' ? (endPoint !== 2 ? '&q=' + query : 'q=' + query) : ''}${pageSize !== 0 ? '&pageSize=' + pageSize : ''
      }${pageNo !== 0 ? '&page=' + pageNo : ''}&apiKey=177d00a5b1ac4dffaf4f029600fd4147`;
    fetch(urlContst)
      .then((res) => res.json())
      .then((data) => {
        if (endPoint !== 3) {
          setNews(data.articles);
        } else {
          setNews(data.sources);
        }
        handleClose();
      });
  };


  /**Return Statement */

  return (
    <div>
      {
        news ? (
          <div>
            <h3 type="text" className="btn-light text-center"> Result </h3>
            {/* Modal Starts */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title id="filter">Filter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Endpoints:{' '}
                {/**Button Section */}
                <ButtonGroup>
                  <Button className="btn btn-primary ml-2" onClick={() => setEndPoint(1)} active={endPoint === 1}>
                    Today Trending
                </Button>
                  <Button className="btn btn-secondary ml-2" onClick={() => setEndPoint(2)} active={endPoint === 2}>
                    Everything
                </Button>
                  <Button className="btn btn-primary ml-2" onClick={() => setEndPoint(3)} active={endPoint === 3}>
                    Sources
                </Button>
                </ButtonGroup>

                {/**Option1 Section */}

                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1" placeholder="Enter Country Name">Country</label>
                  <select className="form-control" id="exampleFormControlSelect1" placeholder="Country"
                    onChange={(e) => setCountry(e.target.value)} disabled={newSource !== '' || endPoint === 2}>
                    <option></option>
                    <option value="in">India</option>
                    <option value="it">Itali</option>
                    <option value="ch">Chaina</option>
                    <option value="si">Singapore</option>
                    <option value="hk">Honkang</option>
                    <option value="us">United States</option>
                    <option value="ua">Arabic</option>
                    <option value="ve">Venuzula</option>

                  </select>
                </div>
                {/**Option2 Section */}
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Category</label>
                  <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setCategory(e.target.value)} disabled={newSource !== '' || endPoint === 2}>
                    <option></option>
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                    <option value="science">science</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="entertainment">entertainment</option>

                  </select>
                </div>
                {/**Input Group */}
                <InputGroup className="my-3">
                  <FormControl placeholder=" Enter Sources" disabled={endPoint === 2 || endPoint === 3}
                    onChange={(e) => setNewSource(e.target.value)} />
                </InputGroup>
                <InputGroup className="my-3">
                  <FormControl placeholder=" Enter Your Query" disabled={endPoint === 3} onChange={(e) => setQuery(e.target.value)} />
                </InputGroup>
                <InputGroup className="my-3">
                  <FormControl placeholder="Enter Page Size" disabled={endPoint === 3} onChange={(e) => setPageSize(parseInt(e.target.value))} />
                </InputGroup>
                <InputGroup className="my-3">
                  <FormControl placeholder="Enter Page Number" disabled={endPoint === 3} onChange={(e) => setPageNo(parseInt(e.target.value))} />
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
              </Button>
                <Button id="submit" variant="success" onClick={onSubmitFilter}>
                  Filter
              </Button>
              </Modal.Footer>
            </Modal>
            {/**Modal Ends */}
            {news.map((ele) => (
              <Filcard news={ele} saveFunction={onSubmitFilter} disableButton={true} key={uuidv4()} />
            ))}

          </div>
        ) : alert("Problem occur")
      }

    </div>
  )
}
