import React from 'react';
import './styles/btnstyle1.css';

const Signup = () => {
    return (
        <div>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="container">
                        <a href="/login">
                        
                        <button class="button1" align="left" role="group" aria-label="login" width="100px">Login</button>
                        </a>
                        <a href="/signup">
                        <button class="button2" align="right" role="group" aria-label="register">Register</button>
                        </a>
                    </div>
                </div>
                
                <div className="modal-body">                       
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInput" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pwd" />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Mobile</label>
                            <input type="tel" className="form-control" id="phone" />
                            {/* <div id="emailHelp" className="form-text">Help statement.</div> */}
                        </div>

                        
                        <button type="submit" className="btn btn-primary w-100 mt-5">Register</button>
                    </form>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Signup