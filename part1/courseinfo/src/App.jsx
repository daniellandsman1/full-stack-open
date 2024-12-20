// Header component, renders name of course
const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

// Content component, renders the parts
const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}

// Part component, renders a part and its number of exercises
const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

// Total component, renders the total number of exercises
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercises +
                              props.course.parts[1].exercises + 
                              props.course.parts[2].exercises }
      </p>
    </div>
  )
}

// App component, renders all info
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App