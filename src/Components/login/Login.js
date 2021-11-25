import React, { useState } from 'react'
import { useHistory } from 'react-router';
import authentication from '../login/auth'

export default function Login(props) {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const LoginHandler = () => {
        fetch('http://localhost:3001/auth/v1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(async (data) => {
                localStorage.setItem('token', data.token)
                props.loginStatus(true)
                await authentication.Login();
                history.push('/');
            })
    }

    return (
        <div>
            <div data-testid="containerdiv" className="container mt-2">
                <div>
                    <h2 className="text-center mt-5 mb-4">Login Here</h2>
                    <div className="col-md-4 offset-md-4">
                        <div className="mb-4">
                            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                        </div>
                        <div className="mb-2">
                            <button data-testid="buttonCheck" id="btnLogin" className="btn btn-success pt-2 pb-2 pl-3 pr-3" onClick={LoginHandler}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
