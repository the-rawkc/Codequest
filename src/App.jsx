import React, { useState } from 'react';
import './App.css';

const EasyMode = () => (
  <div>
    <h2>Easy Mode</h2>
    <p>Solve this basic math problem to continue:</p>
    <p>5 + 3 = ?</p>
    <input type="text" id="easy-answer" />
    <button onClick={() => checkAnswer('easy', 8)}>Submit</button>
    <div id="easy-result"></div>
  </div>
);

const ModerateMode = () => (
  <div>
    <h2>Moderate Mode</h2>
    <p>Solve this intermediate math problem to continue:</p>
    <p>12 * 3 = ?</p>
    <input type="text" id="moderate-answer" />
    <button onClick={() => checkAnswer('moderate', 36)}>Submit</button>
    <div id="moderate-result"></div>
  </div>
);

const HardMode = () => (
  <div>
    <h2>Hard Mode</h2>
    <p>Solve this advanced math problem to continue:</p>
    <p>15 + (3 * 2) - 4 = ?</p>
    <input type="text" id="hard-answer" />
    <button onClick={() => checkAnswer('hard', 17)}>Submit</button>
    <div id="hard-result"></div>
  </div>
);

const checkAnswer = (mode, correctAnswer) => {
  const answer = document.getElementById(`${mode}-answer`).value;
  const resultDiv = document.getElementById(`${mode}-result`);
  if (parseInt(answer) === correctAnswer) {
    resultDiv.innerHTML = '<p style="color: green;">Correct! Proceed to the next section.</p>';
  } else {
    resultDiv.innerHTML = '<p style="color: red;">Incorrect. Try again.</p>';
  }
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
        {mode === 'easy' && <EasyMode />}
        {mode === 'moderate' && <ModerateMode />}
        {mode === 'hard' && <HardMode />}
      </div>
    </div>
  );
}

export default App;
