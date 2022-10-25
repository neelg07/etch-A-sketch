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
    setGrid(value);
});


function setGrid(num) {                                   // function implementation for grid size 

    while (square.firstChild) {                 
        square.removeChild(square.lastChild);               // Clear divs for new resolution 
    }

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


            rowDiv.addEventListener("click", function(event){                                   // Event listeners to change color
                this.style.backgroundColor = 'green';
            });

            columnDiv.appendChild(rowDiv);
        }
        square.appendChild(columnDiv);                        // append everything to square container div
    }
}


window.addEventListener('load', (event) => {            // Set grid on first page load and subsequent reloads
    setGrid(value);
    blackMode();
})



// Button selection
const clear = document.querySelector('.clear-mode');                // clear button

clear.addEventListener('click', () => {
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
});