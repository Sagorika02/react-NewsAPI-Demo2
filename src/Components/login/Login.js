import React,{useState} from 'react'
import {useHistory} from 'react-router';

export default function Login() {
   
    const [username, setUsername ]= useState('');
    const [password, setPassword ]= useState('');
    const LoginHandler = () =>
    {
        fetch('http://localhost:3001/auth/v1',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password })
           
        }).then(res=>res.json())
        .then(data=>{
            localStorage.setItem('token',data.token)
           
        })
       
         //.then(data=>localStorage.setItem('token',data.token))
         //history.push('/');
    }
   
    return (
        <div className="container mt-2">
            <div data-testid="outerdiv" className="row">
                <h2 className="text-center">Login Here</h2>
                <div className="col-md-4 offset-md-4">
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username" />
                    </div>
                    <div className="mb-2">
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-2">
                        <button data-testid="buttontest" className="btn btn-success" onClick={LoginHandler}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}