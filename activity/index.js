let trainer= {
    Name: 'Moonlight',
    Age: 18,
    Pokemon: ['Pikachu', 'Jigglypuff', 'Charmander'],
    Friends: {
        Name: 'Lilac',
        Age: 19,
        Pokemon: ['Bulbasaur, Caterpie']
    },
    talk: function(){
        console.log(`Pikachu! I choose you`)
    }
}
trainer.talk();

function pokemon(Name,Level){
    this.Name = Name;
    this.Level = Level;
    this.Health = Level * 16
    this.Attack = Level * 11
    this.tackle = function(targetEnemy) {
        healthPoints = targetEnemy.Health - this.Attack;
        console.log(`${this.Name} used tackle on ${targetEnemy.Name}`);
        console.log(`${targetEnemy.Name} lost ${this.Attack} health points. ${targetEnemy.Name}'s HP reduced to ${healthPoints}`);
        
            if(healthPoints<=0){
                this.faint(targetEnemy);
            }
    }

    this.faint = function(targetEnemy){
        console.log(`${targetEnemy.Name} fainted!`)
    }
}
let Pikachu = new pokemon('Pikachu', 60);
let Jigglypuff = new pokemon('Jigglypuff', 50)
let Butterfree = new pokemon('Butterfree',26)
let Clefairy = new pokemon('Clefairy', 15)

Pikachu.tackle(Butterfree);
Pikachu.tackle(Clefairy);
Jigglypuff.tackle(Pikachu);