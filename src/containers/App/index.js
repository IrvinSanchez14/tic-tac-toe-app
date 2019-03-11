import React from "react";
import ListDiv from '../../components/ListDiv';

const winObject = [];

class App extends React.Component {
  state = {
    jumpTurn: 0,
    turnX: true,
    valuePlayer: Array(9).fill(null),
    playerState: '',
  };   
  
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
        const valuePlayer = state.valuePlayer.map((value,index) => {
            if (index === id) {
                return value = state.turnX ? "x" : "o";
            } else {
                return value;
            }
        });
        
        const jumpTurn =  state.jumpTurn + 1;
        const turnX = !state.turnX;
        return {
            valuePlayer,
            jumpTurn,
            turnX,
        }
      });
    }

    componentDidUpdate() {
      this.styleFunction();
    }

    styleFunction = () => {
      winObject.map((value,index) => {
        for(let i=0; i < value.length; i++) {
          const circle = value[i];
          document.getElementById(circle).style.background = "red";
        }
        return value;
      })
    }
  
    render() {
      const winner = this.whoWin(this.state.valuePlayer); 
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else if(this.state.jumpTurn === 9) {
        status = "the game is DRAW";
      }
       else {
        status = "Next player: " + (this.state.turnX ? "X" : "O");
      } 
      return (
        <div className="game">
            <ListDiv
              value={this.state.valuePlayer}
              onClick={id => this.moveClick(id)}
            />
          <div className="game-info">
            <div>{status}</div>
          </div>
        </div>
      );
    }
  }

export default App;