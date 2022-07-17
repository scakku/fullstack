import React, { useState } from "react";

const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.set(props.value + 1);
      }}
    >
      {" "}
      {props.text}{" "}
    </button>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} percentage="%" />
    </table>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> <td>{props.value}</td> <td>{props.percentage}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button set={setGood} value={good} text="good" />
      <Button set={setNeutral} value={neutral} text="neutral" />
      <Button set={setBad} value={bad} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={1 / ((good + neutral + bad) / (good - bad))}
        positive={100 / ((good + neutral + bad) / good)}
      />
    </div>
  );
};

export default App;
