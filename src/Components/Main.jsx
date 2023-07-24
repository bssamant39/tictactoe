import React, { useState } from 'react'
import "./style.css"
const Main = () => {
  const [state,setState]=useState(Array(9).fill(null))
  const[isXTurn,setIsXTurn]=useState(true)

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

 
  const handleClick=(index)=>{
    if (state[index] !== null) {
      return;
    }
    // console.log(index);
    const CopyState=[...state]
    CopyState[index]=isXTurn?"X":"O";
    setState(CopyState)
    setIsXTurn(!isXTurn)

  }
  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <>{isWinner?(<div className='board'>
      
      <div className='turn'><h1>{isWinner} Won The Game </h1><button onClick={handleReset}>Play Again</button></div>
    </div>):(
     <> 
    <div className="board">
      <div className="cell" onClick={()=>handleClick(0)}>{state[0]}</div>
      <div className="cell" onClick={()=>handleClick(1)}>{state[1]}</div>
      <div className="cell" onClick={()=>handleClick(2)}>{state[2]}</div>
      <div className="cell" onClick={()=>handleClick(3)}>{state[3]}</div>
      <div className="cell" onClick={()=>handleClick(4)}>{state[4]}</div>
      <div className="cell" onClick={()=>handleClick(5)}>{state[5]}</div>
      <div className="cell" onClick={()=>handleClick(6)}>{state[6]}</div>
      <div className="cell" onClick={()=>handleClick(7)}>{state[7]}</div>
      <div className="cell" onClick={()=>handleClick(8)}>{state[8]}</div>
    </div>
    
    <div className='turn'><h4 >Player { isXTurn?"X":"O"} Please Move</h4></div>
    </>
    )}
    </>
  )
}

export default Main