import React, {useEffect} from "react";
import LoadingPage from "../components/LoadingPage";
import {isAuthenticated} from "../utils/authentication";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated())
            return navigate("/login");
    }, [navigate])

    return (
        <LoadingPage />
    );
}

export default Index;