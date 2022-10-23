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

