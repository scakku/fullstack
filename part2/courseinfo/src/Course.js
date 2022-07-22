import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />
      <Total sum={course.parts.reduce((x, y) => x + y.exercises, 0)} />
    </div>
  );
};
const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <h3>total of exercises {sum}</h3>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ course }) => (
  <>
    {course.map((part) => (
      <Part part={part} key={part.id} />
    ))}
  </>
);

export default Course;
