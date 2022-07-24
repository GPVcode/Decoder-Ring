// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  
      it("Should return false if the shift value isn't present, equal to 0, -25, or greater than 25", () => {
        const actual = caesar("thinkful", 99);
        const expected = false;
        console.log(expected);
        console.log(actual);
        expect(actual).to.eql(expected);
      });
      
      it("should ignore capital letters", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected);
      });
  
    it("when encoding, it should handle shifts that go past the end of the alphabet", () => {
        const actual = caesar("zzz", 2);
        const expected = "bbb";
        console.log(actual);
        console.log(expected);
        expect(actual).to.eql(expected);
    });
  
    it("Should maintain spaces and nonalphabetic symbols in the message before and after encoding", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        console.log(actual);
        console.log(expected);
        expect(actual).to.eql(expected);
    });
  
    it("Should maintain spaces and nonalphabetic symbols in the message before and after decoding", () => {
          const actual = caesar("?$%this is a secret message!", 8);
          const expected = "?$%bpqa qa i amkzmb umaaiom!";
          console.log(actual);
          console.log(expected);
          expect(actual).to.eql(expected);
      });


//     it("should return \"cheud pdjdclqh\" if original input is casesar(\"Zebra Magazine\", 3)", () => {
});