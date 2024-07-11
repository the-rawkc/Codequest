import React, { useState, useEffect } from 'react';
import './App.css';

const easyQuestions = [
  { question: '5 + 3 = ?', answer: 8 },
  { question: '10 - 2 = ?', answer: 8 },
  { question: '4 + 4 = ?', answer: 8 },
  { question: '7 + 1 = ?', answer: 8 },
  { question: '6 + 2 = ?', answer: 8 },
  { question: '8 - 0 = ?', answer: 8 },
  { question: '2 + 6 = ?', answer: 8 },
  { question: '9 - 1 = ?', answer: 8 },
  { question: '3 + 5 = ?', answer: 8 },
  { question: '0 + 8 = ?', answer: 8 },
  { question: '8 + 0 = ?', answer: 8 },
  { question: '5 + 2 = ?', answer: 7 },
  { question: '6 + 1 = ?', answer: 7 },
  { question: '10 - 3 = ?', answer: 7 },
  { question: '7 - 0 = ?', answer: 7 },
  { question: '3 + 4 = ?', answer: 7 },
  { question: '2 + 5 = ?', answer: 7 },
  { question: '9 - 2 = ?', answer: 7 },
  { question: '1 + 6 = ?', answer: 7 },
  { question: '4 + 3 = ?', answer: 7 },
  { question: '5 + 1 = ?', answer: 6 },
  { question: '10 - 4 = ?', answer: 6 },
  { question: '8 - 2 = ?', answer: 6 },
  { question: '3 + 3 = ?', answer: 6 },
  { question: '6 - 0 = ?', answer: 6 },
  { question: '7 - 1 = ?', answer: 6 },
  { question: '2 + 4 = ?', answer: 6 },
  { question: '4 + 2 = ?', answer: 6 },
  { question: '9 - 3 = ?', answer: 6 },
  { question: '0 + 6 = ?', answer: 6 },
  { question: '5 - 1 = ?', answer: 4 },
  { question: '2 + 2 = ?', answer: 4 },
  { question: '4 - 0 = ?', answer: 4 },
  { question: '7 - 3 = ?', answer: 4 },
  { question: '6 - 2 = ?', answer: 4 },
  { question: '10 - 6 = ?', answer: 4 },
  { question: '3 + 1 = ?', answer: 4 },
  { question: '9 - 5 = ?', answer: 4 },
  { question: '8 - 4 = ?', answer: 4 },
  { question: '1 + 3 = ?', answer: 4 },
  { question: '4 + 0 = ?', answer: 4 },
  { question: '5 + 5 = ?', answer: 10 },
  { question: '10 - 0 = ?', answer: 10 },
  { question: '8 + 2 = ?', answer: 10 },
  { question: '6 + 4 = ?', answer: 10 },
  { question: '7 + 3 = ?', answer: 10 },
  { question: '9 + 1 = ?', answer: 10 },
  { question: '3 + 7 = ?', answer: 10 },
  { question: '2 + 8 = ?', answer: 10 },
  { question: '0 + 10 = ?', answer: 10 },
];


