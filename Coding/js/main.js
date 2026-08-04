/*      7 Kyu
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    return str.split('').filter(vowels => "aeiouAEIOU".includes(vowels)).length;
}
/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer. */


function squareDigits(num){
    let arr = num.toString().split('').map((e) => e**2).join('')
    return Number(arr)
  }

/* Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

function repeatStr (n, s) {
    return s.repeat(n)
}


/*

    The jsWay OOP Chapter


*/

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp: 0,
  
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength and ${this.xp} XP points`;
//     }
//   };
  
//   // Aurora is harmed by an arrow
//   aurora.health -= 20;
  
//   // Aurora gains a strength necklace
//   aurora.strength += 10;
  
//   // Aurora learns a new skill
//   aurora.xp += 15;
  
//   console.log(aurora.describe());

  // Creating a Character Class as a part of JSWay OOP --- The JS Way OOP will continue until posted otherwise

  class Character {
    constructor(name, health, strength){
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0 // XP is always zero for new characters
    } 
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damge points`
            )
            target.health -= damage
            if (target.health > 0){
                console.log(`${target.name} has ${target.health} health points left`)
            } else {
                target.health = 0
                const bonusXP = 10
                console.log(
                    `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
                )
                this.xp += bonusXP
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`)
        }
    }
    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
    }
  }

  const aurora = new Character("Aurora", 150, 25)
  const glacius = new Character("Glacius", 130, 30)

  console.log("Welcome to the adventure! Here are our heroes:")
  console.log(aurora.describe())
  console.log(glacius.describe())

  const monster = new Character("Spike", 40, 20)
  console.log("A wild monstser has appeared: it's named " + monster.name)

  monster.attack(aurora)
  monster.attack(glacius)
  aurora.attack(monster)
  glacius.attack(monster)

  console.log(aurora.describe())
  console.log(glacius.describe())

  // Codewars 8 Kyu Named Beginner Series # 1 School Paperwork

  // first attempted was like this
  function paperwork(n, m) {
      return n <= 0 || m < 0 ? 0 : n * m
  }
  
  // 1st submitted was
  
  function paperwork(n, m){
      if( n <= 0 || m < 0){
          return 0
      }else{
          return n * m
      }
  }
  
  // actually submitted 
  
  const paperwork = (n, m) => n <= 0 || m < 0 ?  0 : n * m

  /* 8kyu Opposites Attract
  -----------------------------------------------------------------
    Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

    Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
-----------------------------------------------------------------
  */

// submitted.. no help


function lovefunc(flower1, flower2){
    let totalFlowers = flower1 + flower2
   if(totalFlowers % 2 == 0){
     return false
   }else{
     return true
   }
}

// Did an 8Kyu Named Remove First and Last Character of a string

function removeChar(str){
    return str.slice(1, str.length - 1) // a simpler solution would've been return str.slice(1, -1)
  };
  