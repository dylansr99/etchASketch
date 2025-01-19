function generateNumberOfSquares(input) {

    for (let i = 0; i < input * input; i++) {
      
      let squareHeight = 600 / input
      let squareWidth = 600 / input

      const square = document.createElement('div')
      square.classList.add("squares")
      square.setAttribute('style', `height: ${squareHeight}px; width: ${squareWidth}px` )
      container.appendChild(square)
    }
   
};

generateNumberOfSquares(16);

function removeGrid() {
  const removeGrid = document.querySelectorAll('.squares')
  removeGrid.forEach(square => square.remove()
)
}

let newGridButton = document.querySelector('#generateNewGrid');
newGridButton.addEventListener('click', generateNewGrid);

function generateNewGrid() {
  newGridButton.addEventListener('click', () => {

    removeGrid()

    
  
    let userInput = prompt("Enter your column input");

    if (userInput < 101) {
      generateNumberOfSquares(userInput)
    }

    else if (userInput > 100) {
      userInput = prompt("Input must be lower than 100!")
      generateNumberOfSquares(userInput)
    }

    
    let colorSquares = document.querySelectorAll('.squares')
    colorSquares.forEach(square => square.addEventListener('mouseover', () => {
      square.style.backgroundColor = "black"
    }))

  }, { once: true })
};

let squares = document.querySelectorAll('.squares')
squares.forEach(square => square.addEventListener('mouseover', () => {
     square.style.backgroundColor = "black"
}));







