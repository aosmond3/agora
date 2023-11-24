import './Home.css';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from '../../constants';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000";


function Home () {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const DisplayGroups = () => {
        useEffect(() => {
            try {
                setUsername(location.state.username);
            } catch (error) {
                console.log("You arrived at this page without logging in you sneaky cat; you are now being banished to the login page");
                navigate(LOGIN_PATH)
            }
        });

        axios({
            method: "get",
            url: "/api/users/groups",
            params: {
                username: username
            },
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
              //handle success
              const groups = response.data["group_ids"]
              console.log(groups); // TODO: left off here, need to display this list of groups

            }).catch(function (response) {
              //handle error
              console.log(response);
            });


        return (
            <h1>You are now logged in {username}!</h1>
        );
    }

    return (
        <DisplayGroups />
    );
}

export default Home;