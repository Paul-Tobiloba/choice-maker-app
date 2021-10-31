import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);



  return (
    <div className="App h-full">
      <Header className="" />
      <MainContent className="md:grid md:grid-cols-3 md:gap-6" />
    </div>
  );
}

export default App;
