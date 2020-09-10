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
console.log(finalActions);