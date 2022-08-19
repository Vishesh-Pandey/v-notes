import React, { useState } from 'react'
import { Link, useNavigationType } from 'react-router-dom';
import Account from './Account';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const login = () => {
        fetch(`https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/login`).then(
            (response) => {
                return response.json();
            }
        ).then((data) => {
            let records = data.items;
            let flag = 0
            for (let i = 0; i < records.length; i++) {
                if (records[i].username === username && records[i].password === password) {
                    flag = 1
                    props.confirmLogin(username);
                    navigate('/account');
                }
            }
            if (flag === 0) {
                alert("Incorrect username or password !")
            }
        })
    }

    const changingUsername = (event) => {
        setUsername(event.target.value);
    }

    const changingPassword = (event) => {
        setPassword(event.target.value);
    }


    return (
        <>
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col-md-6 m-auto">
                        <div className="row bg-secondary bg-opacity-25 rounded-5 py-5">
                            <div className="col-12 my-3">
                                Login | and start creating your <b> notes...</b> 😃
                            </div>
                            <div className="col-12 my-3">
                                <input className='rounded border-0 p-2 w-75' type="text" value={username} onChange={changingUsername} placeholder='Enter username' />
                            </div>
                            <div className="col-12 my-3">
                                <input className='rounded border-0 p-2 w-75' type="text" value={password} onChange={changingPassword} placeholder='Enter password' />
                            </div>
                            <div className="col-12 my-3">
                                <button className="btn btn-secondary bg-opacity-25 w-75" onClick={login}>Login</button>
                            </div>
                            <div className="col-12 my-3">
                                <Link to="/signup" className="btn btn-secondary bg-opacity-25 w-75">Create a new account</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <svg width={20} xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <div>
                                Please <b>don't use </b> auto-complete feature of your keyboard. Also username and password is <b>case-sensitive</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login