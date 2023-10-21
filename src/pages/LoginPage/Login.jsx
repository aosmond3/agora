import { useState } from 'react';
import axios from 'axios';
import './Login.css';

axios.defaults.baseURL = "http://localhost:8000";

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameInput = (e) => setUsername(e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);


    const handleLogIn = (e) => {
        e.preventDefault(); // prevents the form from being submitted (i.e. the page from rerendering and state being lost)

        // axios({
        //     method: "GET",
        //     url:"/api/users",
        // })
        // .then((response) => {
        //     const res = response.data;
        //     console.log(res);
        // }).catch((error) => {
        // if (error.response) {
        //     console.log(error.response);
        //     console.log(error.response.status);
        //     console.log(error.response.headers);
        //     }
        // });

        axios.post(
            "https://jsonplaceholder.typicode.com/users",
            {
                username: "Kschwam",
                password: "Dog",
            })
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
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