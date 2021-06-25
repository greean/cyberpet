// variables
const instructions = document.getElementById("instructions");
const game = document.getElementById("game");
const endscreen = document.getElementById("endscreen");
const start = document.getElementById("start");
const newgame = document.getElementById("newgame");
const image = document.getElementById("image");
const health = document.getElementById("health");
const happiness = document.getElementById("happiness");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const outcome = document.getElementById("outcome");
const end_image = document.getElementById("end_image");
const final_comment = document.getElementById("final_comment");

// creature object
const creature = {
    name: "Gizmo",
    typeOfPet: "Mogwai",
    health: 5,
    happiness: 5,
    // functions
    mirror() {
        this.health --;
        this.happiness --;
        image.src = `img/mirror.gif`;
    },
    read() {
        this.happiness ++;
        image.src = `img/reading.png`;
    },
    music() {
        this.happiness ++;
        image.src = `img/music.png`;
    },
    sleep() {
        this.health ++;
        image.src = `img/sleeping.png`;
    },
    eat() {
        this.health ++;
        this.happiness ++;
        image.src = `img/eating.png`;
    },
    drink() {
        this.health --;
        this.happiness --;
        image.src = `img/spill_drink.png`;
    },
    reset() {
        this.health = 5;
        this.happiness = 5;
        image.src = `img/happy.png`;
    }
}


// change from intro screen to game
start.addEventListener("click", () => {
    game.style.display = "block";
    instructions.style.display = "none";
});

// change to end screen and set the win/lose content
const gameover = (result) => {
    if (result === `win`) {
        end_image.src = `img/win.gif`;
        outcome.textContent = `Well Done!`;
        final_comment.textContent = `You've made Gizmo a very happy Mogwai`;
        newgame.textContent = `Play again!`;
    }else {
        end_image.src = `img/grandfather.png`;
        outcome.textContent = `"With Mogwai comes much responsibility!"`;
        final_comment.textContent = `"Perhaps one day, you will be ready. Until then, Mogwai will be waiting."`;
        newgame.textContent = `Try again!`;
    }
    endscreen.style.display = "block";
    game.style.display = "none";
}

// changes background of health stats if score gets low, also checks if you win or lose
const checkHealth = () => {
    switch (true) {
        // lose when score reaches 1
        case creature.health < 2 || creature.happiness < 2:
            gameover (`lose`);
            break;
        // win when score reaches 12
        case creature.health >11 || creature.happiness >11:
            gameover('win');
            break;
        case creature.health < 3:
            health_block.style.backgroundColor = `red`;
            break;
        case creature.health < 4:
            health_block.style.backgroundColor = `orange`;
            break;
        default:
            health_block.style.backgroundColor = `paleturquoise`;
    }
};

// changes background of happiness stats if score gets low
const checkHappiness = () => {
    switch (true) {
        case creature.happiness < 3:
            happiness_block.style.backgroundColor = `red`;
            break;
        case creature.happiness < 4:
            happiness_block.style.backgroundColor = `orange`;
            break;
        default:
            happiness_block.style.backgroundColor = `paleturquoise`;
    }
};

// ALTERNATIVE IF/ELSE STATEMENTS TO CHECK HEALTH & HAPPINESS
// const checkHealth = () => {
//     if((creature.health <= 1)||(creature.happiness <= 1)){
//         gameover();
//     }else if(creature.health < 3){
//         health_block.style.backgroundColor = `red`;
//     }else if(creature.health < 4){
//         health_block.style.backgroundColor = `orange`;
//     }else{
//         health_block.style.backgroundColor = `paleturquoise`;
//     }
// };

// const checkHappiness = () => {
//     if(creature.happiness < 3){
//         happiness_block.style.backgroundColor = `red`;
//     }else if(creature.happiness < 4){
//         happiness_block.style.backgroundColor = `orange`;
//     }else{
//         happiness_block.style.backgroundColor = `paleturquoise`;
//     }
// };


// create a list of all the possible actions
const resetActions = () => {
    let allActions = ['Look in the mirror', 'Read a book', 'Play some music', 'Go to sleep', 'Eat something', 'Have a drink'];
    return allActions;
}

// shuffle the order of the actions to appear more random e.g. mirror won't always be the top option
// The functions 'currentIndex' looks at the value at the end of the array and stores it as 'tempValue'. 
// Sets the arrays end value 'currentIndex' to the value at 'randomIndex', and the value at 'randomIndex' to the stored 'tempValue'
// 'currentIndex' moves to look at the previous value in the array.
// The process is repeated until the 'currentIndex' reaches 0.
const shuffle = (array) => {
    let currentIndex = array.length, tempValue, randomIndex;  // sets 'currentIndex' to the length of the array, initially 'tempValue' and 'randomIndex' are undefined
    // While there remain values to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a random value...
      randomIndex = Math.floor(Math.random() * currentIndex);   // set the randomIndex
      currentIndex -= 1;
  
      // And swap it with the current value.
      tempValue = array[currentIndex];     
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  }

// create new list from above and randomly remove items until only 3 options are left
const setActions = (array) => {
    let finalActions = array;

    while (finalActions.length > 3){
        let randNum = Math.floor((Math.random() * finalActions.length));
        finalActions.splice(randNum, 1);
    };
    return finalActions;
};

// set text of buttons to above actions
const setButtons = (options) => {
    option1.textContent = options[0];
    option2.textContent = options[1];
    option3.textContent = options[2];
};

// initial set-up so the buttons are ready
setButtons(
    setActions(
        shuffle(
            resetActions()
        )
    )
); 

// update the stats, check health/happiness and refresh the button options
const updateStats = () => {
    health.textContent = creature.health;
    happiness.textContent = creature.happiness;
    checkHealth();
    checkHappiness();

    setButtons(
        setActions(
            shuffle(
                resetActions()
            )
        )
    );  
};

let selected = null;

// run the action associated with the button
const selectedOption = () => {
    if(selected === 'Look in the mirror'){
        creature.mirror();
    }else if(selected === 'Read a book'){
        creature.read();
    }else if(selected === 'Play some music'){
        creature.music();
    }else if(selected === 'Go to sleep'){
        creature.sleep();
    }else if(selected === 'Eat something'){
        creature.eat();
    }else if(selected === 'Have a drink'){
        creature.drink();
    }else{
        console.log(`No valid option was selected!`)
    }
};

// 'options' event listeners
option1.addEventListener("click", () => {
    selected = option1.textContent;
    selectedOption();
    updateStats();
});
option2.addEventListener("click", () => {
    selected = option2.textContent;
    selectedOption();
    updateStats();
}); 
option3.addEventListener("click", () => {
    selected = option3.textContent;
    selectedOption();
    updateStats();
});

// reset the game to have another go
newgame.addEventListener("click", () => {
    game.style.display = "block";
    endscreen.style.display = "none";
    creature.reset();
    updateStats();
});
