import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      <strong>{props.name}:</strong> {props.excercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} excercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} excercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} excercises={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      <strong>Number of excercises: </strong>
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

ReactDOM.render(<App />, document.getElementById("root"));