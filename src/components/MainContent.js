import React from "react";
import { useState } from "react";
import Options from "./Options";
import Button from "./Button";

function MainContent({ question, options, handleQuestionChange, handleOptionChange }) {
    const handleChange = (event) => {
        handleQuestionChange(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div className="main-content shadow sm:rounded-md sm:overflow-hidden md:grid md:grid-cols-3 md:gap-6 m-5 p-4">
            <h1 className="text-2xl font-medium leading-6 text-gray-900 m-2">Main Content</h1>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit}>
                    <label
                        className="block text-left text-gray-700 text-lg font-bold mb-2"
                        htmlFor="question"
                    >
                        Question
                    </label>
                    <input
                        type="text"
                        value={question}
                        onChange={handleChange}
                        placeholder="Enter a question"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    />
                    <label
                        className="options__label block text-left text-gray-700 text-lg font-bold mb-2"
                    >
                        Options
                    </label>
                    {options.map((option, index) => {
                        return (
                            <Options
                                key={index}
                                option={option}
                                index={index}
                                handleOptionChange={(e) => handleOptionChange(e, option.id)}
                            />
                        );
                    })}


                    <Button type="submit" />
                </form>
            </div>
        </div>

    );
}

export default MainContent;
