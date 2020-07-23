import React, { Clipboard } from "react";

const Line = ({ title, symbol }) => {
    return (
        <button className="line">
            <span>{symbol}</span>
            {title}
        </button>
    );
};

export default Line;
