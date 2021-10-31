import React, { useState } from "react";

function Button(props) {
    const [count, setCount] = useState(0);



    return (
        <button
           className="inline-flex justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Submit
        </button>
    );
}

export default Button;
