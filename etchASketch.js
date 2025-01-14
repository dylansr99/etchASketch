function generateNumberOfSquares(input) {
    
    for (let i = 0; i < input; i++) {
      const square = document.createElement('div')
      square.classList.add("squares")
      container.appendChild(square)
    }
   
}

generateNumberOfSquares(16)

