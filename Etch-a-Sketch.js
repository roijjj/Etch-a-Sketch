const sect = document.querySelector(".container");
let max = 16;


function playgame(){
    for (let i = 0; i<max; i++){
        const row = document.createElement("div")
        row.classList.add("block1")
        sect.appendChild(row);
        
        for (let a = 0; a<max; a++){
            const column = document.createElement("div");
            column.classList.add("block2");
            column.addEventListener("mouseover", function(){
                this.style.backgroundColor = "blue";

            });
            row.appendChild(column);
            
            //column.textContent = "aff"
        }
    }

}

playgame();


let cbtn =  document.getElementById("#cbtn");
cbtn.addEventListener('click', changesize());

function changesize(){

   return console.log("adfffff")
   //return maxf = window.prompt("grid size","16");
    
}