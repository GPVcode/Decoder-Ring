// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const cipher = 
  {
    a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i:42, j:42, k:52, l:13, m:23, n:33, o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55,
  };
  const decipher =
  {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  };
  
  
  function polybius(input, encode = true) {
    //lowerCase the input to ignore capital letters
    const myInput = input.toLowerCase();
    let encodedMessage = "";
    let decodedMessage = "";
    
    if (encode === true){
      //loop through our input characters
      for(let i = 0; i < input.length; i++){
        // if character is a space, add the space to our encodedMessage variable
        if(myInput[i] === " "){
          encodedMessage += " ";
        }// bracket for if input[i] = " "
        else {
          encodedMessage += cipher[myInput[i]]; // if input[i] is not a space, find the character in our cipher and add the number value into our encodeMessage variable.
        } //bracket for inner else statement
      } //bracket for first for loop
    return encodedMessage;
    } //bracket for if(encode=true)
    

   
    
   if(encode === false) { // if we have to decode our message
     let count = 0; // we need to count to see if length is even.
     for(let i = 0; i< input.length; i++) { // loop through the input requiring decoding
       // add to count if myInput[i] is not a space
       if(input[i] !== " ") count ++ }
     if(count %2 !== 0) return false; //divide our count, if modulo is not 0, return false because the length is odd. We want even.
     
     // if you get here, we found that the input length is not odd. Time to decode the input string
     for(let i = 0; i < input.length;){
       if(myInput[i] === " ") { //if character is a space, add the space to decodedMessage variable.
         decodedMessage += " "; i++;
       } else { //use parse to retun an integer
         let pair = parseInt(input[i] + input[i+1]); //Use parse to convert strings into integers. Find the pair of integers
         decodedMessage += decipher[pair]; i+=2; //grab the index value of our pair inside of decipher and increment by 2 (why increment by two?)
       } //bracket for else statement
     }//bracket for decoded for loops
     return decodedMessage;
     
   } //bracket for if false statement
 } //bracket for polybius function

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };



// // Please refrain from tampering with the setup code provided here,
// // as the index.html and test files rely on this setup to work properly.
// // Only add code (helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6

// const polybiusModule = (function () {
//   // you can add any code you want within this function scope

//   const cipher = 
//   {
//     a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i:42, j:42, k:52, l:43, m:23, n:33, o:43, p:52, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55,
//   };
//   const decipher =
//   {
//     11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
//   };
//   function polybius(input, encode = true) {
//     //lowerCase the input to ignore capital letters
//     const myInput = input.toLowerCase();
//     let encodedMessage = "";
//     if (encode === true){
//       //loop through our input characters
//       for(let i = 0; i < input.length; i++){
//         // if character is a space, add the space to our encodedMessage variable
//         if(myInput[i] === " "){
//           encodedMessage += " ";
//         }// bracket for if input[i] = " "
//         else {
//           encodedMessage += cipher[myInput[i]]; // if input[i] is not a space, find the character in our sipher and add the number value into our encodeMessage variable.
//         } //bracket for inner else statement
//       } //bracket for first for loop
//     return encodedMessage;
//     } //bracket for if(encode=true)
//     else { // else, we have a decoded message
//       let decodedMessage = "";
//       let doubleSpaced = "";
//       for(let i = 0; i< input.length; i++){ // loop through the input requiring decoding
//         if(myInput[i] !== " "){ // if input[i] is not a space, add the input to doubleSpaced Variable
//           doubleSpaced += myInput[i];
//         } //bracket for input[i] !== " "
//         else {
//           doubleSpaced += "  ";
//         } //bracket for else
//       }//bracket for decoded for loops
//       if(doubleSpaced.length % 2 != 0){
//         return false;
//       }//bracket for checking odd number length
//       for(let i = 0; i < doubleSpaced.length; i+=2){
//         if(doubleSpaced[i] !== " "){
//           let code = "";
//           code += doubleSpaced[i];
//           code += doubleSpaced[i+1];
//           decodedMessage += decipher[code];
//         } //bracket for if doubleSpace[i] statement
//         else{
//           decodedMessage += " ";
//         } //bracket for else statement
//       }//bracket for looping through doubleSpaced variable
//     } //bracket for outer else statement
//   } //bracket for polybius function

//   return {
//     polybius,
//   };
// })();

// module.exports = { polybius: polybiusModule.polybius };

