// variables
const instructions = document.getElementById("instructions");
const game = document.getElementById("game");
const endscreen = document.getElementById("endscreen");
const start = document.getElementById("start");
const newgame = document.getElementById("newgame");
const image = document.getElementById("image");
// const health_block = document.getElementById("health_block");
const health = document.getElementById("health");
const happiness = document.getElementById("happiness");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const outcome = document.getElementById("outcome");
const end_image = document.getElementById("end_image");
const final_comment = document.getElementById("final_comment");

// Object
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
        // image reading
        image.src = `img/reading.png`;
    },
    music() {
        this.health ++;
        // keyboard image
        image.src = `img/music.png`;
    },
    sleep() {
        this.health ++;
        this.happiness ++;
        // sleep image
    },
    eat() {
        this.health ++;
        this.happiness ++;
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




// main content
start.addEventListener("click", () => {
    game.style.display = "block";
    instructions.style.display = "none";
    // endscreen.style.display = "none";
});

const gameover = (result) => {
    if (result === `win`) {
        end_image.src = `img/win.gif`;
        outcome.textContent = `Well Done!`;
        final_comment.textContent = `You've made Gizmo a very happy Mogwai`;
    }else {
        end_image.src = `img/grandfather.png`;
        outcome.textContent = `"With Mogwai comes much responsibility!"`;
        final_comment.textContent = `"Perhaps one day, you will be ready. Until then, Mogwai will be waiting."`;
    }
    endscreen.style.display = "block";
    game.style.display = "none";
}

// changes background of health stats if score gets low, also checks if you win or lose
const checkHealth = () => {
    switch (true) {
        case creature.health < 2 || creature.happiness < 2:
            gameover (`lose`);
            break;
        case creature.health >14 || creature.happiness >14:
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


// list of all actions
const resetActions = () => {
    let allActions = ['Mirror', 'Read', 'Music', 'Sleep', 'Eat', 'Drink'];
    return allActions;
}
// console.log(resetActions());

// create new list from above and randomly remove items until only 3 options left
const setActions = (array) => {
    let finalActions = array;
    // console.log(finalActions);
    // console.log(finalActions.length);
    while (finalActions.length > 3){
        let randNum = Math.floor((Math.random() * finalActions.length));
        finalActions.splice(randNum, 1);
    };
    return finalActions;
};
// setActions(resetActions());
// console.log(setActions());



// set text of buttons to above actions
const setButtons = (options) => {
    // console.log(options[0], options[1], options[2]);
    // console.log(allActions);

    option1.textContent = options[0];
    option2.textContent = options[1];
    option3.textContent = options[2];

    // option1.textContent = setActions[0];
    // option2.textContent = setActions[1];
    // option3.textContent = setActions[2];
};
setButtons(setActions(resetActions()));

// reset the finalActions in order to generate new options
// const resetActions = () => {
//     console.log(`resetActions has been called.`);
//     finalActions = allActions;
//     console.log(finalActions);
//     setButtons(setActions());
// }

const updateStats = () => {
    health.textContent = creature.health;
    happiness.textContent = creature.happiness;
    // resetActions();
    checkHealth();
    checkHappiness();
    setButtons(setActions(resetActions()));
};



// Options
option1.addEventListener("click", () => {
    creature.music(); // needs to correspond with finalActions[0]
    updateStats();
});

option2.addEventListener("click", () => {
    creature.read(); // needs to correspond with finalActions[1]
    updateStats();

}); 

option3.addEventListener("click", () => {
    creature.mirror(); // needs to correspond with finalActions[2]
    updateStats();
});

// reset the game to have another go
newgame.addEventListener("click", () => {
    game.style.display = "block";
    endscreen.style.display = "none";
    creature.reset();
    updateStats();
});
