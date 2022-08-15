import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SignUp() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    async function check_username() {
        let login_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/login`;
        let data = await fetch(login_api);
        let parsedData = await data.json();
        setUsers(parsedData.items);
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username) {
                return true;
            }
        }
        return false;
    }

    async function signUp() {

        if (!window.confirm("Do you want to create a new account ?")) {
            alert("Account not created");
            return;
        }

        if (username === "" || password === "") {
            alert("Username or password can't be blank!");
            return;
        }

        let check = await check_username();

        if (check) {
            alert("Username not available! Please try again");
            return;
        }

        let signup_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/signup?username=${username}&password=${password}`;
        await fetch(signup_api, { method: 'POST' })
        alert("Your account has been created!")

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
                                Sign up | <b>Without</b> email / phone 😃
                            </div>
                            <div className="col-12 my-3">
                                <input value={username} onChange={changingUsername} className='rounded border-0 p-2 w-75' type="text" placeholder='Create username' />
                            </div>
                            <div className="col-12 my-3">
                                <input value={password} onChange={changingPassword} className='rounded border-0 p-2 w-75' type="text" placeholder='Create password' />
                            </div>
                            <div className="col-12 my-3">
                                <button onClick={signUp} className="btn btn-secondary bg-opacity-25 w-75" >Sign up </button>
                            </div>
                            <div className="col-12 my-3">
                                <Link to="/v-notes" className="btn btn-secondary bg-opacity-25 w-75" >Account created ? Click here to Login</Link>
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

export default SignUp