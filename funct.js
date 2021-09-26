//Do the below programs in anonymous function & IIFE

//Print odd numbers in an array

 (function() {
  const arr = [1,2,3,4,5,6,7,8] ;
  const ans = arr.filter(num => num % 2);
  return ans;
 })();
 
//Convert all the strings to title caps in a string array

 (function() {
  const txt = ["arul"] ;
  console.log(String(txt).toUpperCase());
})();

//Sum of all numbers in an array

(function() {
  const nums = [1,2,3,4];
  console.log(nums.reduce((a,b)=>a+b, 0));
})();

//Return all the prime numbers in an array

(function() {
  const arr = [1,2,3,4,5,6,7,8] ;
  const ans = arr.filter(num => num % 2 === 0);
  return ans;
 })();

//Return all the palindromes in an array

(function () {
    var words = ["noon","kids","malayalam","yay"];
    function checkPalindrom(str) { 
    return str == str.split('').reverse().join('');
}
 const result = words.filter(word => checkPalindrom(word));
 console.log(result);
}());



//Return median of two sorted arrays of same size
//Remove duplicates from an array
//Rotate an array by k times

/*Do the below programs in arrow functions*/

//Print odd numbers in an array
//Convert all the strings to title caps in a string array
//Sum of all numbers in an array
//Return all the prime numbers in an array
//Return all the palindromes in an array
