import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticRow = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = all > 0 ? String((props.good / all) * 100) + "%" : "0";
  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticRow text="good" value={props.good} />
          <StatisticRow text="neutral" value={props.neutral} />
          <StatisticRow text="bad" value={props.bad} />
          <StatisticRow text="all" value={all} />
          <StatisticRow text="average" value={average} />
          <StatisticRow text="positive" value={positive} />
        </tbody>
      </table>
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
