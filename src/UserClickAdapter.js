import {
  board,
  nextPiece,
  gameRunning,
  getCell,
  setCell,
  startGame,
  winner,
  NicknameO,
  NicknameX,
} from "./Domain.js";
import { render, showTermination } from "./GUIPort.js";

for (const cell of document.querySelectorAll("[data-cell]")) {
  cell.addEventListener("click", (e) => {
    const idx = +e.target.dataset.bind;
    console.log(`cell ${idx} is clicked`);
    if (!gameRunning) {
      return;
    }

    const empty_cell = " " === getCell(idx);
    if (empty_cell) {
      setCell(idx, nextPiece());
    }
    render(board);

    const w = winner();
    if (w !== null) {
      console.log(`${w} wins`);
      showTermination(w);
    }
  });
}

const NickNameInputO = document.querySelector("[data-player_o]");
const NickNameInputX = document.querySelector("[data-player_x]");
NickNameInputO.value = NicknameO;
NickNameInputX.value = NicknameX;

document.querySelector("[data-start]").addEventListener("click", () => {
  startGame(NickNameInputO.value, NickNameInputX.value);
  render(board);
  showTermination("");
});
