import "../styles/authForms.css"
import React from "react";

const InputGroup = ({ value, setValue, children }) => {
    return (
        <span className={"input-group"}>
            <p>{children}</p>
            <input
                type={"text"}
                className={"input"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </span>
    );
}

export default InputGroup;