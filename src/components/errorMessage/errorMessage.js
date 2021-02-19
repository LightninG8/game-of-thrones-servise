import React from "react";

import "./errorMessage.css";

import errorImage from "./error.png";

export default function ErrorMessage() {
    return (
        <>
            <img src={errorImage} alt="error" className="img error-img"/>
            <span>Something goes wrong...</span>
        </>
    )
}