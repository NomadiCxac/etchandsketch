function populateGrid () {

    const newDiv = document.createElement("div");

    newDiv.className ="square"

    // each div 
    newDiv.id = `divSquare${i+1}`;

    if (i % 2 == 0 ) {
        newDiv.style.background = "black";
    }


    document.getElementsById('divGrid1').appendChild(newDiv);
}

function createDiv () {
    
    for (i = 0; i < 16; i++) {
        // I am using JS to create a new element type Div
        const newDiv = document.createElement("div");


        newDiv.className ="grid"

        // each div 
        newDiv.id = `divGrid${i+1}`;

        if (i % 2 == 0 ) {
            newDiv.style.background = "purple";
        }

        // this line of code is targeting the div with the id "container" and is appending new divs within the container elements
        document.getElementById('container').appendChild(newDiv);
    }
    
    populateGrid();
}



window.onload = createDiv ();
window.onload = populateGrid ();