// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
       this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);

       this.name = name; 
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        if (!this.health) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
   receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    }
    if (!this.health) {
        return `A Saxon has died in combat`
    }
   }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        // const war = new War();
        // war.addViking({20,60})
        // const saxonSoldier = new Saxon()
        let newSaxon = Math.floor(Math.random() * this.saxonArmy.length); 
        let newViking = Math.floor(Math.random() * this.vikingArmy.length);
        let damage = this.vikingArmy[newViking].strength;

        let result = this.saxonArmy[newSaxon].receiveDamage(damage)
        return result

       }

    saxonAttack() {
        let newSaxon = Math.floor(Math.random() * this.saxonArmy.length); 
        let newViking = Math.floor(Math.random() * this.vikingArmy.length);
        let damage = this.saxonArmy[newSaxon].strength;

        let result = this.vikingArmy[newViking].receiveDamage(damage)
        return result 
    
       }

    showStatus(){
        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!";
        }
        else if(!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
       }
    
}




