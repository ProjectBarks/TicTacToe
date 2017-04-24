import React, { Component } from "react";
import Marking from "../algorithm/Marking"
import Board from "./Board"
import {default as GameBoard} from '../algorithm/Board'
import './Game.css'


class Game extends Component {
    constructor() {
        super();
        this.state = {
            board: new GameBoard(),
            currentPlayer: Marking.O
        };
    }

    updateBoard(board) {
        const winners = board.winners, currentPlayer = this.state.currentPlayer.inverse, player = this.props.players[currentPlayer];
        if (winners.length <= 0 && board.equals(this.state.board))
            return;

        this.setState({board: board, currentPlayer: currentPlayer});
        if (winners.length >= 1) {
            console.log("Game Over!");
            return;
        }
        if ("onTurn" in player) {
            let callback = () => this.updateBoard(player.onTurn(board, currentPlayer));
            setTimeout(callback.bind(this), 0);
        }

    }

    handleClick(i) {
        const player = this.props.players[this.state.currentPlayer], board = this.state.board;
        if (board.emptyCells.indexOf(i) > -1 && "onClick" in player) {
            this.updateBoard(player.onClick(board, this.state.currentPlayer, i))
        }
    }

    render() {
        let squares = this.state.board.squares.map(x => x !== 0 ? Marking.match(x).name : null);
        return (
            <div className="game">
                <Board
                    squares={squares}
                    onClick={(i) => this.handleClick(i)}
                />
            </div>
        );
    }
}

export default Game