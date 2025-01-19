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

generateNumberOfSquares(16)

let squares = document.querySelectorAll('.squares')
squares.forEach(square => square.addEventListener('mouseover', () => {
     square.style.backgroundColor = "black"
}));

let newGridButton = document.querySelector('#generateNewGrid')