const moderateQuestions = [
  { question: '12 * 3 = ?', answer: 36 },
  { question: '9 * 4 = ?', answer: 36 },
  { question: '6 * 6 = ?', answer: 36 },
  { question: '8 * 5 = ?', answer: 40 },
  { question: '15 * 2 = ?', answer: 30 },
  { question: '10 * 4 = ?', answer: 40 },
  { question: '7 * 7 = ?', answer: 49 },
  { question: '12 * 2 = ?', answer: 24 },
  { question: '18 * 2 = ?', answer: 36 },
  { question: '11 * 3 = ?', answer: 33 },
  { question: '14 * 2 = ?', answer: 28 },
  { question: '16 * 3 = ?', answer: 48 },
  { question: '9 * 5 = ?', answer: 45 },
  { question: '13 * 4 = ?', answer: 52 },
  { question: '17 * 3 = ?', answer: 51 },
  { question: '8 * 6 = ?', answer: 48 },
  { question: '19 * 2 = ?', answer: 38 },
  { question: '11 * 4 = ?', answer: 44 },
  { question: '15 * 4 = ?', answer: 60 },
  { question: '10 * 5 = ?', answer: 50 },
  { question: '12 * 4 = ?', answer: 48 },
  { question: '18 * 3 = ?', answer: 54 },
  { question: '14 * 3 = ?', answer: 42 },
  { question: '16 * 2 = ?', answer: 32 },
  { question: '9 * 6 = ?', answer: 54 },
  { question: '13 * 3 = ?', answer: 39 },
  { question: '17 * 2 = ?', answer: 34 },
  { question: '7 * 8 = ?', answer: 56 },
  { question: '10 * 6 = ?', answer: 60 },
  { question: '19 * 3 = ?', answer: 57 },
  { question: '11 * 5 = ?', answer: 55 },
  { question: '15 * 3 = ?', answer: 45 },
  { question: '12 * 5 = ?', answer: 60 },
  { question: '18 * 4 = ?', answer: 72 },
  { question: '14 * 4 = ?', answer: 56 },
  { question: '16 * 4 = ?', answer: 64 },
  { question: '9 * 7 = ?', answer: 63 },
  { question: '13 * 5 = ?', answer: 65 },
  { question: '17 * 4 = ?', answer: 68 },
  { question: '8 * 7 = ?', answer: 56 },
  { question: '10 * 7 = ?', answer: 70 },
  { question: '19 * 4 = ?', answer: 76 },
  { question: '11 * 6 = ?', answer: 66 },
  { question: '15 * 5 = ?', answer: 75 },
  { question: '12 * 6 = ?', answer: 72 },
  { question: '18 * 5 = ?', answer: 90 },
  { question: '14 * 5 = ?', answer: 70 },
  { question: '16 * 5 = ?', answer: 80 },
  { question: '9 * 8 = ?', answer: 72 },
  { question: '13 * 6 = ?', answer: 78 },
];

