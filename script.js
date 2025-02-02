
let minHeight = 115;
let gridSize = 0;

//set initial grid layout
setGrid(16);
addHover();

function setGrid(size) {
    const container = document.createElement("div");
    container.classList.add("grid-container");
    container.setAttribute("style", "padding:0; margin:0; display:flex; flex-flow: row wrap; box-sizing: border-box; width: 100%;");

    document.body.appendChild(container);
    //since width of container is in percent, get the pixel value
    //return value is string with format **px, so separate num value from px 
    let maxRowWidth = window.getComputedStyle(container, null).getPropertyValue("width").split("px");

    //each row should exactly fit 16 grid
    let maxGridWidth = parseInt(maxRowWidth[0]) / 16;
    console.log(maxGridWidth);

    //outer loop creates row
    for (let i = 1; i <= size; i++) {

        let gridRow = document.createElement("div");
        let className = "gridRow"// + i.toString();

        gridRow.classList.add(className);
        //set width of row to full container width
        gridRow.setAttribute("style", `width: ${maxRowWidth[0]}px; height: fit-content; display: flex`);

        container.appendChild(gridRow)

        //inner loop creates each square grid
        for (let j = 1; j <= size; j++) {

            let grid = document.createElement("div");
            let className = "grid"
            let classNum = j.toString();

            grid.classList.add(className);
            grid.classList.add(classNum);
            grid.setAttribute("style", `width: ${maxGridWidth}px; min-height: ${minHeight}px; border: 1px solid #000000; opacity: 0; `)
            gridRow.appendChild(grid);
        }
    }
}
// unused function: if one wants to set different colors to each grid when hovered
function setColorDynamic(grid) {
    let hexColor = Math.floor(Math.random() * 8 ** 8).toString(16);
    grid.style["background-color"] = `#${hexColor}`;
}

function addHover() {
    const grids = document.querySelectorAll(".grid");

    grids.forEach((grid) => {
        //background changes when mouse pointer is on the grid and reverts when the mouse pointer leaves.
        grid.addEventListener("mouseover", () => {

            grid.style['background-color'] = 'red';

            let opacity = parseFloat(grid.style['opacity']);
            //only increment if not yet set to max opacity
            if (opacity != 1) {
                opacity += .1;
                let newOpacity = opacity.toString();
                grid.style['opacity'] = newOpacity;
            }
        })

        grid.addEventListener("mouseout", () => {
            let opacity = parseFloat(grid.style['opacity']);
            console.log(`Opacity after ${opacity}`)
            //TODO: Add feature here
        })
    })
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {

    let input;

    do {
        input = prompt("Please input a number between 1 and 100");
        input = parseInt(input);
    } while ((input < 0) || (input > 100));

    gridSize = input;
    const body = document.body;
    const childNodes = body.lastElementChild;
    body.removeChild(childNodes);
    setGrid(gridSize);
    addHover();
})




