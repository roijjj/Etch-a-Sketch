const sect = document.querySelector(".container");
let b
for (let i = 0; i<16; i++){
    const row = document.createElement("div")
    row.classList.add("block1")
    sect.appendChild(row);
    
    for (let a = 0; a<16; a++){
        const column = document.createElement("div");
        column.classList.add("block2");
        row.appendChild(column);
        //column.textContent = "aff"
    }


}