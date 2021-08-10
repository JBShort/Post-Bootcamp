class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if(target instanceof Unit) {
            target.resilience -= this.power;
            console.log(this.name + " attacked " + target.name + " and did " + this.power + " points of damage")
        } else {
            throw new Error("Target must be a unit!")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }

    play(target) {
        if(target instanceof Unit) {
            // implement card text here
            if (this.stat == "resilience") {
                target.resilience += this.magnitude;
                console.log(this.name + " has been played, " + target.name + " gained or lost " + this.magnitude + " in " + this.stat)
            }
            if (this.stat == "power") {
                target.power += this.magnitude;
                console.log(this.name + " has been played, " + target.name + " gained or lost " + this.magnitude + " in " + this.stat)
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redNin = new Unit("Red Belt Ninja", 3, 3, 4)
const blackNin = new Unit("Black Belt Ninja", 4, 5, 4)
const hardAlgo = new Effect("Hard Algorithm", 2, "increase targets resilience by 3", "resilience", 3 )
const unhandlePromReject = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", (-2))
const pairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

hardAlgo.play(redNin);

unhandlePromReject.play(redNin);

pairProg.play(redNin);


redNin.attack(blackNin);

