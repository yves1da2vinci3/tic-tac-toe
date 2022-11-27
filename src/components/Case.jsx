import React, { useEffect, useMemo, useRef, useState } from 'react'
import '../App.css'
function Case({setIsPlayerOne,isPlayerOne,BoardIndex,boardCopy,setBoardCopy,setisModal,setwinner}) {
    const textValue = document.getElementById("textValue")
    const caseRef = useRef(null)
    const textRef = useRef(null)
    const [isAlreadyClicked,setIsAlreadyClicked] = useState(false)
    let draw = true
    const HandlerClick = () => { 
      if(!isAlreadyClicked){
         const classToAdd =isPlayerOne ? "player1" : "player2"
         const valueToAdd = isPlayerOne ? "X" : "O"
         textRef.current?.classList.add(classToAdd)
         textRef.current.innerText = valueToAdd 
        //  ajouter dans le board
        const newBoardCopy = boardCopy
        console.log("borard :",BoardIndex)
        newBoardCopy[BoardIndex] = valueToAdd
        // verifyBoard
        const turn = isPlayerOne ? "X" : "O"
  console.log("from board",turn)
  // VERIFY ROW 
  if(newBoardCopy[0]=== turn && newBoardCopy[1]===turn && newBoardCopy[2] === turn){
    setisModal(true)
   draw =false
    setwinner(turn)
  }
  if(newBoardCopy[3]=== turn && newBoardCopy[4]===turn && newBoardCopy[5] === turn){
    setisModal(true)
   draw =false
    setwinner(turn)
  }
  if(newBoardCopy[6]=== turn && newBoardCopy[7]===turn && newBoardCopy[8] === turn){
    setisModal(true)
   draw =false
    setwinner(turn)
  }
  // VERIFY COLUMNS
  if(newBoardCopy[0]=== turn && newBoardCopy[3]===turn && newBoardCopy[6] === turn){
    setisModal(true)
   draw =false
    setwinner(turn)
  }
  if(newBoardCopy[1]=== turn && newBoardCopy[4]===turn && newBoardCopy[7] === turn){
    setisModal(true)
   draw =false
    setwinner(turn)
  }
  if(newBoardCopy[2]=== turn && newBoardCopy[5]===turn && newBoardCopy[8] === turn){
    setisModal(true)
   draw =false
    setwinner(turn)
  }
  // VERIFY DIAGONAL
  if(newBoardCopy[0]=== turn && newBoardCopy[4]===turn && newBoardCopy[8] === turn){
    setisModal(true)
   draw =false
    setwinner(turn)
  }
  if(newBoardCopy[2]=== turn && newBoardCopy[4]===turn && newBoardCopy[6] === turn){
    setisModal(true)
   draw = false
    setwinner(turn)
  }

  if(draw=== true){
   setwinner("nobody")
  }
        //set the information
        setBoardCopy(newBoardCopy)
         setIsAlreadyClicked(true)
         setIsPlayerOne(!isPlayerOne)

      }
     
       
     }
  return (
    <div    ref={caseRef} onClick={HandlerClick}  className='case' >
      <p  ref={textRef}   className="text"  ></p> 
        
    </div>
  )
}

export default React.memo(Case) 