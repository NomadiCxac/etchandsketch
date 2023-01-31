// This function will get the users input as an integer and pass that integer value to the other functions that will handle
// generating the gameboard.
function getUserInput () {

    // check if the container (or the gameboard) is empty.
    currentGrid = document.getElementById('container');
    isEmpty = currentGrid.innerHTML === "";
   
    // this logic is to initalize the generation of the gameboard
    if (isEmpty === true) {
        stringBoardSize = (prompt("Please generate a board size between 2 and 100"));
        numBoardSize = parseInt(stringBoardSize);
    } 
    
    // this line of code will force the user to reload the page if they want to reset the gameboard size. This is to prevent
    // a board-resizing bug from a previous version.
    else {
        let restart = "Would you like to reset your board size? Press OK or Cancel"

        // reload page if user confirms they want to generate a new game board.
        if (confirm(restart) === true) {
            document.location.reload(true);
            return;
        } 
        
        // do nothing if user clicks cancel. Maintain "old" game board state.
        else {
            return;
        }
    }
    
    // this logic will check for valid inputs. If input is != number OR fits within the valid range, alert the user.
    if (numBoardSize > 100 || numBoardSize < 2) {
        alert("Please provide a valid value between (and including) 2 and 100");
        return;
    }

    // pass the int (value) received from the user to the next function.
    createDiv(numBoardSize);
}
// The purpose of this function is to populate my container with the etch and sketch game board. It will create a row of divs
// that will be specified to the input of the user. 
function createDiv (gridSize) {
    
    
    // This logic will create 16 rows in my container
    for (i = 0; i < gridSize; i++) {

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

    // pass the size (value) of the grid from the createDiv function to the populateGrid function.
    populateGrid (gridSize);
}

// This function will look to generate a line of "squares" within each "grid" row that is available.
function populateGrid (squares) {

    // I am assigning the variable board to the array of elements on my DOM with the class 'grid'
    board = document.getElementsByClassName('grid');

    // This logic will loop through all the available grids created from the createDiv function.
    for (i = 0; i < squares; i++) {

        // This logic will create "square" div elements that is equal to the user input and place them within the current "grid".
        for (j = 0; j < squares; j++) {
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

// function to generate a random color
function randomRGB () {
    const x = Math.floor(Math.random() * 256);  
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const RGBColor = `rgb(${x},${y},${z})`
    // console.log(RGBColor);
    return RGBColor;
}

// function to provide a float value that will adjust brightness
function reduceBrightness () {
    return 0.1;
}


// the event listener below will provide the "hover" effect and apply style changes to the html of the squares when a 'mouseover' event is 
// triggered.
count = 0;

container.addEventListener('mouseover', (e) => {
    sketch = (e.target);
    

    if (sketch.className == "square") {
        count++;

        if (count > 10) {
            count = 0;
        }

        // variables storing the bonus criteria applications for the Etch & Sketch exercise
        darken = reduceBrightness();
        randomColour = randomRGB();

        // append the style and filter attributes to the square that is currently moused over. 
        sketch.setAttribute("style", `background: ${randomColour}; filter: brightness(${1 - (count * darken)})`)

    }

})

// functions loaded onto the DOM -- awaiting input from the user to begin creating the gameboard.
window.onload = createDiv();
window.onload = populateGrid();