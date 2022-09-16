let score, counter, bgImgs, level, fail;
bgImgs = []; //array for selection validation
counter = 0; //counter for the amount of gotten right
time = 1000; // timer
score = 0; //score counter
level = 1; //level counter
fail = 0;

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
        revealimg(i)
    })
}

//Select all the divs of the game
document.querySelectorAll(".posdiv").forEach((item, index)=> {
    eventlistener(item,index);
})

function flash(){
    document.querySelectorAll(".posdiv").forEach((item, i) => {
        item.style.backgroundImage =  `url('assets/${array[i]}logo.png')`
    });
    setTimeout(() => {
        document.querySelectorAll(".posdiv").forEach((item, i) => {
            item.style.backgroundImage =  "";
        });
    }, time);
}

//reveal the images after click
function revealimg(i){
    let clickedDiv = document.querySelectorAll(".posdiv")[i]
    if(clickedDiv.style.backgroundImage){
        return;
    }
    clickedDiv.style.backgroundImage =  `url('assets/${array[i]}logo.png')`
    clickedDiv.style.cursor = "auto";
    check(i)
}

function check(i){
    //Check if new set is being chosen
    if(!bgImgs[0]){
        bgImgs.push(array[i])
        return true;
    }
    
    // if set is selected, reset array
    if(array[i] == bgImgs.at(-1)){
        bgImgs=[];
        counter++;
        if (counter == 3){
            level ++;
            fail = 0;
            score += 5;
            if(time>32){
                time = time/1.25;
            }
            console.log(time)
            setTimeout(reset, 1500);
        }
    }
    //2 Tries
    else if(fail == 0){
        counter = 0;
        fail++;
        bgImgs=[];
        setTimeout(flash, 500);
    }

    // if failed reset the whole box
    else{
        level = 1;
        score -= 3;
        time = 1000;
        setTimeout(reset, 500);
    }
};

//Reset Game, reshuffle the array, reset the bg imgs and reset the bg box
function reset(){
    document.getElementById("level").innerText = level;
    document.getElementById("score").innerText = score;
    counter = 0;
    fail = 0;
    array = shuffle();
    bgImgs = [];
    document.querySelectorAll(".posdiv").forEach((item) => {
        item.style.backgroundImage = "";
        item.style.cursor = "pointer";
    })
}