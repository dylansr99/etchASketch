function generateNumberOfSquares(input) {

    for (let i = 0; i < input * input; i++) {
      const square = document.createElement('div')
      square.classList.add("squares")
      square.style.cssText = ''
      container.appendChild(square)
    }
   
};

generateNumberOfSquares(16);


let squares = document.querySelectorAll('.squares')
squares.forEach(square => square.addEventListener('mouseover', () => {
     square.style.cssText = "background-color: black"
}));


