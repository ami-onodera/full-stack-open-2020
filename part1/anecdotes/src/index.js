import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Title = (props) => <h2>{props.text}</h2>;

const Anecdote = (props) => {
  return (
    <>
      {props.anecdote}
      <br />
      has {props.votes} vote(s).
    </>
  );
};

const MostVotes = (props) => {
  return (
    <>
      <Title text="Anecdote with Most Votes:" />
      {!props.hasVotes && <>No votes yet.</>}
      {props.hasVotes && (
        <Anecdote anecdote={props.anecdote} votes={props.votes} />
      )}
    </>
  );
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));
  const [hasVotes, setHasVotes] = useState(false);

  const randomID = (length) => {
    return Math.floor(Math.random() * length);
  };

  const newRandomAnecdote = () => {
    let randomAnecdoteId;

    do {
      randomAnecdoteId = randomID(props.anecdotes.length);
    } while (randomAnecdoteId === selected);

    setSelected(randomAnecdoteId);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setHasVotes(true);
  };

  const handleClick = (type) => {
    switch (type) {
      case "next":
        newRandomAnecdote();
        break;
      case "vote":
        handleVote();
        break;
      default:
        break;
    }
  };

  const maxVote = votes.reduce(
    (acc, num, idx) => {
      if (num > acc.num) {
        acc.num = num;
        acc.idx = idx;
      }

      return acc;
    },
    { num: 0 }
  );

  const mostVoted = anecdotes[maxVote.idx];

  return (
    <div>
      <Title text="Anecdote of the Day:" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <br />
      <Button onClick={() => handleClick("vote")} text="vote" />  
      <Button onClick={() => handleClick("next")} text="next anecdote" />
      <MostVotes
        hasVotes={hasVotes}
        anecdote={mostVoted}
        votes={maxVote.num}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));