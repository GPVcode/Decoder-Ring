// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  
  it("should encrypt our input if encode is true", () => {
    const expected = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
    const actual = "jrufscpw";
    expect(actual).to.eql(expected);
  });
  
  it("should decrypt our iput if encode is false", () => {
    const expected = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
    const actual = "thinkful";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if alphabet is not 26 characters long", () => {
    const expected = substitution("thinkful", "short");
    const actual = false;
    expect(actual).to.eql(expected);
  });
  
  it("should return false if alphabet has repeating values", () => {
    const expected = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const actual = false;
    expect(actual).to.eql(expected);
  });
  
  it("should decode to 'message' even if unique characters are inputted", () => {
    const expected = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const actual = "message";
    expect(actual).to.eql(expected);
  });
  
  it("should encode even if unique characters are inside alphabet", () => {
    const expected = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const actual = "y&ii$r&";
    expect(actual).to.eql(expected);
  })
});