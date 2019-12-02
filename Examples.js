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

//to check end of string wothout using 'endsWith' function
function endOfString(str, target) {
  return (str.substr(-target.length) === target)
}
endOfString("bostian", 'n');

//trucate string
function trucate(str, len) {
  var s = "";
  if (str.length > len) {
      s = str.substr(0, len) + '...';
      return s;
  }
  else { return str; }
}
trucate("hello good morning ! guys", 10);

//chunks array
function chunks(ar, size) {
  var empty = [];
  while (ar.length > 0) {
      empty.push(ar.splice(0, size));
  }
  return empty;
}
chunks([1, 2, 3, 4, 5], 2);

//mutation
function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (var m of second) {
      if (first.indexOf(m) === -1) {
          return false;
      }
  }
  return true;
}
mutation(['hello', 'hey']);//false

//remove falsy values
function fasly(arr) {
  var empty = [];
  for (var a of arr) {
      if (a) {
          empty.push(a);
      }
  }

  return empty;
}
fasly([4, 'aa', "", false, 9, 0]);

//seek n destroy
function des(arr, ...a) {
  var empty = [];
  arr.filter(function (item) {
      console.log(typeof item)
      if ([...a].indexOf(item) === -1) {
          empty.push(item);
      }
  }
  )
  return empty;
}
des([1, 2, 3, 3, 2, 1], 2, 3);

//insert the given array n get its index

function getIndex(arr, insertArr) {
  var newArr = arr.sort(function (a, b) {
      return a - b;
  })
  var newA = newArr.concat(insertArr);
  newA = newA.sort(function (a, b) {
      return a - b;
  })
  console.log(newA)
}
getIndex([30, 19, 2], 50)

//cipher text
function cipher13(str) {
  var emptyStr = '';
  for (var a of str) {
      var asciVal = a.charCodeAt();
      if (asciVal >= 65 && asciVal <= 77) {
          emptyStr += String.fromCharCode(asciVal + 13);
      }
      if (asciVal >= 78 && asciVal <= 90) {
          emptyStr += String.fromCharCode(asciVal - 13);
      }
  }
  return emptyStr;
}
cipher13('AZX')
"NMK"
//sumAll in given range
function sumAll(arr) {
  var a = Math.min(arr[0], arr[1]);
  var b = Math.max(arr[0], arr[1]);

  var sum = 0;
  console.log({ a, b });
  for (i = a; i <= b; i++) {

      sum = sum + i;

  }
  return sum;
}
sumAll([3, 1]);

//diff of two array
function diffArr(arr1, arr2) {
  var combo = arr1.concat(arr2);
  var empty = [];
  combo.filter(function (item, index) {
      if (arr2.indexOf(item) === -1 || arr1.indexOf(item) === -1) {
          empty.push(item);
      }
  });
  return empty;
}
diffArr([1, 2, 3, 4, 5], [1, 2, 3, 5, 6]);//[4,6]
function flatArray(a) {
  var output = [];
  a.forEach(item => {
      if (Array.isArray(item) {
          flatArray(item)
      } else {
          output.push(item);
      }
  })
}
//flatten array reduce
const flatten = arr => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
  );
console.log( flatten([1, [2,3], [4,[5],[6,[7,8,9],10],11],[12],13]) );

//check if array,null,object,fucntionsa
if( Object.prototype.toString.call( arrayList ) === '[object Array]' ) {
    console.log('Array!');
}

//deep copy
//Using JSON.parse(JSON.stringify(object));
let obj = { 
    a: 1,
    b: { 
      c: 2,
    },
  }
  let newObj = JSON.parse(JSON.stringify(obj));
  obj.b.c = 20;
  console.log(obj); // { a: 1, b: { c: 20 } }
  console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)

  //deep copy
  function deepClone(object){
	var newObject = {};
	for(var key in object){
		if(typeof object[key] === 'object'  && object[key] !== null ){
		 newObject[key] = deepClone(object[key]);
		}else{
		 newObject[key] = object[key];
		}
	}
	return newObject;
}

//interview questions
//https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z
//https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
