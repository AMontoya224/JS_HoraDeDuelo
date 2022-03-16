




function mouseOver(element){
    let cardBack = element.children[0];
    let cardFront = element.children[1];
    cardBack.style.display = "none";
    cardFront.style.display = "block";
}

function mouseOut(element){
    let cardBack = element.children[0];
    let cardFront = element.children[1];
    cardBack.style.display = "block";
    cardFront.style.display = "none";
}