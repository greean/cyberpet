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



const creature = {
    name: "Gizmo",
    typeOfPet: "Mogwai",
    health: 5,
    happiness: 5
}

const updateStats = (health, happiness) => {
    creature.health = health;
    creature.happiness = happiness;
};

console.log(creature.health, creature.happiness);
updateStats(6,8);
console.log(creature.health, creature.happiness);