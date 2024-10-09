
let minHeight = 115;

const container = document.querySelector(".grid-container");
container.setAttribute("style", "padding:0; margin:0; display:flex; flex-flow: row wrap; box-sizing: border-box; width: 100%;");

//since width of container is in percent, get the pixel value
//return value is string with format **px, so separate num value from px 
let maxRowWidth = window.getComputedStyle(container, null).getPropertyValue("width").split("px");

//each row should exactly fit 16 grid
let maxGridWidth = parseInt(maxRowWidth[0]) / 16;
console.log(maxGridWidth);

for (let i = 1; i <= 16; i++){

    let gridRow = document.createElement("div");
    let className = "gridRow"// + i.toString();

    gridRow.classList.add(className);
    //set width of row to full page width
    gridRow.setAttribute("style", `width: ${maxRowWidth[0]}px; height: fit-content; border: 2px solid green; display: flex`);
    
    container.appendChild(gridRow)

    for (let j = 1; j <= 16; j++){
        
        let grid = document.createElement("div");
        let className = "grid"// + j.toString();

        grid.classList.add(className);
        grid.setAttribute("style", `width: ${maxGridWidth}px; min-height: ${minHeight}px; border: 1px solid #000000; `)
        gridRow.appendChild(grid);
    }  
}

const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    grid.addEventListener("mouseover", () =>{
        grid.style["background-color"] = "lightblue";
    }) 
    grid.addEventListener("mouseout", () => {
        grid.style["background-color"] = "transparent";
    })      
})


 

