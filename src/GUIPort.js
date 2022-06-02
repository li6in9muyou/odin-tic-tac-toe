import {
  nextPiece,
  PieceO,
  PlayerTie,
  PieceX,
  NicknameO,
  NicknameX,
  gameRunning,
  board,
} from "./Domain.js";

export function showTermination(who) {
  let text;
  switch (who) {
    case PieceO:
      text = `${NicknameO} wins!`;
      break;
    case PieceX:
      text = `${NicknameX} wins!`;
      break;
    case PlayerTie:
      text = "tie!";
      break;
    default:
      text = "";
  }
  document
    .querySelector("[data-winnerDisplay]")
    .replaceChildren(document.createTextNode(text));
  render(board);
}

export function render(board) {
  console.log(board);
  for (let i = 1; i <= 9; i++) {
    const cell = document.querySelector(`[data-cell][data-bind='${i}']`);
    cell.replaceChildren(document.createTextNode(board[i]));
  }
  document
    .querySelector("[data-whoseTurn]")
    .replaceChildren(
      document.createTextNode(nextPiece() === PieceX ? NicknameO : NicknameX)
    );

  document.querySelector("[data-grid]").style.opacity = (
    gameRunning ? 1 : 0.5
  ).toString();
}

render(board);
