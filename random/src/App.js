import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import "./App.css";

const generateRandomNumbers = () => {
  let arr = Array.from({ length: 10000 }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

function App() {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setNumbers(generateRandomNumbers());
      setLoading(false);
    }, 2000); // 2 seconds delay to see the animation
  };

  return (
    <div className="App">
      <h1>Random Numbers</h1>
      <button onClick={handleGenerate} disabled={loading}>
        Generate Numbers
      </button>
      {loading ? (
        <div className="spinner">
          <BeatLoader color="#36D7B7" />
        </div>
      ) : (
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
