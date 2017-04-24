import React, { Component } from "react";
import Paper from 'material-ui/Paper';
import './Board.css'

function Square(props) {
    return <button className={`square ${props.value != null ? props.value.toLowerCase() : ""}`} onClick={() => props.onClick()}/>
}


class Board extends Component {
    renderSquare = (i) => <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>;

    render() {
        return (
            <Paper zDepth={1} style={{padding: "10px"}}>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </Paper>
        );
    }
}

export default Board