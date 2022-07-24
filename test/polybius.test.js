// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => { 
  
  it("should translate letters 'i' 'j' to 42", () =>{
    const actual = polybius("ij");
    const expected = "4242";
    expect(actual).to.eql(expected);
  });
  
  it("should decode 42 to i/j", () => {
    const actual = polybius("42", false);
    const expected = "(i/j)";
    console.log(actual);
    expect(actual).to.eql(expected);
  });
  
  it("should ignore capital letters", () => {
    const actual1 = polybius("HELLO WORLD");
    console.log(actual1) //had to retrieve encryption of HELLO WORLD
    const expected1 = "3251131343 2543241341";
    const actual2 = polybius("hello world");
    console.log(actual2);
    const expected2 = "3251131343 2543241341";
    expect(actual1).to.eql(actual2);    
  })
  
  it("should maintain spaces in the message before and after decoding", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world"
    expect(actual).to.eql(expected);
  });
  
    it("should maintain spaces in the message before and after encoding", () => {
    const actual = polybius("hello world");
    const expected = "3251131343 2543241341"
    expect(actual).to.eql(expected);
  });
  
  it("should return false if character count is odd", () => {
    const actual = polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.eql(expected);
  });
});