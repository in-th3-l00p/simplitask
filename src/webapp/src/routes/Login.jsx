import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import InputGroup from "../components/InputGroup";

import "../styles/authForms.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={"center-container"}>
            <form>
                <h2 className={"form-title"}>Authenticate</h2>
                <InputGroup
                    value={username}
                    setValue={setUsername}
                >
                    Username
                </InputGroup>
                <InputGroup
                    value={password}
                    setValue={setPassword}
                >
                    Password
                </InputGroup>
                <span>
                    <button
                        type={"submit"}
                        className={"form-submit button"}
                        style={{ marginRight: 10+"px" }}
                    >
                        Login
                    </button>
                    <button
                        type={"button"}
                        className={"button"}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </span>
            </form>
        </div>
    );
}

export default Login;