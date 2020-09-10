// variables
const instructions = document.getElementById("instructions");
const game = document.getElementById("game");
const endscreen = document.getElementById("endscreen");

const start = document.getElementById("start");
const newgame = document.getElementById("newgame");
const image = document.getElementById("image");
const health_block = document.getElementById("health_block");
const health = document.getElementById("health");
const happiness = document.getElementById("happiness");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

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
        // change image to 'bright light'
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
    }
}

// main content
start.addEventListener("click", () => {
    game.style.display = "block";
    instructions.style.display = "none";
    // endscreen.style.display = "none";
});

const gameover = () => {
    endscreen.style.display = "block";
    game.style.display = "none";
}

const checkHealth = () => {
    if((creature.health <= 1)||(creature.happiness <= 1)){
        gameover();
    }else if(creature.health < 3){
        health_block.style.backgroundColor = `red`;
    }else if(creature.health < 4){
        health_block.style.backgroundColor = `orange`;
    }else{
        health_block.style.backgroundColor = `paleturquoise`;
    }
}
const checkHappiness = () => {
    if(creature.happiness < 3){
        happiness_block.style.backgroundColor = `red`;
    }else if(creature.happiness < 4){
        happiness_block.style.backgroundColor = `orange`;
    }else{
        happiness_block.style.backgroundColor = `paleturquoise`;
    }
}

const updateStats = () => {
    health.textContent = creature.health;
    happiness.textContent = creature.happiness;
    checkHealth();
    checkHappiness();
    
}



// list of all actions
const allActions = ['mirror', 'read', 'music', 'sleep', 'eat', 'drink'];

// create new list from above and randomly remove items until only 3 options left
let finalActions = allActions;

const removeActions = () => {
    while (finalActions.length > 3){
        let randNum = Math.floor((Math.random() * finalActions.length));
        finalActions.splice(randNum, 1);
    }
};
removeActions();

// set text of buttons to above actions
const setOptions = () => {
    option1.textContent = finalActions[0];
    option2.textContent = finalActions[1];
    option3.textContent = finalActions[2];
};
setOptions();



// randAction1 = actions[2];



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
    creature.drink(); // needs to correspond with finalActions[2]
    updateStats();
});

newgame.addEventListener("click", () => {
    //reset();
    game.style.display = "block";
    // instructions.style.display = "none";
    endscreen.style.display = "none";
    creature.reset();
    updateStats();
});


// Options Button styling
