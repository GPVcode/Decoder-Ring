// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
    if(typeof shift === 'undefined' || shift === 0 || shift < -25 || shift > 25) { 
      return false;
    }
    
    if(encode === false) shift = -1*shift;
    let output = ""; 
    let lowerCaseInput = input.toLowerCase();
    for(let i = 0; i < input.length; i++){ 
      if(alphabet.includes(lowerCaseInput[i])){          
        let index = (alphabet.indexOf(lowerCaseInput[i]) + shift+26) % 26; 
        output += alphabet[index];
      }
      else{
        output+=lowerCaseInput[i];
      }
    }
    return output;
  }
    return {
    caesar,
  }
})();

module.exports = { caesar: caesarModule.caesar };









// Attempt 1:
// const caesarModule = (function () {
//   // you can add any code you want within this function scope
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let newAlpha = "";
  
//   function caesar(input, shift, encode = true) {
//     // if shift is 0, less than -25, or greater than 25 -- function ends here if true
//     if(typeof shift === 'undefined' || shift === 0 || shift < -25 || shift > 25){ return false};
  
    
//     let result = "";
//     if(encode === true){
//       let userInput = input.toLowerCase();
//       for(let i = 0; i < input.length; i++){
//         let index = alphabet.indexOf(input[i]);
//         result += newAlpha[index];
//       };
//     };
//     if(encode === false){
//       let userInput = input.toLowerCase();
//       for(let i = 0; i < input.length; i++){
//         let index = newAlpha.indexOf(input[i]);
//         result += alphabet[index];
//       }
//     }
//     return result;
//     //if(!shift || shift === 0 || shift < -25 || shift > 25) return false
//   }

//   return {
//     caesar,
//   };
// })();

// module.exports = { caesar: caesarModule.caesar };


// Attempt 2:
  //   // result will eventually store our shifter letter, but for now we initialize it as an empty string
  //   let result = "".toLowerCase();

  //   // check if encode is true
  //   if(encode === true){
  //     // inputCode stores the character code for our current letter
  //     let inputCode = input.charCodeAt(0); // calling charCodeAt on input returns character code
  //     // add shift number to our input code that containcs character code and store inside newInputCode
  //     let newInputCode = inputCode + shift;
  //     // if newInputCode is less than 97, add 26
  //     if(newInputCode < 97) {
  //       newInputCode += 26;
  //     } else if (newInputCode > 122) {
  //       newInputCode -= 26;
  //     }
  //   };

  //   if(encode === false){
  //     // store character codes for our current letter in inputCode
  //     let inputCode = input.charCodeAt(0);
  //     // get inputCode and add shift number, then store into variable newInputCode. This will contain character code of initial input + shift
  //     let newInputCode = inputCode + shift;
      
  //     // if newInput containing new character code numbers is less than 97, add 26
  //     if(newInputCode < 97) {
  //       newInputCode += 26;
  //     // else if newInput containing new character code numbers is greater than 122, subtract 26.
  //     } else if (newInputCode > 122) {
  //       newInputCode -= 26;
  //     }

  
  //   };
  // result = String.fromCharCode(newInputCode);
  // return result;
  