const hardQuestions = [
  { question: '15 + (3 * 2) - 4 = ?', answer: 17 },
  { question: '20 / 2 + 7 - 3 = ?', answer: 17 },
  { question: '30 - (2 * 6) + 1 = ?', answer: 17 },
  { question: '18 + 9 = ?', answer: 27 },
  { question: '25 - 4 = ?', answer: 21 },
  { question: '40 / 2 + 3 - 1 = ?', answer: 22 },
  { question: '35 - (2 * 5) + 8 = ?', answer: 26 },
  { question: '50 - (4 * 5) + 3 = ?', answer: 33 },
  { question: '21 + (5 * 3) - 6 = ?', answer: 30 },
  { question: '28 - (3 * 4) + 7 = ?', answer: 23 },
  { question: '36 + (4 * 2) - 5 = ?', answer: 39 },
  { question: '45 - (5 * 3) + 9 = ?', answer: 54 },
  { question: '60 / 2 + 4 - 2 = ?', answer: 32 },
  { question: '42 - (6 * 3) + 5 = ?', answer: 23 },
  { question: '55 + (7 * 2) - 8 = ?', answer: 61 },
  { question: '64 - (8 * 3) + 6 = ?', answer: 38 },
  { question: '70 / 2 + 9 - 3 = ?', answer: 38 },
  { question: '78 - (9 * 4) + 10 = ?', answer: 36 },
  { question: '90 / 3 + 7 - 2 = ?', answer: 35 },
  { question: '84 - (7 * 5) + 9 = ?', answer: 40 },
  { question: '95 + (8 * 3) - 12 = ?', answer: 67 },
  { question: '100 / 2 + 10 - 5 = ?', answer: 55 },
  { question: '112 - (10 * 4) + 8 = ?', answer: 70 },
  { question: '120 / 3 + 12 - 6 = ?', answer: 46 },
  { question: '108 - (9 * 5) + 11 = ?', answer: 54 },
  { question: '126 + (7 * 3) - 14 = ?', answer: 147 },
  { question: '132 - (11 * 4) + 9 = ?', answer: 77 },
  { question: '140 / 2 + 14 - 7 = ?', answer: 70 },
  { question: '144 - (12 * 3) + 15 = ?', answer: 75 },
  { question: '154 + (11 * 2) - 16 = ?', answer: 159 },
  { question: '168 - (14 * 3) + 18 = ?', answer: 134 },
  { question: '176 / 4 + 22 - 8 = ?', answer: 48 },
  { question: '182 - (13 * 5) + 20 = ?', answer: 127 },
  { question: '190 + (10 * 3) - 17 = ?', answer: 213 },
  { question: '198 - (16 * 4) + 25 = ?', answer: 107 },
  { question: '200 / 2 + 20 - 10 = ?', answer: 110 },
  { question: '216 - (12 * 5) + 30 = ?', answer: 126 },
  { question: '224 + (14 * 3) - 18 = ?', answer: 254 },
  { question: '238 - (17 * 4) + 22 = ?', answer: 162 },
  { question: '246 / 3 + 26 - 12 = ?', answer: 76 },
  { question: '252 - (14 * 6) + 28 = ?', answer: 100 },
  { question: '264 + (11 * 4) - 14 = ?', answer: 310 },
  { question: '270 - (18 * 3) + 32 = ?', answer: 236 },
  { question: '280 / 4 + 35 - 15 = ?', answer: 70 },
  { question: '294 - (21 * 5) + 38 = ?', answer: 87 },
  { question: '306 + (17 * 3) - 20 = ?', answer: 347 },
  { question: '312 - (13 * 6) + 40 = ?', answer: 134 },
  { question: '324 / 3 + 36 - 18 = ?', answer: 108 },
  { question: '336 - (14 * 7) + 42 = ?', answer: 56 },
  { question: '350 + (15 * 4) - 24 = ?', answer: 386 },
];



const getRandomQuestion = (questions) => {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
};

const Level = ({ mode, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion(questions));
  const [timer, setTimer] = useState(30);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    setIntervalId(countdown);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      document.getElementById(`${mode}-result`).innerHTML = '<p style="color: red;">Time\'s up! Try again.</p>';
    }
  }, [timer, mode]);

  const checkAnswer = () => {
    const answer = document.getElementById(`${mode}-answer`).value;
    const resultDiv = document.getElementById(`${mode}-result`);
    if (parseInt(answer) === currentQuestion.answer) {
      resultDiv.innerHTML = '<p style="color: green;">Correct! Proceed to the next section.</p>';
    } else {
      resultDiv.innerHTML = '<p style="color: red;">Incorrect. Try again.</p>';
    }
    clearInterval(intervalId);
  };

  return (
    <div>
      <h2>{`${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`}</h2>
      <p>Solve this problem to continue:</p>
      <p>{currentQuestion.question}</p>
      <p>Time remaining: {timer} seconds</p>
      <input type="text" id={`${mode}-answer`} />
      <button onClick={checkAnswer}>Submit</button>
      <div id={`${mode}-result`}></div>
    </div>
  );
};

function App() {
  const [mode, setMode] = useState(null);

  return (
    <div className="App">
      <h1>CodeQuest</h1>
      <div className="mode-selection">
        <button onClick={() => setMode('easy')}>Easy Mode</button>
        <button onClick={() => setMode('moderate')}>Moderate Mode</button>
        <button onClick={() => setMode('hard')}>Hard Mode</button>
      </div>
      <div className="mode-content">
        {mode === 'easy' && <Level mode="easy" questions={easyQuestions} />}
        {mode === 'moderate' && <Level mode="moderate" questions={moderateQuestions} />}
        {mode === 'hard' && <Level mode="hard" questions={hardQuestions} />}
      </div>
    </div>
  );
}

export default App;
