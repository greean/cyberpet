// GENERATE 3 RANDOM ACTIONS FROM THE LIST

// // list of all actions
// const allActions = ['mirror', 'read', 'music', 'sleep', 'eat', 'drink'];

// // create new list from above and randomly remove items until only 3 options left
// let finalActions = allActions;

// const removeActions = () => {
//     while (finalActions.length > 3){
//         let randNum = Math.floor((Math.random() * finalActions.length));
//         finalActions.splice(randNum, 1);
//     }
// };

// removeActions();
// console.log(finalActions);

// ******************************************************


// UPDATING CREATURES STATS

// const creature = {
//     name: "Gizmo",
//     typeOfPet: "Mogwai",
//     health: 5,
//     happiness: 5
// }

// const updateStats = (health, happiness) => {
//     creature.health = health;
//     creature.happiness = happiness;
// };

// console.log(creature.health, creature.happiness);
// updateStats(6,8);
// console.log(creature.health, creature.happiness);


// ******************************************************

// SHUFFLE THE LIST OF ACTIONS SO OPTIONS WILL APPEAR MORE RANDOM

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  let allActions = ['mirror', 'read', 'music', 'sleep', 'eat', 'drink'];
  shuffle(allActions);
  console.log(allActions);