import React, { useState } from "react"
import Die from "./Die"
import {nanoId} from "nanoId"
import Confetti from "react-confetti/dist/types/Confetti"

export default function App( ) {
    
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])

    function generateNewDie() {
        return {
            value : Math.ceil(Math.random * 6),
            isHeld : false,
            id : nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push (generateNewDie())
        }
        return newDice
    }


    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld 
            ? 
            die 
            : 
            generateNewDie()
        }))
    }

    function holdDice () {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
        }))
    }

    diceElements = dice.map(
        die => <Die value={die.value} key={die.id} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>
    )


    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            
            <div>
                {diceElements}
            </div>
            
            <button className="roll-dice" onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}