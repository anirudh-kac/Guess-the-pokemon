import React , {useState} from 'react'

function Game() {
    const [score,setScore] = useState(0);
    const []
    return (
        <div className = "Game">
            <h1 className = "Game-title">Guess The Pokemon</h1>
            <div className = "Game-scores">
                <h2 className = "Game-score">Total Score : {score}</h2>
            </div>
        </div>
    )
}

export default Game
