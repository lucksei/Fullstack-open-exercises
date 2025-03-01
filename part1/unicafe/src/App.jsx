import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = (props) => {
  // const [all, setAll] = useState(0);
  // const [average, setAverage] = useState(0);
  // const [positivePer, setPositivePer] = useState(0);
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = all > 0 ? props.good / all : 0;
  if (all > 0) {
    return (
      <div>
        <p>
          good {props.good}
          <br />
          neutral {props.neutral}
          <br />
          bad {props.bad}
          <br />
          all {all}
          <br />
          average {average}
          <br />
          positive {positive}%
        </p>
      </div>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const App = () => {
  // Guarda los clicks de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  return (
    <>
      <h2>give feedback</h2>
      <Button onClick={() => handleGoodClick()} text={"good"} />
      <Button onClick={() => handleNeutralClick()} text={"neutral"} />
      <Button onClick={() => handleBadClick()} text={"bad"} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
