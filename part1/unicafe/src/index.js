import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Title = (props) => <h1>{props.text}</h1>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (!props.hasFeedback) {
    return <p>No feedback yet</p>;
  }

  return (
    <div>
      <Title text="Statistics" />
      <table>
        <tbody>
          <Statistic name="good" value={props.good} />

          <Statistic name="neutral" value={props.neutral} />

          <Statistic name="bad" value={props.bad} />

          <Statistic name="total" value={props.total} />

          <Statistic name="average" value={props.average} />

          <Statistic
            name="positivePercentage"
            value={props.positivePercentage + "%"}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  const total = good + neutral + bad;

  const getPercent = (x, totalAmount) => {
    let result = (x / totalAmount) * 100;

    if (Number.isNaN(result)) return 0;

    return Math.round(result * 1000) / 1000;
  };

  const positivePercentage = getPercent(good, total);

  const averageWeight = (weightsArr, total) => {
    const weights = weightsArr.reduce((acc, item) => {
      return acc + item.number * item.weight;
    }, 0);

    let result = weights / total;

    if (Number.isNaN(result)) return 0;

    return Math.round(result * 1000) / 1000;
  };

  const average = averageWeight(
    [
      { number: good, weight: 1 },
      { number: neutral, weight: 0 },
      { number: bad, weight: -1 },
    ],
    total
  );

  const handleClick = (type) => {
    setHasFeedback(true);

    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const statisticsProps = {
    hasFeedback: hasFeedback,
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: average,
    positivePercentage: positivePercentage,
  };

  return (
    <div>
      <Title text="Give Feedback" />
      <Button text="good" onClick={() => handleClick("good")} />
      <Button text="neutral" onClick={() => handleClick("neutral")} />
      <Button text="bad" onClick={() => handleClick("bad")} />
      <Statistics {...statisticsProps} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));