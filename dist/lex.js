// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main$ebnf$1", "symbols": ["Newlines"], "postprocess": id},
    {"name": "Main$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Main$ebnf$2", "symbols": []},
    {"name": "Main$ebnf$2$subexpression$1", "symbols": ["Newlines", "Statement"]},
    {"name": "Main$ebnf$2", "symbols": ["Main$ebnf$2", "Main$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Main$ebnf$3", "symbols": ["Newlines"], "postprocess": id},
    {"name": "Main$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Main", "symbols": ["Main$ebnf$1", "Statement", "Main$ebnf$2", "Main$ebnf$3"], "postprocess": 
        ([, first, rest]) => ({
          type: 'Main',
          statements: [first, ...rest.map(el => el[1])],
        })
          },
    {"name": "Statement", "symbols": ["Definition"], "postprocess": id},
    {"name": "Statement", "symbols": ["Pattern"], "postprocess": id},
    {"name": "Definition", "symbols": ["Identifier", "_", {"literal":"="}, "DefList"], "postprocess": 
        ([identifier, , , items]) => ({
          type: 'Definition',
          identifier,
          items,
        })
          },
    {"name": "DefListSep", "symbols": [{"literal":","}], "postprocess": d => null},
    {"name": "DefList$ebnf$1", "symbols": []},
    {"name": "DefList$ebnf$1$subexpression$1", "symbols": ["DefListSep", "DefListItem"]},
    {"name": "DefList$ebnf$1", "symbols": ["DefList$ebnf$1", "DefList$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "DefList", "symbols": ["DefListItem", "DefList$ebnf$1"], "postprocess": 
        ([first, rest]) => [first, ...rest.map(el => el[1])]
          },
    {"name": "DefListItem$subexpression$1", "symbols": ["_", "Grapheme", "_"]},
    {"name": "DefListItem", "symbols": ["DefListItem$subexpression$1"], "postprocess": d => d[0][1]},
    {"name": "DefListItem", "symbols": ["_"], "postprocess": d => ''},
    {"name": "Pattern", "symbols": ["Grapheme"], "postprocess": 
        d => ({
          type: 'Pattern',
          pattern: d[0],
        })
          },
    {"name": "Identifier$subexpression$1", "symbols": ["Alpha"]},
    {"name": "Identifier$subexpression$1", "symbols": ["Unicode"]},
    {"name": "Identifier$ebnf$1", "symbols": []},
    {"name": "Identifier$ebnf$1$subexpression$1", "symbols": ["Alpha"]},
    {"name": "Identifier$ebnf$1$subexpression$1", "symbols": ["Unicode"]},
    {"name": "Identifier$ebnf$1$subexpression$1", "symbols": ["Digit"]},
    {"name": "Identifier$ebnf$1", "symbols": ["Identifier$ebnf$1", "Identifier$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Identifier", "symbols": ["Identifier$subexpression$1", "Identifier$ebnf$1"], "postprocess": 
        ([first, rest]) => `${first}${rest.map(id).join('')}`
          },
    {"name": "Grapheme$ebnf$1$subexpression$1", "symbols": ["Alpha"]},
    {"name": "Grapheme$ebnf$1$subexpression$1", "symbols": ["Unicode"]},
    {"name": "Grapheme$ebnf$1$subexpression$1", "symbols": ["Digit"]},
    {"name": "Grapheme$ebnf$1", "symbols": ["Grapheme$ebnf$1$subexpression$1"]},
    {"name": "Grapheme$ebnf$1$subexpression$2", "symbols": ["Alpha"]},
    {"name": "Grapheme$ebnf$1$subexpression$2", "symbols": ["Unicode"]},
    {"name": "Grapheme$ebnf$1$subexpression$2", "symbols": ["Digit"]},
    {"name": "Grapheme$ebnf$1", "symbols": ["Grapheme$ebnf$1", "Grapheme$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Grapheme", "symbols": ["Grapheme$ebnf$1"], "postprocess": 
        d => d[0].join('')
          },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": d => null},
    {"name": "Newlines$ebnf$1", "symbols": [/[\n\r]/]},
    {"name": "Newlines$ebnf$1", "symbols": ["Newlines$ebnf$1", /[\n\r]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Newlines", "symbols": ["Newlines$ebnf$1"], "postprocess": d => null},
    {"name": "Alpha", "symbols": [/[A-Za-z]/], "postprocess": id},
    {"name": "Unicode", "symbols": [/[^\x00-\xA0]/], "postprocess": id},
    {"name": "Digit", "symbols": [/[0-9]/], "postprocess": id}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
