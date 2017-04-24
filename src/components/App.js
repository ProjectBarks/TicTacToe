import React, { Component } from "react";
import Marking from "../algorithm/Marking"
import minimax from "../algorithm/MiniMax"
import Game from "./Game"
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            //AI
            [Marking.X]: {
                onTurn: (game, marking) => {
                    var date = Date.now();
                    var result = game.emptyCells.length >= 9 ? game.play(Math.floor(Math.random() * 8)) : minimax(marking, game)
                    console.log(Date.now() - date);
                    return result;
                }
            },
            [Marking.O]: {
                onClick: (game, marking, choice) => game.play(choice, marking)
            }
        }
    }

    render() {
        return <Game players={this.state}/>
    }
}

export default App