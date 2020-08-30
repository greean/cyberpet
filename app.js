// variables
const instructions = document.getElementById("instructions");
const game = document.getElementById("game");
const endscreen = document.getElementById("endscreen");

const play = document.getElementById("play");
const image = document.getElementById("image");
const health_block = document.getElementById("health_block");
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

// Options Button SCSS styling
// $(function() {  
//     $('.options')
//       .on('mouseenter', function(e) {
//               var parentOffset = $(this).offset(),
//                 relX = e.pageX - parentOffset.left,
//                 relY = e.pageY - parentOffset.top;
//               $(this).find('span').css({top:relY, left:relX})
//       })
//       .on('mouseout', function(e) {
//               var parentOffset = $(this).offset(),
//                 relX = e.pageX - parentOffset.left,
//                 relY = e.pageY - parentOffset.top;
//           $(this).find('span').css({top:relY, left:relX})
//       });
//     $('[href=#]').click(function(){return false});
//   });


// Options
option1.addEventListener("click", () => {
    creature.music();
    updateStats();
});

option2.addEventListener("click", () => {
    creature.read();
    updateStats();
});

option3.addEventListener("click", () => {
    creature.drink();
    updateStats();
});


// console.log(typeof(creature));
// creature.mirror();
// console.log(creature.health, creature.happiness);