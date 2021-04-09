import "./Score.css";

const Score = (props) => {
  return (
    <div className="score">
      <label>Score: {props.score}</label>
      <label>Best Score: {props.bestScore}</label>
    </div>
  );
};

export default Score;
