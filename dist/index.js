var grammar = require("./lex.js");
var { Parser } = require("nearley");

export function parser() {
  return new Parser(grammar.ParserRules, grammar.ParserStart);
}

export default parser;

export function parse(input) {
  const p = parser();
  p.feed(input);
  return p.results;
}
