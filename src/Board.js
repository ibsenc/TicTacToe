import React from 'react';
import Tile from './Tile.js'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gameBoard: this.props.gameBoard};
    }
    
    createBoard() {
        var board = [];
        for (var i = 0; i < this.props.dimension; i++) {
            var buttonRow = [];
            for (var j = 0; j < this.props.dimension; j++) {
                buttonRow.push(<Tile x={j} y={i} text={this.state.gameBoard[j][i]} onTileClick={this.props.onTileClick} key={`(${i},${j})`}/>);
            }
            board.push(<div key={i} >{buttonRow}</div>);
        }
        return board;
    }

    componentDidUpdate(prevProps) {
        if (this.props.gameBoard !== prevProps.gameBoard) {
            this.setState(this.props)
        }
    }

    render() {
        this.board = this.createBoard();
        return (
            <div>
                {this.board}
            </div>
        );
    }
}

export default Board;