import React, { useState } from "react"
import Die from "./Die"
import {nanoId} from "nanoId"

export default function App( ) {
    
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push (
                {
                    value : Math.ceil(Math.random() * 6),
                    isHeld : false
                    id : nanoid()
                }
            )
        }
        return newDice
    }

    diceElements = dice.map(
        die => <Die value={die.value} key={die.id} isHeld={die.isHeld}/>
    )

    return (
        <main className="dice-container">
            {diceElements}
            <button className="roll-dice" onClick={rollDice}>Roll the Dice</button>
        </main>
    )
}