export let NicknameX = "player X";
export let NicknameO = "player O";

export function startGame(nickname_x, nickname_o) {
  NicknameX = nickname_x;
  NicknameO = nickname_o;
  gameRunning = true;
  for (let i = 1; i <= 9; i++) {
    setCell(i, " ");
  }
}

export const PieceX = "X";
export const PieceO = "O";
export const PlayerTie = "#";
export const PieceEmpty = " ";

let __next_is_x = true;

export function nextPiece() {
  return __next_is_x ? PieceX : PieceO;
}

export let gameRunning = false;

export let board = "#         ";

export function setCell(idx, value) {
  board = board.substring(0, idx) + value + board.substring(idx + 1);
  __next_is_x = !__next_is_x;
}

export function getCell(idx) {
  return board[idx];
}

export function winner() {
  gameRunning = false;
  for (let i = 1; i <= 9; i += 3) {
    if (
      board[i] !== PieceEmpty &&
      board[i] === board[i + 1] &&
      board[i] === board[i + 2]
    ) {
      return board[i];
    }
  }
  for (let i = 1; i <= 3; i += 1) {
    if (
      board[i] !== PieceEmpty &&
      board[i] === board[i + 3] &&
      board[i] === board[i + 6]
    ) {
      return board[i];
    }
  }
  if (
    board[1] !== PieceEmpty &&
    board[1] === board[5] &&
    board[1] === board[9]
  ) {
    return board[1];
  }
  if (
    board[3] !== PieceEmpty &&
    board[3] === board[5] &&
    board[3] === board[7]
  ) {
    return board[1];
  }
  if (board.indexOf(" ") === -1) {
    return "#";
  } else {
    gameRunning = true;
    return null;
  }
}
