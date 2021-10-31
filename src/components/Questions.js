import React, { useState } from "react";
import Options from "./Options";
import Button from "./Button";

function Questions(props) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addQuestion(question, answer);
        setQuestion("");
        setAnswer("");
    };

    return (
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
                    Answer
                </label>
                <Options />
                <Options />
                <Options />

                <Button type="submit" />
            </form>
        </div>
    );
}

export default Questions;