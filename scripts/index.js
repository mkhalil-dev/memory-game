
//Create an array of 6 items of the 3 coding languages
let arr = [];

for (let i = 0; i<2; i++){
    arr.push('php')
    arr.push('html')
    arr.push('js')
}

function shuffle(array) {
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

console.log(document.querySelectorAll(".posdiv"))
console.log(document.querySelectorAll(".pos")[0].src="assets/htmllogo.png")
document.querySelectorAll(".posdiv").forEach((item, index)=> {
    eventlistener(item,index);
})

function eventlistener(box, i){
    box.addEventListener("click", function(){
        console.log('hi'+i);
    })
}