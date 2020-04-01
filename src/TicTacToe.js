import React from 'react';
import Board from './Board.js';
import TicTacToeGame from './TicTacToeGame.js'
import './TicTacToe.css'

const DIMENSION = 3;
class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.game = new TicTacToeGame(DIMENSION);
    const gameBoardCopy = this.game.board.map(function(arr) {
      return arr.slice();
    });
    this.state = {gameBoard: gameBoardCopy};
  }

  onTileClick(x, y) {
    this.game.makeMove(x, y);
    this.copyGameBoard();
  }

  onResetClick() {
    this.game.reset();
    this.copyGameBoard();
  }

  copyGameBoard() {
    const gameBoardCopy = this.game.board.map(function(arr) {
      return arr.slice();
    });
    this.setState({gameBoard: gameBoardCopy});
  }

  tttStyle = {
    marginTop: 40,
    display: 'flex', 
    justifyContent:'center',
    alignItems:'center',
  }

  resetStyle = {
    marginTop: 10,
    display: 'flex', 
    justifyContent:'center',
    alignItems:'center',
  }

  resetButtonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: 16,
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: 10,
    textAlign: 'center',

  }

  render() {
    return (
      <div>
        <div style={this.tttStyle}>
          <Board gameBoard={this.state.gameBoard} onTileClick={this.onTileClick.bind(this)} dimension={DIMENSION}/>
        </div>
        <div style={this.resetStyle}>
          <button className='button'
           onClick={this.onResetClick.bind(this)}>Reset</button>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
