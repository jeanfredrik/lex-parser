const grammar = require('./lex.js');
const { Parser } = require('nearley');

function parser() {
  return new Parser(grammar.ParserRules, grammar.ParserStart);
}

function parse(input) {
  const p = parser();
  p.feed(input);
  return p.results;
}

module.exports = parser;
module.exports.parse = parse;
