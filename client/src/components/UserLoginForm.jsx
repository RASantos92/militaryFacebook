import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Login = ({ setLoggedIn }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = (event) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/user",
                { user, password },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                setLoggedIn();
                navigate(`/userpage/${user.id}`);
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(err.response.data.msg);
            });
    };

    return (
        <fieldset>
            <legend>Sign In</legend>
            <form onSubmit={login}>
                <p className="form-group">
                    <label>User Name:</label>
                    <input
                        type="text"
                        name="userName"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                    />
                </p>
                <p className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="userPassword"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </p>
                <input type="submit" value="Sign In" className="btn btn-info" />
                <p className="error-message">{errorMessage ? errorMessage : ""}</p>
            </form>
        </fieldset>
    );
};

export default Login;