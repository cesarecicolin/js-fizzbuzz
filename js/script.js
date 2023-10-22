const row = document.querySelector(".row");
console.log(row);
let gridString =""
for (let i = 1; i <=100; i++) {
    
   let color = ""

    let resulte =""
    
    if (i % 3 === 0 && i % 5 === 0) {
        resulte = ("fizzbuzz")
        color = ("blu")
        
    }

    else if (i % 3 === 0)
    {
        resulte = ("fizz")
        color = ("red")
    }
    else if (i % 5 === 0)
    {
        resulte = ("buzz")
        color = ("green")
    }

    else 
    {
        resulte = (i)
        
    }

    console.log( resulte)

    gridString += `<div class="square ${color} ">${resulte}</div>`
    console.log(`iterazione ${i}`, gridString);


    
}
    row.innerHTML = gridString;