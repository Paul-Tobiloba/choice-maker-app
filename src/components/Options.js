import React from "react";

function Options({ option, handleOptionChange }) {


    return (
        <div className="options">

            <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    {option.id}
                </span>
                <input
                    type="text"
                    value={option.text}
                    onChange={handleOptionChange}
                    placeholder="Enter an answer"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
            </div>
        </div>
    );
}

export default Options;