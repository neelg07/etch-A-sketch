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

changeSize.addEventListener('click', setGrid(value));


function setGrid(value) {                                   // function implementation for grid size 

    let cellWidth = (50 / value) + 'vw';
    let cellHeight = (37 / value) + 'vw';

    for (let i = 0; i < value; ++i) {

        let columnDiv = document.createElement('div');
        columnDiv.className = 'grid-column';
        columnDiv.setAttribute('style', `height: ${cellHeight};`);
        
        for (let j = 0; j < value; ++j) {

            let rowDiv = document.createElement('div');
            rowDiv.className = 'grid-row';
            rowDiv.setAttribute('style', `width: ${cellWidth}; height: ${cellHeight};`);
            columnDiv.appendChild(rowDiv);
        }
        square.appendChild(columnDiv);
    }
}
