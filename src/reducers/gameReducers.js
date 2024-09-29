function getRandomNumber() {
    return Math.floor(Math.random() * 20 + 1);
  }
  
  export const gameInitialState = {
    number: getRandomNumber(),
    guess: "",
    pastGuesses: [],
    message: "Start guessing",
    score: 20,
    gameOver: false,
  };
  
  // All the state updating logic will be in the reducer
  export const gameReducer = (state, action) => {
    switch (action.type) {
      case "GUESS_CHANGE": {
        return {
          // shallow copy of last state
          ...state,
          // update the guess state with the action.value
          guess: action.value,
        };
      }
  
      case "GUESS": {
        if (isNaN(state.guess)) {
          console.log("not a number");
          return {
            ...state,
            message: "Please enter a number.",
          };
        }
  
        // Check if guess is an empty string
        if (state.guess.trim() === "") {
          console.log("empty string");
          return {
            ...state,
            message: "Please input your guess.",
          };
        }
  
        // Case: Correct Guess
        if (Number(state.guess) === state.number) {
          return {
            ...state,
            pastGuesses: [...state.pastGuesses, +state.guess],
            message: `You got it! The answer is ${state.guess}`,
            gameOver: true,
          };
        }
  
        // Case: Repeat Guess
        if (state.pastGuesses.includes(+state.guess)) {
          return {
            ...state,
            message: `You already guessed ${state.guess}.`,
          };
        }
  
        // Case: Incorrect Guess
        return {
          ...state,
          guess: "",
          // subtract user's score
          score: state.score - 1,
          // add the new guess to the state
          pastGuesses: [...state.pastGuesses, +state.guess],
          // update the message
          message:
            state.guess > state.number
              ? `${state.guess} is too big!`
              : `${state.guess} is too small!`,
        };
      }
  
      case "NEW_GAME": {
        return {
          ...gameInitialState,
          number: getRandomNumber(),
        };
      }
  
      default:
        return state;
    }
  };
  