import React, { useState } from "react";
import Button from "./Button";

export default function Result({ count, displayData, resetDisplayData, randomAnswer }) {
    return (
        <div>
            <h4 className="
                block text-left text-gray-700 text-lg font-bold mb-2
            ">Question is: {displayData && displayData.question}</h4>
            <br />
            <h4 className="block text-left text-gray-700 text-lg font-bold mb-2">options are:</h4> <br />
            {displayData &&
                displayData.options.map((option, i) => <span
                    className="flex flex-wrap justify-center m-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    key={i}>{option.text}</span>)}
            <div className="flex flex-col sm:flex-row justify-between">
                <Button type="button" text="Ask Again" onClick={randomAnswer} />
                <Button type="button" text="Reset" onClick={resetDisplayData} />
            </div>

        </div>
    );
}