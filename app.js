/*  */
let count = 1


function render(){
    /* 1.) Declare container and capture the div from HTML */
let container = document.getElementById('pokemon') 
    /* 2.) Whatever the container is, put these images in it */
    container.innerHTML = `<img class="poke" src ="https://tinyurl.com/ironhack-pokemons/${count}.svg">` 
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

/* When button is clicked, run this code */
prev.onclick = function(){ /*We make this because we dont want a negative # */
    if (count > 1) { /* Literally just so it doesnt go to 0 */
        count = count + 1 
        render()
    } 
}

/* When button is clicked, run this code */
next.onclick = function(){
    if (count < 650) /* Literally so it doesnt go above max */
    count = count + 1 
    render()
}

render() /*need this because without it, when you first load page, 
you wont see pokemon, only when you click next buttons, it displays pokemon by default */