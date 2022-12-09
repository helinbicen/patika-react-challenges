import "./index.css"


import { restartGame, resetScore } from '../../redux/cardsSlice'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const score = useSelector((state) => state.cards.score)

  const dispath = useDispatch();

  function handleGame() {
    dispath(restartGame())
    dispath(resetScore())
  }

  return (
    <>
    <div className="header">MEMORY GAME</div>

    <div className="score">Your score:{score}</div>
    
    <button className='btn' onClick={handleGame}>New Game</button>
    </>
  )
}

export default Header