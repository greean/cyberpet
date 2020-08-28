// variables
const instructions = document.getElementById("instructions");
const play = document.getElementById("play");
const image = document.getElementById("image");
const game = document.getElementById("game");
const health = document.getElementById("health");
const happiness = document.getElementById("happiness");
const option1 = document.getElementById("option1");

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
}

// main content
play.addEventListener("click", () => {
    game.style.display = "block";
    instructions.style.display = "none";
})

const updateStats = () => {
    health.textContent = creature.health;
    happiness.textContent = creature.happiness;
}

// Options
option1.addEventListener("click", () => {
    creature.music();
    updateStats();
})

option2.addEventListener("click", () => {
    creature.read();
    updateStats();
})

option3.addEventListener("click", () => {
    creature.drink();
    updateStats();
})


// console.log(typeof(creature));
// creature.mirror();
// console.log(creature.health, creature.happiness);