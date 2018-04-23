import React from 'react';
import Board from '../components/Board.jsx'
import GameStatus from '../components/GameStatus.jsx'
import NewGame from '../components/NewGame.jsx'

class Game extends React.Component {
  constructor(props) {
    super(props);
    const grid = ["","","","","","","","",""];
    this.state = { winner: "", player: "X", turns: 0, won: false, board: grid };

    this.switchPlayer = this.switchPlayer.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    const grid = ["","","","","","","","",""];
    this.setState({ winner: "", player: "X",  turns: 0, won: false, board: grid });
  }

  setWinner() {
    this.setState({ winner: this.state.player, won: true });
  }

}

export default Game;
