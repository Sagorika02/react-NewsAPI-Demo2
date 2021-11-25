import React from 'react'

export default function Register() {
    return (
        <div  data-testid="outerdiv" className="container mt-2">
            <div className="row">
                <h2 className="text-center">New User Sign Up</h2>
                <div className="col-md-4 offset-md-4">
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="mb-2">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-2">
                        <button data-testid="registerbt"  className="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
