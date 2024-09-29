import { createContext, useState } from "react";

// create the context
export const ScoreContext = createContext({
    scores: [],
    setScoresHandler: () => { },
});

// create the provider
export function ScoreContextProvider({ children }) {
    const [scores, setScores] = useState([]);

    const setScoresHandler = (score) => {
        setScores((prevScores) => {
            return [...prevScores, score];
        });
    };

    // context object to be passed to the provider
    const context = {
        scores: scores,
        setScoresHandler: setScoresHandler,
    };

    return (
        <ScoreContext.Provider value={context}>{children}</ScoreContext.Provider>
    );
}
