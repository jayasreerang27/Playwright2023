/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

const { listenerCount } = require("process");

let string = "Hello World"

const stringarray = string.split(" ");

let lastWord = stringarray[stringarray.length-1]
let lengthlast = lastWord.length

console.log ("Input:"+ string)

console.log("Last word:" + lastWord)

console.log("Length of the last word " + lengthlast)

console.log("Explanation:" + "The last word is \"" + lastWord + "\" with length " + lengthlast)



let wordOne = "listen";
let wordTwo = "silent";

let isAnagram = console.log("Do you think the words given are anagrams :" + anagram(wordOne, wordTwo))

function anagram(word1, word2){


    if (word1.length != word2.length){

        return "False"
    }else {

        word1 = word1.split("").sort().join();
        word2 = word2.split("").sort().join();
        return ( word1 == word2)
}
}


