import React, { useState } from "react"
import Die from "./Die"

export default function App( ) {
    
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = []
        let randomNumber = Math.floor(Math.random() * 6)
        for (let i = 0; i < 10; i++) {
            newDice.push(randomNumber)
        }
        return newDice
    }

    diceElements = dice.map(
        die => <Die value={die} />
    )

    return (
        <main className="dice-container">
            {diceElements}
            <button className="roll-dice" onClick={rollDice}>Roll the Dice</button>
        </main>
    )
}