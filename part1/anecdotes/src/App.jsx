import { useState } from 'react'

// Header component, prints large text like 'Anecdote of the day' and 'Anecdote with the most votes'
const Header = (props) => {
  console.log('printing header')
  return (
    <h1>{props.text}</h1>
  )
}

// Button component, renders the 'next anecdote' button
const Button = (props) => {
  console.log('button rendered')
  return (
    <button onClick={props.handler}>
      {props.text}
    </button>
  )
}

// Winner component, finds and displays the anecdote with the most votes
const Winner = ({anecdotes, len, points}) => {
  console.log('printing anecdote with the most votes')

  let maxIdx = 0

  // Loop through anecdotes to find the one with most votes
  for (let i = 0; i < len; i++) {
    console.log('anecdote', i, 'has', points[i], 'votes')
    if (points[maxIdx] < points[i]) maxIdx = i
  }
  console.log('maxIdx is', maxIdx)

  if (points[maxIdx] === 0) { // If winner still has 0 votes, no votes have been cast
    console.log('no anecdotes voted for')
    return (
      <div>
        No anecdotes voted for yet
      </div>
    )
  }
  console.log('winner is anecdote', maxIdx, 'with', points[maxIdx], 'votes')
  return (
    <div>
      <div>{anecdotes[maxIdx]}</div>
      <div>has {points[maxIdx]} votes</div>
    </div>
  )
}

// App component, manages state, button, and random index generation
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const len = anecdotes.length
  console.log('length of anecdotes is', len)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(len).fill(0))

  const handleVoteClick = () => {
    console.log('vote button clicked')
    const copy = [...points]
    copy[selected] ++
    setPoints(copy)
    console.log('votes updated to', copy[selected])
  }

  const handleNextClick = () => {
    console.log('next button clicked')
    setSelected(getRandomAnecdoteIdx(len))
  }

  // Based on Mozilla Developer Network's JavaScript Math.random() article
  const getRandomAnecdoteIdx = (max) => {
    console.log('generating random integer from 0 to', anecdotes.length)
    return Math.floor(Math.random() * max)
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button text='vote' handler={handleVoteClick}/>
      <Button text='next anecdote' handler={handleNextClick}/>
      <Header text='Anecdote with the most votes'/>
      <Winner anecdotes={anecdotes} len={len} points={points}/>
    </div>
  )
}

export default App