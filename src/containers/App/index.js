import React from "react";

import ListDiv from '../../components/ListDiv';
import ModalPop from '../../components/Modal';

let winObject = [];

const styles = {
  currentText: {
    position: 'absolute',
    top: '10%',
    left: '20%',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  divReset: {
    position: 'absolute',
    top: '10%',
    left: '70%',
  },
  buttonReset: {
    width: '171px',
    height: '41px',
    border: '2px solid #484848',
    boxSizing: 'border-box',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#484848',
    fontWeight: 'bold',
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumpTurn: 0,
      turnX: true,
      valuePlayer: Array(9).fill(null),
    };
    this.finishedGame = false;
    this.winnerCounter = 0;
  }

  whoWin = (moves) => {
    const optionWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < optionWin.length; i++) {
      const [positionA, positionB, positionC] = optionWin[i];
      if (moves[positionA] && moves[positionA] === moves[positionB] && moves[positionA] === moves[positionC]) {
        winObject.push(optionWin[i]);
        return moves[positionA];
      }
    }
    return null;
  }

  moveClick(id) {
    const moves = this.state.valuePlayer;
    if (this.whoWin(moves) || moves[id]) {
      return;
    }
    this.setState(state => {
      const valuePlayer = state.valuePlayer.map((value, index) => {
        if (index === id) {
          return value = state.turnX ? "x" : "o";
        } else {
          return value;
        }
      });

      const jumpTurn = state.jumpTurn + 1;
      const turnX = !state.turnX;
      return {
        valuePlayer,
        jumpTurn,
        turnX,
      }
    });
  }

  componentDidUpdate() {
    this.styleFunction(false);
  }

  openModalState = () => {
    const winnerGame = this.whoWin(this.state.valuePlayer);
    if (winnerGame) {
      return (<ModalPop openModal={true} messageGame={'WINNER'} winner={winnerGame} />)
    }
    if (this.state.jumpTurn === 9) {
      return (<ModalPop openModal={true} messageGame={'DRAW'} />)
    }

  }

  styleFunction = (resetGame) => {
    winObject.map((value, index) => {
      for (let i = 0; i < value.length; i++) {
        const circle = value[i];
        if (!resetGame && this.finishedGame) {
          document.getElementById(circle).classList.add("winDivP");
        }
        if (!this.finishedGame) {
          document.getElementById(circle).classList.remove("winDivP");
        }
      }
      return value;
    })
  }

  resetGame = () => {
    this.setState({
      valuePlayer: Array(9).fill(null),
      jumpTurn: 0,
    })
    this.finishedGame = false;
    this.styleFunction(true);
    winObject = [];
  }

  render() {

    const winner = this.whoWin(this.state.valuePlayer);
    let status;
    let playerWin;
    if (winner) {
      this.finishedGame = true;
      this.winnerCounter++;
    } else {
      status = "CURRENT PLAYER: " + (this.state.turnX ? "X" : "O");
    }
    return (
      <div>
        <div style={styles.currentText}>
          {status}

        </div>
        <div style={styles.divReset}>
          <button style={styles.buttonReset} onClick={this.resetGame} >RESET</button>
        </div>
        <div className="game">
          <ListDiv
            value={this.state.valuePlayer}
            onClick={id => this.moveClick(id)}
          />
          {this.openModalState()}
          {playerWin}
        </div>
      </div>
    );
  }
}

export default App;