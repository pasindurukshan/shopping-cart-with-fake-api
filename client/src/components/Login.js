import React from 'react'
import './styles/btnstyle2.css';

const Login = () => {
    return (
        <>
       <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="container">
                        <a href="/login">
                        
                        <button class="button3" align="left" role="group" aria-label="login" width="100px">Login</button>
                        </a>
                        <a href="/signup">
                        <button class="button4" align="right" role="group" aria-label="register">Register</button>
                        </a>
                    </div>
                </div>
                
                <div className="modal-body">
                    
                <div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
                <div class="btn-group" role="group" aria-label="...">...</div>
                <div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>
                                    
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInput" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pwd"/>
                        </div>

                            <button type="submit" className="btn btn-primary w-100 mt-5">Login</button>
                    </form>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Login