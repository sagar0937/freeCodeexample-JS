//Three ways to repeat a string in JavaScript
//repeatStringNumTimes("abc", 3) should return "abcabcabc".

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);
//es-6 way
function repeatStringNumTimes(string, times) {
    if (times > 0)
      return string.repeat(times);
    else
      return "";
  }
  repeatStringNumTimes("abc", 3);

  //Three ways you can find the largest number in an array using JavaScript
//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
function largestOfFour(arr) {
    var largestNumber = [0,0,0,0];
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
     for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
        if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
         }
     }
  }
  return largestNumber;
 }
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

 //reduce
 function largestOfFour(mainArray) {
    return mainArray.map(function (subArray){
      return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, 0);
    });
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//using apply
  function largestOfFour(mainArray) {
    return mainArray.map(function(subArray) {
      return Math.max.apply(null, subArray);
    });
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  //Find the Longest Word
  function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");

  //2. Find the Longest Word With the sort() Method
  function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");

//3. Find the Longest Word With the reduce() Method
  function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");

  //Three Ways to Title Case a Sentence in JavaScript

  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase("I'm a little tea pot");

  //2nd method
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  titleCase("I'm a little tea pot");

  //3rd replace
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  titleCase("I'm a little tea pot");

  //brad t
  //Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
  // ex. addAll(2,5,6,7) === 20
  
  // Solution 1: ES5 arguments & for loop
  function addAll() {
    var args = Array.prototype.slice.call(arguments);
    var total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  // Solution 2: ...rest & reduce/forEach
function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

missingLetters("abce");
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;
debugger;
  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

//chaining functions
const sum1 = a => b => c => a + b + c;
sum1(1)(2)(3);

//2 way
var i = 0;
function sum(n) {
  i+=n; 
  return sum;
  
}
sum(1)(2)(3)(6);

console.log(i);//12