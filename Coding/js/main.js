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


// Did an 8 Kyu Named Square(n)Sum

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

*/


// first try submit :)

function squareSum(numbers){
    return numbers.reduce((acc, c) => (c*c) + acc , 0)
}

// Did an 8 Kyu Named Find the smallest integer in the array

// My first though was to use reduce, then I started thinking of map and Math.min to just return the smallest integer

//first attempt and submitted

function findSmallestInt(arr) {
    return arr.reduce((min, cur) => cur < min ? cur : min);
}

// Completed an 8Kyu named Function 1 hello world

let greet = ()  => 'hello world'

// Did an 8 Kyu Named Covert a String to a Number!

// first attempt and submitted I saw this as one of the solutions on Code Wars

/*const stringToNumber = function(str){
    let num = +str
    return num;
} */

// refactored to simple

const stringToNumber = (str) => +str

// Learned a new way to consider numbers in an 8 Kyu Named Grasshopper - Summation
// no excuse as to why I didn't complete it but this is the answer I saw

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
}

// What I learned was that a for loop (which was what I thought first to try) would've served me better than trying to solve it in one line, I overthought a possible correct answer

//an 8Kyu named Counting sheep

function countSheeps(sheep) {
    return sheep.filter(baa => baa === true).length
    
}
    
// count all of the true elements, do not add any of the null or undefined elements in the array.
/* At first I tried to do a for loop, Though I realized that filter could do the job. I learned when applying a stricter usage with filter to check for elements with true. That ensures that it will only count true elements. Also I almost forgot the .length at the end */


// Completed an 8Kyu Named Remove string Spaces

// on my first attempt I just did x.trim('') and it was wrong because it only removed the space in the beginning and the end of a string

// then I remembered something older like when reversing a string and did x.split(' ').join('')

function noSpace(x){
    return x.split(' ').join('')
}

// I learned when in doubt to go to a solution I know can work first and remember other times I have done something similar

// Completed an 8 Kyu Named You Can't Code Under Pressure # 1
// first solution I misread the task and tried to square it and not double it, which resulted in 
// const = doubleInteger = i => {i *= i; return i} failed

// second solution was the correct one

function doubleInteger(i){
    i *= 2
    return i;
}

// refactored answer to const doubleInteger = i => { i *= 2; return i}

// What I learned is to read the problem slower and even if it is messy, get it to work first then refactor
// as of now I am thinking of pivoting to arrays 8 Kyu then move to 7 Kyu

// did a 7Kyu with lots of effort that was called Disemvowel Trolls
// my first solution was sloppy and I couldn't get it to work, I found out that I didn't mark the vowels as string types lol
// my final solution after taking some time to think about it, this is what I came up with

function disemvowel(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return str.split('').filter(v => !vowel.includes(v)).join('')
    ;
  }

// What I learned is that I'm not super familiar with how .includes or .filter works and need to study up on them as I am opposed to regex at this moment

// I attempted a 7Kyu and didn't move on fast enough, then I did an 8Kyu similar to the 7Kyu, It was named Covert number to reversed array of digits

// I started on the right track, I think I'm just out of practice, I was wiping the floor with 8Kyus and now I started to struggle with something relatively simple.. anyway my solution isn't the shortest but it worked

function digitize(n) {
    const num = String(n)
    return n.split('').reverse().map(Number)
  }

  // What I did learn from the failed 7Kyu is the spread operator which I had no clue about and fell into a trap of converting lol, I've added it to my study material. I won't get got again.