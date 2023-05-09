/*
let favoriteVideoGame = {
    Title: 'Honkai Star Rail',
    Publisher: 'Mihoyo',
    Year: 2023,
    Price: "Free",
    isAvailable: true
}

console.log(favoriteVideoGame)
*/

/*
let instructor = {};

instructor.age = 56;
instructor.gender = "Male";
instructor.department = "Humanities";
instructor.courses = ['Philosophy 101', 'Humanities 101'],
instructor.isActive = true;
instructor.salary = 50000;

console.log(instructor);
*/

/*
function laptop (name, brand, price){
    this.name = name;
    this.brand = brand;
    this.price = price;
}

let laptop1 = new laptop("MacBook Air w/ M2", "Apple", 66485);
let laptop2 = new laptop("Legion Pro 7i", "Lenovo", 199987);

console.log(laptop1);
console.log(laptop2);
*/

/*
function person(name,address,age){
    this.name = name;
    this.address = address;
    this.age = age;
    this.isGreeted = false;
}

let person1 = new person('Ral', 'Imus', 22);
let person2 = new person('Vince','Imus', 22);

console.log(person1);
console.log(person2);
*/

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