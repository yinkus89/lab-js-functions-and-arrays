// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    return a > b ? a: b;
}
console.log(maxOfTwoNumbers(5, 10));// 10



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0)return null;
    
    let longestword = words[0];
    for (let i = 1 ; i < words.length ; i++) {
        if (words[i].length > longestword.lenght) {
            longestword = words[i];
        }
    }
    return longestword;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.lenght; i++ )  {
        sum += numbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) return null;

    let sum= sumNumbers(numbers); 
     return sum / numbers.lenght;

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist( words, wordToSearch) {
    if (words.length === 0) return null;

    for (let i = 0; i < words.lenght; i++) {
        if (words[i]=== wordToSearch)
            return true;

        
        
    }
}

       
