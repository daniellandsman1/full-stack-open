import { useState } from 'react'

// Header component, prints the large text like 'give feedback' and 'statistics'
const Header = (props) => {
  console.log('header printed')
  return (
      <h1>{props.text}</h1>
  )
}

// Button component, renders a button like 'good', 'neutral', or 'bad'
const Button = (props) => {
  console.log('button rendered')
  return (
      <button onClick={props.handler}>
        {props.text}
      </button>
  )
}

// Statistics component, prints feedback statistics in a table
const Statistics = ({good, neutral, bad, total}) => {
  console.log('printing statistics')

  if (total === 0)
    return (
      <div>
        No feedback given
      </div>
    )

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={total}/>
          <StatisticLine text='average' value={(good - bad) / total}/>
          <StatisticLine text='positive' value={(good/total) * 100 + ' %'}/>
        </tbody>
      </table>
    </div>
  )
}

// StatisticLine component, prints a single row of the statistics table
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

// App component, prints headers and manages state, button clicks, and printing statistics
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('good button clicked')
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    console.log('neutral button clicked')
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    console.log('bad button clicked')
    setBad(bad + 1)
  }

  const total = good + bad + neutral

  return (
    <div>
      <Header text='give feedback'/>
      <Button text='good' handler={handleGoodClick}/>
      <Button text='neutral' handler={handleNeutralClick}/>
      <Button text='bad' handler={handleBadClick}/>
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App
