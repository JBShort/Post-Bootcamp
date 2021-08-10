class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength)
    }

    drinkSake() {
        this.health += 10;
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake()
        console.log("When I wrote this code, only God and I understood what I did. Now only God knows.")
    }
}



// const ninja1 = new Ninja("Hyabusa");
// ninja1.drinkSake();
// ninja1.sayName();
// ninja1.showStats();

const sensei1 = new Sensei("Master Splinter")
console.log(sensei1.wisdom)
sensei1.speakWisdom();
sensei1.showStats();

