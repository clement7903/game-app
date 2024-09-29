import { useReducer, useContext } from "react";

import { ScoreContext } from "../store/score-context";

import { gameInitialState, gameReducer } from "../reducers/gameReducers";

import ScoresHistory from "../components/ScoresHistory";

function GuessNumberGame() {
    const scoreCtx = useContext(ScoreContext);
    const [gameState, dispatch] = useReducer(gameReducer, gameInitialState);

    const { pastGuesses, gameOver, score, guess, message } = gameState;

    const guessChangeHandler = (e) => {
        dispatch({ type: "GUESS_CHANGE", value: e.target.value });
    };

    const guessHandler = () => dispatch({ type: "GUESS" });

    const newGameHandler = () => {
        dispatch({ type: "NEW_GAME" });

        if (pastGuesses.length > 0 && gameOver) scoreCtx.setScoresHandler(score);
    };

    return (
        <div>
            <h1>Guess Number Game 2.6</h1>
            <p>Guess a number between 1 and 20.</p>
            <div className="guess-box">
                <label>Enter guess</label>
                <input type="text" onChange={guessChangeHandler} value={guess}></input>
            </div>
            <div className="guess-buttons">
                <button
                    type="button"
                    onClick={guessHandler}
                    disabled={gameOver || guess === ""}
                >
                    Guess!
                </button>
                <button type="button" onClick={newGameHandler}>
                    New Game
                </button>
            </div>

            <p>{message}</p>
            <div className="guesses-container">
                {pastGuesses.map((pastGuess, i) => (
                    <span key={i} className="guesses-number">
                        {pastGuess}
                    </span>
                ))}
            </div>
            <p>Current Score: {score}</p>
            <ScoresHistory />
        </div>
    );
}

export default GuessNumberGame;
