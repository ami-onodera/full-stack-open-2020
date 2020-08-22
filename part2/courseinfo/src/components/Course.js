import React from "react";

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const contentPart = parts.map((part) => {
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });

  const noParts = !Array.isArray(contentPart) || !contentPart.length;

  return (
    <div>
      {noParts && <p>There aren't any parts in this course yet.</p>}
      {!noParts && contentPart}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
