// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function substitution(input, alphabet, encode = true) {
    
    //let's get false output out of the way early. if false, we don't need to run the rest of the code.
    //alphabet must be exactly 26 characters, otherwise return false.
    if(typeof alphabet === 'undefined') return false;
    if(alphabet.length < 26 || alphabet.length > 26) return false;
    //return false if alphabet characters are not unique
    //first we convert our alphabet into an array
    let sortedAlphabet = alphabet.split('');
    //then we sort our array
    sortedAlphabet.sort();
      //loop through our array
      for(let i = 0; i < sortedAlphabet.length - 1; i ++){ // we don't need to go to last array
        //if adjacent elements are equal, return false
        if (sortedAlphabet[i] === sortedAlphabet[i + 1]) return false;
    }
   
    let encryptedMessage = "";
    let decryptedMessage = "";
    //capital letters can be ignored
    let myInput = input.toLowerCase();
    
    //spaces should be maintained throughout
    //encrypt if encode is true
    if(encode === true){

      for(let i = 0; i < input.length; i++){
        if(myInput[i] === " "){
          encryptedMessage += " ";
        } else{
          //find the index of the letter in the original alphabet
          let index = originalAlphabet.indexOf(myInput[i]);
          // after finding the index, get the value in the same index number in alphabet input
          encryptedMessage += alphabet[index];
        }
      }
      return encryptedMessage;
    } 
    
    else {
      for(let i = 0; i < input.length; i++){
        if(myInput[i] === " "){
          decryptedMessage += " ";
        } else {
          let decodeIndex = alphabet.indexOf(myInput[i]);
          decryptedMessage += originalAlphabet[decodeIndex];
        }
      }
      return decryptedMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


//     if(encode === false){
//       for(let i = 0; i < input.length; i++){
//         if(myInput[i] === " ") {
//            decryptedMessage += " "}
//       }
//         else{
//           let index = alphabet.indexOf(myInput[i]);
//           decryptedMessage += originalAlphabet[index]
//         }
//     }