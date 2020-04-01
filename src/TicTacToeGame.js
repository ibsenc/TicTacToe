class TicTacToeGame {
    constructor(givenDimension) {
        this.init(givenDimension);
    }

    init(givenDimension) {
        this.board = this.createBoard(givenDimension);
        this.dimension = givenDimension;
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.winner = undefined;
    }

    makeMove(x, y) {
        console.log(`${this.currentPlayer} marked at (${x},${y})`);
        this.board[x][y] = this.currentPlayer;
        this.toggleCurrentPlayer();
    }

    reset() {
        console.log('Game reset');
        this.init(this.dimension);
    }

    toggleCurrentPlayer() {
        if (this.currentPlayer === 'X') {
            console.log('It\'s player O\'s turn');
            this.currentPlayer = 'O';
        } else if (this.currentPlayer === 'O') {
            console.log('It\'s player X\'s turn');
            this.currentPlayer = 'X';            
        }
    }
    
    createBoard(dimension) {
        const initialTileValue = '';
        const board = [];
        // dimension: 3
        // i = 0     0 < 3  ---> Run code --> increment i  \
        // i = 1     1 < 3  ---> Run code --> increment i   \___ 3 executions
        // i = 2     2 < 3  ---> Run code --> increment i   /
        // i = 3     3 < 3  -X-> STOP                      /
        for (var i = 0; i < dimension; i++) {
            var row = [];
            for (var j = 0; j < dimension; j++) {
                row.push(initialTileValue);
            }
            board.push(row);
        }
        return board;
    }
}

export default TicTacToeGame;



























// class TicTacToeGame {
//     constructor(dimension) {
//         this.board = [];
//         for (var i = 0; i < dimension; i++) {
//             var row = [];
//             for (var j = 0; j < dimension; j++) {
//                 row.push('');
//             }
//             this.board.push(row);
//         }
//         this.currentPlayer = 'X';
//     }

//     makeMove(x, y) {
//         console.log(`I'll probably want to add someone to (${x},${y})?`);
//         this.board[x][y] = this.currentPlayer;
//         this.toggleCurrentPlayer();
//     }

//     reset() {
//         console.log('Gosh darnit, I don\'t know how to reset yet!');
//     }

//     toggleCurrentPlayer() {
//         console.log('I need to toggle the player now...')
//     }
// }

// export default TicTacToeGame;