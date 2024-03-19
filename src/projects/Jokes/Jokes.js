import React from 'react';
import './indexJokes.css';
import dataJokes from './dataJokes';

export default function Jokes (props) {

    const [isShown, setIsShown] = React.useState(false)
  

    function handleShowBtn () {
        setIsShown(prevIsShown => !prevIsShown)
    }

   const [messages, setMessages] = React.useState([])

   function showMessages () {
    setMessages( prevMessages => prevMessages)
   }

    return(
        <div className='jokes'> 
            <h2>Joke: {props.joke.id} 
                <button onClick={handleShowBtn}>
                     {isShown ? 'Hide!' : 'Show'}
                </button>
            </h2>
            <h3>Question: {props.joke.question}</h3>
            <hr />
            {isShown && <h4> Answer: {props.joke.answer} </h4>}
            {messages.length>0 && <h3> You have {messages.length} messages</h3>}
        </div>
    )
}