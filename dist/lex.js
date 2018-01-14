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
    {"name": "Statement", "symbols": ["PatternWithWeight"], "postprocess": id},
    {"name": "Statement", "symbols": ["Comment"], "postprocess": id},
    {"name": "Comment$ebnf$1", "symbols": []},
    {"name": "Comment$ebnf$1", "symbols": ["Comment$ebnf$1", /[^\n\r]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Comment", "symbols": [{"literal":"#"}, "Comment$ebnf$1"], "postprocess": 
        ([, comment]) => ({
          type: 'Comment',
          comment: comment.join(''),
        })
          },
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
    {"name": "PatternWithWeight", "symbols": ["Pattern"], "postprocess": 
        ([pattern]) => Object.assign({weight: 1}, pattern)
          },
    {"name": "PatternWithWeight", "symbols": ["Pattern", "_", "PatternWeight"], "postprocess": 
        ([pattern, , weight]) => Object.assign({}, pattern, {
          weight,
        })
          },
    {"name": "PatternFragment", "symbols": ["Grapheme"], "postprocess": 
        ([grapheme]) => ({
          type: 'PatternFragment',
          grapheme,
        })
          },
    {"name": "Pattern$ebnf$1", "symbols": []},
    {"name": "Pattern$ebnf$1$subexpression$1$ebnf$1", "symbols": ["SubPattern"]},
    {"name": "Pattern$ebnf$1$subexpression$1$ebnf$1", "symbols": ["Pattern$ebnf$1$subexpression$1$ebnf$1", "SubPattern"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Pattern$ebnf$1$subexpression$1$ebnf$2", "symbols": ["PatternFragment"], "postprocess": id},
    {"name": "Pattern$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Pattern$ebnf$1$subexpression$1", "symbols": ["Pattern$ebnf$1$subexpression$1$ebnf$1", "Pattern$ebnf$1$subexpression$1$ebnf$2"]},
    {"name": "Pattern$ebnf$1", "symbols": ["Pattern$ebnf$1", "Pattern$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Pattern", "symbols": ["PatternFragment", "Pattern$ebnf$1"], "postprocess": 
        ([fragment, rest]) => ({
          type: 'Pattern',
          parts: [
            fragment,
            ...rest.map(([subPatterns, fragment]) => [
              ...subPatterns,
              ...(fragment == null ? [] : [fragment])
            ]).reduce((a, b) => a.concat(b), [])
          ]
        })
          },
    {"name": "Pattern$ebnf$2$subexpression$1$ebnf$1", "symbols": ["SubPattern"]},
    {"name": "Pattern$ebnf$2$subexpression$1$ebnf$1", "symbols": ["Pattern$ebnf$2$subexpression$1$ebnf$1", "SubPattern"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Pattern$ebnf$2$subexpression$1$ebnf$2", "symbols": ["PatternFragment"], "postprocess": id},
    {"name": "Pattern$ebnf$2$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Pattern$ebnf$2$subexpression$1", "symbols": ["Pattern$ebnf$2$subexpression$1$ebnf$1", "Pattern$ebnf$2$subexpression$1$ebnf$2"]},
    {"name": "Pattern$ebnf$2", "symbols": ["Pattern$ebnf$2$subexpression$1"]},
    {"name": "Pattern$ebnf$2$subexpression$2$ebnf$1", "symbols": ["SubPattern"]},
    {"name": "Pattern$ebnf$2$subexpression$2$ebnf$1", "symbols": ["Pattern$ebnf$2$subexpression$2$ebnf$1", "SubPattern"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Pattern$ebnf$2$subexpression$2$ebnf$2", "symbols": ["PatternFragment"], "postprocess": id},
    {"name": "Pattern$ebnf$2$subexpression$2$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Pattern$ebnf$2$subexpression$2", "symbols": ["Pattern$ebnf$2$subexpression$2$ebnf$1", "Pattern$ebnf$2$subexpression$2$ebnf$2"]},
    {"name": "Pattern$ebnf$2", "symbols": ["Pattern$ebnf$2", "Pattern$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Pattern", "symbols": ["Pattern$ebnf$2"], "postprocess": 
        ([rest]) => ({
          type: 'Pattern',
          parts: rest.map(([subPatterns, fragment]) => [
            ...subPatterns,
            ...(fragment == null ? [] : [fragment])
          ]).reduce((a, b) => a.concat(b), [])
        })
          },
    {"name": "SubPattern", "symbols": [{"literal":"("}, "Pattern", {"literal":")"}], "postprocess": 
        ([, pattern, ]) => Object.assign({weight: .5}, pattern)
          },
    {"name": "SubPattern", "symbols": [{"literal":"("}, "Pattern", "_", "PatternWeight", {"literal":")"}], "postprocess": 
        ([, pattern, , weight, ]) => Object.assign({}, pattern, {
          weight,
        })
          },
    {"name": "PatternWeight", "symbols": [{"literal":"*"}, "_", "Float"], "postprocess": 
        ([, , value]) => value
          },
    {"name": "PatternWeight", "symbols": [{"literal":"/"}, "_", "Float"], "postprocess": 
        ([, , value]) => 1 / value
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
    {"name": "Space$ebnf$1", "symbols": [{"literal":" "}]},
    {"name": "Space$ebnf$1", "symbols": ["Space$ebnf$1", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Space", "symbols": ["Space$ebnf$1"], "postprocess": d => null},
    {"name": "Newlines$ebnf$1", "symbols": [/[\n\r]/]},
    {"name": "Newlines$ebnf$1", "symbols": ["Newlines$ebnf$1", /[\n\r]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Newlines", "symbols": ["Newlines$ebnf$1"], "postprocess": d => null},
    {"name": "Alpha", "symbols": [/[A-Za-z]/], "postprocess": id},
    {"name": "Unicode", "symbols": [/[^\x00-\xA0]/], "postprocess": id},
    {"name": "Digit", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "Integer", "symbols": [{"literal":"0"}], "postprocess": () => 0},
    {"name": "Integer$ebnf$1", "symbols": []},
    {"name": "Integer$ebnf$1", "symbols": ["Integer$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Integer", "symbols": [/[1-9]/, "Integer$ebnf$1"], "postprocess": ([first, rest]) => Number([first, ...rest].join(''))},
    {"name": "Float", "symbols": ["Integer"], "postprocess": id},
    {"name": "Float$ebnf$1", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "Float$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Float$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "Float$ebnf$2", "symbols": ["Float$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Float", "symbols": ["Float$ebnf$1", {"literal":"."}, "Float$ebnf$2"], "postprocess": 
        ([, , fractions]) => Number('.' + fractions.join(''))
          },
    {"name": "Float$ebnf$3", "symbols": []},
    {"name": "Float$ebnf$3", "symbols": ["Float$ebnf$3", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Float$ebnf$4", "symbols": [/[0-9]/]},
    {"name": "Float$ebnf$4", "symbols": ["Float$ebnf$4", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Float", "symbols": [/[1-9]/, "Float$ebnf$3", {"literal":"."}, "Float$ebnf$4"], "postprocess": 
        ([first, rest, , fractions]) => Number([first, ...rest, '.', ...fractions].join(''))
          }
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
