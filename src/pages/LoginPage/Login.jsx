import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';
import { HOME_PATH } from '../../constants';

axios.defaults.baseURL = "http://localhost:8000";

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameInput = (e) => setUsername(e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const navigate = useNavigate();


    const handleLogIn = (e) => {
        e.preventDefault(); // prevents the form from being submitted (i.e. the page from rerendering and state being lost)

        axios({
            method: "post",
            url: "/api/login",
            data: {
                username: username,
                password: password,
            },
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
              //handle success
              console.log(response.data);
              if (response.data['status'] === 'success') {
                navigate(HOME_PATH, {state: {username:username}});
              }

            }).catch(function (response) {
              //handle error
              console.log(response);
            });
    }

    return (
        <div className='login-container'>
            <h1>AGORA</h1>
            <form onSubmit={handleLogIn}>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' autoComplete='off' onChange={handleUsernameInput}></input>
                <label htmlFor='password'>Password:</label>
                <input type='text' id='password' autoComplete='off' onChange={handlePasswordInput}></input>
                <button type='submit'>Log in</button>
            </form>
        </div>
    );
}

export default Login;