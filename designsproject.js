// Select color input
var color = document.getElementById("colorPicker")
// Select size input
var size = document.getElementById("sizePicker")


//I. When size is submitted by the user, call makeGrid()
function makeGrid(event1) {
// 1. We get the reference where we should place the table
var tableplace = document.getElementById("pixelCanvas")
//1.1 We take the table place reference and clear the old grid
tableplace.innerHTML = " ";
// 2. We get the sizes of our inputs
var Height = document.getElementById("inputHeight").value;
var Widht = document.getElementById("inputWidth").value;
// 3. We do a loop to create a new <tr> (row) for each number on our height input
    for (var row = 0; row < Height; row++) {
        let newrow = tableplace.insertRow(row);
// 4. We do a loop, inside the loop of step 4, to create a new column <td> for each number on the input width
        for (var columns = 0; columns < Widht; columns++) {
            let newcell = newrow.insertCell(columns);
            //With this function Im going to let the user colored and specific square
            newcell.addEventListener("click", function () {
                newcell.style.backgroundColor = color.value
            })
        }
    }
event1.preventDefault();
}

//II.EventListener for make a grid
//1. In this part the user is going to click in the bottom sumbit and we are going to call the function makeGrid() with the Height and Width selected:
size.addEventListener('submit', makeGrid)


