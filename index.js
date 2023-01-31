
// The purpose of this function is to populate my container with the etch and sketch game board. It will create a row of divs
// that will be specified to the input of the user. 
function createDiv () {
    
    // This logic will create 16 rows in my container
    for (i = 0; i < 16; i++) {

        // This line will generate div elements for each loop iteration specified
        const newDiv = document.createElement("div");

        // Assigning classes and unique id's to each grid element 
        newDiv.className ="grid"
        newDiv.id = `divGrid${i+1}`;

        // This code was used to visualize if my code was yielding the correct output
        // if (i % 2 == 0 ) {
        //     newDiv.style.background = "purple";
        // }

        // this line of code is targeting the div with the id "container" and is appending new divs within the container elements
        document.getElementById('container').appendChild(newDiv);
    }
}

// This function will look to generate a line of "squares" within each "grid" row that is available.
function populateGrid () {

    // I am assigning the variable board to the array of elements on my DOM with the class 'grid'
    board = document.getElementsByClassName('grid');
    console.log(board.length);

    // This logic will loop through all the available grids created from the createDiv function.
    for (i = 0; i < board.length; i++) {

        // This logic will create "square" div elements that is equal to the user input and place them within the current "grid".
        for (j = 0; j < board.length; j++) {
            const newDiv = document.createElement("div");

            newDiv.className ="square"
            newDiv.id = `divSquare${j+1}`;

            // This code serves as a visual check for my logic. Colors used to denote if the grids were properly made.
            // if (j % 2 == 0 ) {
            //     newDiv.style.background = "black";
            // }

            // if ((i + 1) % 2 == 0) {
            //     newDiv.style.background = "purple";
            // }

            // if ((i + 1) % 2 == 0 && (j % 2 == 0)) {
            //     newDiv.style.background = "orange";
            // }
            
            // We are using "board[i] to append our new "square" divs because [i] denotes the current grid we are appending (squares) to.
            board[i].appendChild(newDiv);

        }
    
    }
}


function randomRGB () {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const RGBColor = `rgb(${x},${y},${z})`
    console.log(RGBColor);
    return RGBColor;
}

gridSelection.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(createBoard.value);
})

container.addEventListener('mouseover', (e) => {
    sketch = (e.target);

    if (sketch.className == "square") {
        sketch.classList.add("hover");
    }

})

randomRGB();
window.onload = createDiv();
window.onload = populateGrid();