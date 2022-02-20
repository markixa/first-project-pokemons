let count=1;

function renderImg (){
    let container = document.getElementById('pokemon');
    container.innerHTML = `<img class="pokeSize" src="https://tinyurl.com/ironhack-pokemons/${count}.svg"/>`;   
}

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = function(){
    if (count > 1){
        count--;
    }
    count--;
    renderImg();
}

next.onclick = function(){
    if (count < 650){
        count++;
    }
    count++;
    renderImg();
}



renderImg()