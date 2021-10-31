import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';


import './App.css';
import Result from './components/Result';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    {
      id: 1,
      text: "",
      isCorrect: false
    },
    {
      id: 2,
      text: "",
      isCorrect: false
    },
    {
      id: 3,
      text: "",
      isCorrect: false
    },
    {
      id: 4,
      text: "",
      isCorrect: false
    }
  ]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleOptionChange = (e, id) => {


    options.forEach(option => {

      if (option.id === id) {
        let newOptions = {
          id: id,
          text: e.target.value,
          isCorrect: option.isCorrect
        }
        setOptions([...options, options[id - 1] = newOptions]);
      }
    });
  }


  return (
    <div className="App h-full">
      <Header className="" />
      <MainContent className="md:grid md:grid-cols-3 md:gap-6" question={question} options={options} handleQuestionChange={handleQuestionChange} handleOptionChange={handleOptionChange} />
      <Result count={count} />
    </div>
  );
}

export default App;
