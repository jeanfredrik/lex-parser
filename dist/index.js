'use strict';

var grammar = require('./lex.js');

var _require = require('nearley'),
    Parser = _require.Parser;

function parser() {
  return new Parser(grammar.ParserRules, grammar.ParserStart);
}

function parse(input) {
  var p = parser();
  p.feed(input);
  return p.results;
}

module.exports = parser;
module.exports.parse = parse;