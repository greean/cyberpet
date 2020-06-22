const creature = {
    name: "Gizmo",
    typeOfPet: "Mogwai",
    health: 10,
    happiness: 10,
    // functions
    mirror() {
        this.health --;
        this.happiness --;
        // change image to 'bright light'
    },
    read() {
        this.happiness ++;
        // image reading
    },
    music() {
        this.health ++;
        // keyboard image
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
    },
}

console.log(typeof(creature));
creature.mirror();
console.log(creature.health, creature.happiness);