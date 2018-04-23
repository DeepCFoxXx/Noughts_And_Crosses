import React from 'react'
import Row from './GridRow.jsx'

const Board = props => {

  const checkRowsForWinner = function() {
    const board = props.board;
    if (((board[0] !== "") && (board[0] === board[1]) &&
         (board[0] === board[2])) ||
        ((board[3] !== "") &&(board[3] === board[4]) &&
         (board[3] === board[5])) ||
        ((board[6] !== "") &&(board[6] === board[7]) &&
         (board[6] === board[8]))
      ) {
      return true
    }
    return false
  }

  const checkColumnsForWinner = function() {
    const board = props.board;
    if (((board[0] !== "") && (board[0] === board[3]) &&
         (board[0] === board[6])) ||
        ((board[1] !== "") &&(board[1] === board[4]) &&
         (board[1] === board[7])) ||
        ((board[5] !== "") &&(board[2] === board[5]) &&
         (board[2] === board[8]))
      ) {
      return true;
    }
    return false;
  }

}

export default Board;
