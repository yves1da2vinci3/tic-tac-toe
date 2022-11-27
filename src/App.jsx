import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Case from './components/Case'
function App() {
  const [isPlayerOne, setIsPlayerOne] = useState(true)
const [isModal,setisModal] = useState(false)
const [winner,setwinner] = useState("o")
// visaulizer de board
const [boardCopy,setBoardCopy ] = useState(
  [ " "," "," ", " "," "," ", " "," "," "]
)
const verifyBoard = () => { 
  const turn = isPlayerOne ? "X" : "O"
  console.log("from board",turn)
  // VERIFY ROW 
  if(boardCopy[0]=== turn && boardCopy[1]===turn && boardCopy[2] === turn){
    setisModal(true)
    setwinner(turn)
  }
  if(boardCopy[3]=== turn && boardCopy[4]===turn && boardCopy[5] === turn){
    setisModal(true)
    setwinner(turn)
  }
  if(boardCopy[6]=== turn && boardCopy[7]===turn && boardCopy[8] === turn){
    setisModal(true)
    setwinner(turn)
  }
  // VERIFY COLUMNS
  if(boardCopy[0]=== turn && boardCopy[3]===turn && boardCopy[6] === turn){
    setisModal(true)
    setwinner(turn)
  }
  if(boardCopy[1]=== turn && boardCopy[4]===turn && boardCopy[7] === turn){
    setisModal(true)
    setwinner(turn)
  }
  if(boardCopy[2]=== turn && boardCopy[5]===turn && boardCopy[8] === turn){
    setisModal(true)
    setwinner(turn)
  }
  // VERIFY DIAGONAL
  if(boardCopy[0]=== turn && boardCopy[4]===turn && boardCopy[8] === turn){
    setisModal(true)
    setwinner(turn)
  }
  if(boardCopy[2]=== turn && boardCopy[4]===turn && boardCopy[6] === turn){
    setisModal(true)
    setwinner(turn)
  }
 }

// useEffect(()=>{
// console.log(boardCopy)
// verifyBoard()
// })
  return (
    <div className="container">
      {isModal ? <div className='modal' >
        <p className='modal__title'>the winner is : <span className='modal_winner' > {winner}</span> </p>
      </div> : null }
      
      <p className='title' >Tic Tac Toe</p>
      <div className='TurnInformation' >
      <p  >Tour de :</p>
      <p className={isPlayerOne ? "player1" : "player2"} >{isPlayerOne ? "X" : "O"}</p>
      </div>
      
      <div className='Board' >
      {[...new Array(9).keys()].map((value) =>   <Case boardCopy={boardCopy} setwinner={setwinner} setBoardCopy={setBoardCopy} setisModal={setisModal}  BoardIndex={value}  setIsPlayerOne={setIsPlayerOne}  isPlayerOne={isPlayerOne} />   )}
     
 
      </div>
    </div>
  )
}

export default App
