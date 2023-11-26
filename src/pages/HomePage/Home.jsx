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
    const [groups, setGroups] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        try {
            setUsername(location.state.username);
            console.log("setting username internal variable");
        } catch (error) {
            console.log("You arrived at this page without logging in you sneaky cat; you are now being banished to the login page");
            navigate(LOGIN_PATH);
        }

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
                setGroups(response.data["group_ids"]);
                console.log("successfully retrieved groups for user");
            }).catch(function (response) {
                //handle error
                console.log(response);
        });

    }, [location.state.username, username, navigate]);

    return (
        <div>
            {groups?.map((group, index) => (
                <li key={index}>{group}</li>
            ))}
        </div>
    );
}

export default Home;