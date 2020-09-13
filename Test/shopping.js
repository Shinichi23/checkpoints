let btnPlus = document.getElementsByClassName('btn-plus');
let btnMoins = document.getElementsByClassName('btn-minus');
let hearts = document.getElementsByClassName('fa-heart');
let btnRemove = document.getElementsByClassName('btn-danger');

for(let i = 0; i < btnPlus.length; i++){
    btnPlus[i].addEventListener("click", function(e)){
        let parent = e.target.parentNodo;
        let input = parent.getElementsByTagName("input");
        input.value = parseInt(input.value) + 1;
    }
}

for(let i = 0; i < btnMoins.length; i++){
    btnMoins[i].addEventListener("click", e => {
        let parent = e.target.parentNodo;
        let input = parent.getElementsByTagName("input")[0];
        if(input.value = parseInt(input.value) - 1;
    }
}

