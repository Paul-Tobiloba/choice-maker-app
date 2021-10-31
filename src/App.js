import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import "./App.css";
import Result from "./components/Result";

function App() {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    {
      id: 1,
      text: "",
      isCorrect: false,
    },
    {
      id: 2,
      text: "",
      isCorrect: false,
    },
    {
      id: 3,
      text: "",
      isCorrect: false,
    },
    {
      id: 4,
      text: "",
      isCorrect: false,
    },
  ]);
  const [displayData, setDisplayData] = useState({});
  const [showResult, setShowResult] = useState(false);

  const addOption = (e) => {
    e.preventDefault();
    setOptions([
      ...options,
      {
        id: options.length + 1,
        text: "",
        isCorrect: false,
      },
    ]);
  };
  const randomAnswer = () => {
    let random = Math.floor(Math.random() * options.length);
    options[random].isCorrect = true;
    setOptions([...options]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
    setDisplayData({ question, options });
    setQuestion("");
    randomAnswer();
    setOptions([
      {
        id: 1,
        text: "",
        isCorrect: false,
      },
      {
        id: 2,
        text: "",
        isCorrect: false,
      },
      {
        id: 3,
        text: "",
        isCorrect: false,
      },
      {
        id: 4,
        text: "",
        isCorrect: false,
      },
    ]);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (e, id) => {
    const newAr = options.map((option) => {
      if (option.id === id) {
        return {
          id: id,
          text: e.target.value,
          isCorrect: option.isCorrect,
        };
      } else {
        return option;
      }
    });

    setOptions(newAr);
  };

  return (
    <div className="App h-full">
      <Header className="" />
      {!showResult && (<MainContent
        question={question}
        options={options}
        handleQuestionChange={handleQuestionChange}
        handleOptionChange={handleOptionChange}
        onSubmit={onSubmit}
        addOption={addOption}
      />)}
      {showResult && (
        <Result
          displayData={displayData}
          resetDisplayData={() => {
            setDisplayData({});
            setShowResult(false);
          }}
          randomNumber={() => {
            randomAnswer();
            setCount(count + 1);

          }}
        />
      )}

    </div>
  );
}

export default App;