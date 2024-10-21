let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let turnO = true;  // Track the turn (true = O's turn, false = X's turn)

const winpattern = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Attach event listeners to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    // If the box is already clicked, do nothing
    if (box.innerText !== "") return;

    // Set "O" or "X" depending on the current turn
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    // Check for a winner after each move
    checkwinner();
  });
});

// Reset the board
resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";  // Clear all boxes
  });
  turnO = true;  // Reset turn to O
  console.clear();  // Clear the console for a new game
});

// Function to check the winner
const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    // Check if all positions are non-empty and have the same value
    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("Winner:", pos1);
      alert(`${pos1} wins!`);
      return;  // Stop further checking after finding a winner
    }
  }

  // Check for a draw (if all boxes are filled)
  const isDraw = [...boxes].every((box) => box.innerText !== "");
  if (isDraw) {
    console.log("It's a draw!");
    alert("It's a draw!");
  }
};
