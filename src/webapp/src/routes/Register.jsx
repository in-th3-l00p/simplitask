import React, { useState } from "react";
import "../styles/authForms.css";
import {useNavigate} from "react-router-dom";
import InputGroup from "../components/InputGroup";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className={"center-container"}>
            <form>
                <h2 className={"form-title"}>Create an account</h2>
                <InputGroup
                    value={username}
                    setValue={setUsername}
                >
                    Username
                </InputGroup>
                <InputGroup
                    value={email}
                    setValue={setEmail}
                >
                    Email address
                </InputGroup>
                <InputGroup
                    value={password}
                    setValue={setPassword}
                >
                    Password
                </InputGroup>
                <InputGroup
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                >
                    Confirm password
                </InputGroup>
                <span>
                    <button
                        type={"submit"}
                        className={"form-submit button"}
                        style={{ marginRight: 10+"px" }}
                    >
                        Register
                    </button>
                    <button
                        type={"button"}
                        className={"button"}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </span>
            </form>
        </div>
    );
}

export default Register;