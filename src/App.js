import "./App.css";
import React, { useState } from "react";
import Card from "./Components/Card/Cards";
import Score from "./Components/Score/Score";
import Loader from "./Components/Loader/Loader";

function App() {
  // Create states
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState("");
  const [playing, setPlaying] = useState(true);
  const [isLoaded, setLoaded] = useState(false);

  function checkBest() {
    if (score > bestScore) setBestScore(score);
  }

  function checkWin() {
    if (score === 11) {
      setResult("You Won! You have a sharp memory!");
      setPlaying(false);
    }
  }

  function playAgain() {
    setPlaying(true);
  }

  return (
    <div className="App">
      <header>
        <div>
          <h1>Memory Ball</h1>
          <p>
            Score points by clicking on an image. If you click the same image
            twice, you lose!
          </p>
        </div>
      </header>
      <Score score={score} bestScore={bestScore} />
      <div className={isLoaded ? "hidden" : ""}>
        <Loader />
      </div>
      <div className={isLoaded ? "" : "hidden"}>
        <Card
          setScore={setScore}
          setBestScore={setBestScore}
          checkBest={checkBest}
          setResult={setResult}
          checkWin={checkWin}
          setPlaying={setPlaying}
          setLoaded={setLoaded}
          playing={playing}
        />
      </div>
      <div className={playing ? "modal hidden" : "modal"}>
        <p>{result}</p>
        <button className="btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className={playing ? "overlay hidden" : "overlay"}></div>
      <footer>
        <p>
          Built by &nbsp;
          <a
            href="https://github.com/Ajinkyap22"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ajinkya Palaskar
          </a>
          &nbsp; | &nbsp;
          <a
            href="https://github.com/Ajinkyap22/memory-ball"
            target="_blank"
            rel="noreferrer noopener"
          >
            Source code
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
