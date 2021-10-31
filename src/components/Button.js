import React, { useState } from "react";

function Button({ type, text, onClick, disabled }) {
    const [count, setCount] = useState(0);
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {text}
        </button>
    );
}

export default Button;