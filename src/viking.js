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
    // receiveDamage(damage) {
    //     this.health = this.health - damage;
    //     if (this.health > 0) {
    //         return `${this.name} has received ${damage} points of damage`
    //     }
    //     if (!this.health) {
    //         return `${this.name} has died in act of combat`
    //     }

     receiveDamage(damage) {
        return genericReceiveDamage(this.health, damage, this.name);
        
     }


    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {
//    receiveDamage(damage) {
//     this.health = this.health - damage;
//     if (this.health > 0) {
//         return `A Saxon has received ${damage} points of damage`
//     }
//     if (!this.health) {
//         return `A Saxon has died in combat`
//     }
//    }
    receiveDamage(damage) {
        return genericReceiveDamage(this.health, damage, "A Saxon");
    }
}

function genericReceiveDamage(health,damage,prefix) {
    health -= damage;
    if(health > 0) {
        return `${prefix} has received ${damage} points of damage`}
    else return `${prefix} has died in act of combat`;
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

    genericAttack(attackersArray, defendersArray) {
        let randomAttackerIndex = Math.floor(Math.random() * attackersArray.length);
        let randomAttacker = attackersArray[randomAttackerIndex];
        let randomDefendersIndex = Math.floor(Math.random() * defendersArray.length);
        let randomDefender = defendersArray[randomDefendersIndex];
        let result = randomDefender.receiveDamage(randomAttacker.strength);
        

        if (randomDefender.health <= 0) {
            defendersArray.splice(randomDefendersIndex,1);
        }

        return result;
    }

    vikingAttack(){
        return this.genericAttack(this.vikingArmy,this.saxonArmy)
    }

    saxonAttack() {
        return this.genericAttack(this.saxonArmy,this.vikingArmy);
    }

    showStatus() {
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if(!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
       }
    
}




