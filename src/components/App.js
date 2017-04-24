import React, { Component } from "react";
import Marking from "../algorithm/Marking"
import minimax from "../algorithm/MiniMax"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Game from "./Game"
import BottomBar from "./BottomBar"

class App extends Component {
    state = {
        //AI
        [Marking.X]: {
            onTurn: (game, marking) => game.emptyCells.length >= 9 ? game.play(Math.floor(Math.random() * 8)) : minimax(marking, game)
        },
        [Marking.O]: {
            onClick: (game, marking, choice) => game.play(choice, marking)
        }
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Tic Tac Toe" showMenuIconButton={false}/>
                    <Game players={this.state}/>
                    <BottomBar/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App