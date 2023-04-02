import React from "react";
import "../styles/loadingPage.css";

const LoadingPage = () => {
    return (
        <div className={"center-container"}>
            <div>
                <h3 className={"title"}>Loading...</h3>
                <div className={"spinner"} />
            </div>
        </div>
    );
}

export default LoadingPage;