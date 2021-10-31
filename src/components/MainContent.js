import React from "react";
import { useState } from "react";
import Options from "./Options";
import Button from "./Button";

function MainContent({
    question,
    options,
    handleQuestionChange,
    handleOptionChange,
    onSubmit,
    addOption,
}) {
    const handleChange = (event) => {
        handleQuestionChange(event);
    };

    const getDisabled = () => {
        const empty = options.filter((option) => option.text == "");

        if (empty.length || !question) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="main-content shadow sm:rounded-md sm:overflow-hidden md:grid md:grid-cols-3 md:gap-6 m-5 p-4">
            <div>
                <h1 className="text-2xl font-medium leading-6 text-gray-900 m-2">
                    Stuck on a question?
                </h1>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    We can help you find the answer to your question.
                </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form>
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
                    <label className="options__label block text-left text-gray-700 text-lg font-bold mb-2">
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
                    <div className="flex flex-col sm:flex-row justify-between">
                        <Button onClick={addOption} text="+ Add Option" />{" "}
                        <Button
                            onClick={onSubmit}
                            type="submit"
                            text="Answer!"
                            disabled={getDisabled()}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainContent;