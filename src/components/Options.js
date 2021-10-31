import React, { useState } from "react";

function Options(props) {
    // const [isOpen, setIsOpen] = useState(false);

    // const handleClick = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div className="options">
            
            <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    A:
                </span>
                <input
                    type="text"
                    value={props.answer}
                    onChange={props.handleChange}
                    placeholder="Enter an answer"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
            </div>
        </div>
    );
}

export default Options;