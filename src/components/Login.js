import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    async function check_username() {
        let login_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/login`;
        let data = await fetch(login_api);
        let parsedData = await data.json();
        setUsers(parsedData.items);

        for (let i = 0; i < users.length; i++) {
            if (username === users.username) {
                return true;
            }
        }
        return false;
    }

    async function login() {
        if (username === "" || password === "") {
            alert("Username or password can't be blank!");
            return;
        }

        if (!check_username()) {
            alert("Username do not exist");
            return;
        }

        let login_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/login`
        let data = await fetch(login_api)
        let parsedData = await data.json()
        setUsers(parsedData.items)

        let flag = 0
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username && password === users[i].password) {
                alert("Login Successfull")
                flag = 1
            }
        }
        if (flag == 0) {
            alert("Incorrect username or password")
        }

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

        if (check_username()) {
            alert("Username not available!");
            return;
        }

        let signup_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/signup?username=${username}&password=${password}`;
        let attempt = await fetch(signup_api, { method: 'POST' })
        console.log(attempt)

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
                                <input className='rounded border-0 p-2 w-75' type="text" value={username} onChange={changingUsername} placeholder='Enter username' />
                            </div>
                            <div className="col-12 my-3">
                                <input className='rounded border-0 p-2 w-75' type="text" value={password} onChange={changingPassword} placeholder='Enter password' />
                            </div>
                            <div className="col-12 my-3">
                                <button className="btn btn-secondary bg-opacity-25 w-75" onClick={login}>Login</button>
                            </div>
                            <div className="col-12 my-3">
                                <button className="btn btn-secondary bg-opacity-25 w-75" onClick={signUp}>SignUp</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login