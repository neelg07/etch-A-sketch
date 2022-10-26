// Slider function
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
}


// Grid formation
let gridSize = document.querySelector('.slider');
let value = parseInt(gridSize.value);
                                                        // Dynamic slider value -> variable
gridSize.addEventListener("input", function() {
    value = parseInt(this.value);
});


const square = document.querySelector('.square');

const changeSize = document.querySelector('.gridSize');     // Change Size button

changeSize.addEventListener('click', () => {
    while (square.firstChild) {                 
        square.removeChild(square.lastChild);               // Clear divs for new resolution 
    }
    setGrid(value);
});


function setGrid(num, color) {                                   // function implementation for grid size 

    let cellWidth = (50 / num) + 'vw';                    // store cell heights/widths
    let cellHeight = (37 / num) + 'vw';

    for (let i = 0; i < num; ++i) {                       // creating grid

        let columnDiv = document.createElement('div');
        columnDiv.className = 'grid-column';
        columnDiv.setAttribute('style', `height: ${cellHeight};`);
        
        for (let j = 0; j < num; ++j) {

            let rowDiv = document.createElement('div');
            rowDiv.className = 'grid-row';
            rowDiv.setAttribute('style', `width: ${cellWidth}; height: ${cellHeight};`);



            rowDiv.addEventListener("click", function(event) {               // Change rowDiv color upon click
                if (blackBtn.disabled === true) {
                    let color = DEFAULT_COLOR;
                    this.style.backgroundColor = color;
                } else if (eraserBtn.disabled === true) {
                    let color = 'white';
                    this.style.backgroundColor = color;
                } else if (colorBtn.disabled === true) {
                    let color = colorSquare.value;
                    this.style.backgroundColor = color;
                } else {
                    let color = 'red';
                    this.style.backgroundColor = color;
                }
            });

            columnDiv.appendChild(rowDiv);
        }
        square.appendChild(columnDiv);                        // append everything to square container div
    }
}


window.addEventListener('load', (event) => {            // Set grid on first page load and subsequent reloads
    setGrid(value, DEFAULT_COLOR);                                     // Set to blackmode as default
    blackMode();
})



// Button selection
const clear = document.querySelector('.clear-mode');                // clear button

clear.addEventListener('click', () => {
    while (square.firstChild) {                 
        square.removeChild(square.lastChild);               // Clear divs for new resolution 
    }
    setGrid(value);
})


// All other button modes
const colorSquare = document.querySelector('.color-square');
const colorBtn = document.querySelector('.color-mode');
const blackBtn = document.querySelector('.black-mode');
const eraserBtn = document.querySelector('.eraser-mode');
const rainbowBtn = document.querySelector('.rainbow-mode');

const DEFAULT_COLOR = 'black';

function blackMode() {                                                  // default black mode is on 
    blackBtn.disabled = true;
    blackBtn.setAttribute('style', 'background: gray; color: black;');
    colorBtn.disabled = false;
    colorBtn.removeAttribute('style');
    eraserBtn.disabled = false;
    eraserBtn.removeAttribute('style');
    rainbowBtn.disabled = false;
    rainbowBtn.removeAttribute('style');

    setGrid(value);
};


colorBtn.addEventListener('click', () => {                          // color mode button
    colorBtn.disabled = true;
    colorBtn.setAttribute('style', 'background: gray; color: black;');
    blackBtn.disabled = false;
    blackBtn.removeAttribute('style');
    eraserBtn.disabled = false;
    eraserBtn.removeAttribute('style');
    rainbowBtn.disabled = false;
    rainbowBtn.removeAttribute('style');

    setGrid(value);
});


blackBtn.addEventListener('click', blackMode);                      // black mode button


eraserBtn.addEventListener('click', () => {                          // eraser mode button
    blackBtn.disabled = false;
    blackBtn.removeAttribute('style');
    colorBtn.disabled = false;
    colorBtn.removeAttribute('style');
    eraserBtn.disabled = true;
    eraserBtn.setAttribute('style', 'background: gray;');
    rainbowBtn.disabled = false;
    rainbowBtn.removeAttribute('style');

    setGrid(value);
});


rainbowBtn.addEventListener('click', () => {                      // rainbow mode button
    blackBtn.disabled = false;
    blackBtn.removeAttribute('style');
    colorBtn.disabled = false;
    colorBtn.removeAttribute('style');
    eraserBtn.disabled = false;
    eraserBtn.removeAttribute('style');
    rainbowBtn.disabled = true;
    rainbowBtn.setAttribute('style', 'background: gray;');

    setGrid(value);
});

/* function changeColor() {
    if (blackBtn.disabled === true) {
        return DEFAULT_COLOR;
    } else if (eraserBtn.disabled === true) {
        return 'white';
    } else if (colorBtn.disabled === true) {
        let x = colorSquare.value;
        return x;
    } else {
        return 'red';
    }
}; */