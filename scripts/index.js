//Create an array of 6 items of the 3 coding languages
function shuffle() {
    let array = [];
    for (let i = 0; i<2; i++){
        array.push('php')
        array.push('html')
        array.push('js')
    }

    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

let array = shuffle();

let eventlistener = (box, i) => {
    // Adding event listners to all the divs
    box.addEventListener("click", function(){
        revealimg(array, i)
    })
}

//Select all the divs of the game
document.querySelectorAll(".posdiv").forEach((item, index)=> {
    eventlistener(item,index);
})

function revealimg(array, i){
    console.log(i, array[i]);
    document.querySelectorAll(".posdiv")[i].style.backgroundImage =  `url('assets/${array[i]}logo.png')`
}