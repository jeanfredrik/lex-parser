"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
  function id(x) {
    return x[0];
  }
  var grammar = {
    Lexer: undefined,
    ParserRules: [{ "name": "Main$ebnf$1", "symbols": ["Newlines"], "postprocess": id }, { "name": "Main$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Main$ebnf$2", "symbols": [] }, { "name": "Main$ebnf$2$subexpression$1", "symbols": ["Newlines", "Statement"] }, { "name": "Main$ebnf$2", "symbols": ["Main$ebnf$2", "Main$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Main$ebnf$3", "symbols": ["Newlines"], "postprocess": id }, { "name": "Main$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Main", "symbols": ["Main$ebnf$1", "Statement", "Main$ebnf$2", "Main$ebnf$3"], "postprocess": function postprocess(_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            first = _ref2[1],
            rest = _ref2[2];

        return {
          type: 'Main',
          statements: [first].concat(_toConsumableArray(rest.map(function (el) {
            return el[1];
          })))
        };
      }
    }, { "name": "Statement", "symbols": ["Definition"], "postprocess": id }, { "name": "Statement", "symbols": ["PatternWithWeight"], "postprocess": id }, { "name": "Statement", "symbols": ["Comment"], "postprocess": id }, { "name": "Comment$ebnf$1", "symbols": [] }, { "name": "Comment$ebnf$1", "symbols": ["Comment$ebnf$1", /[^\n\r]/], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Comment", "symbols": [{ "literal": "#" }, "Comment$ebnf$1"], "postprocess": function postprocess(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            comment = _ref4[1];

        return {
          type: 'Comment',
          comment: comment.join('')
        };
      }
    }, { "name": "Definition", "symbols": ["Identifier", "_", { "literal": "=" }, "DefList"], "postprocess": function postprocess(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 4),
            identifier = _ref6[0],
            symbols = _ref6[3];

        return {
          type: 'Definition',
          identifier: identifier,
          symbols: symbols
        };
      }
    }, { "name": "DefListSep", "symbols": [{ "literal": "," }], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "DefList$ebnf$1", "symbols": [] }, { "name": "DefList$ebnf$1$subexpression$1", "symbols": ["DefListSep", "DefListItem"] }, { "name": "DefList$ebnf$1", "symbols": ["DefList$ebnf$1", "DefList$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "DefList", "symbols": ["DefListItem", "DefList$ebnf$1"], "postprocess": function postprocess(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            first = _ref8[0],
            rest = _ref8[1];

        return [first].concat(_toConsumableArray(rest.map(function (el) {
          return el[1];
        })));
      }
    }, { "name": "DefListItem", "symbols": ["_", "Grapheme", "_"], "postprocess": function postprocess(_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            grapheme = _ref10[1];

        return {
          type: 'DefinitionSymbol',
          grapheme: grapheme
        };
      }
    }, { "name": "DefListItem", "symbols": ["_", "Grapheme", "_", "Weight", "_"], "postprocess": function postprocess(_ref11) {
        var _ref12 = _slicedToArray(_ref11, 4),
            grapheme = _ref12[1],
            weight = _ref12[3];

        return {
          type: 'DefinitionSymbol',
          weight: weight,
          grapheme: grapheme
        };
      }
    }, { "name": "DefListItem", "symbols": ["_"], "postprocess": function postprocess() {
        return {
          type: 'DefinitionSymbol',
          grapheme: ''
        };
      }
    }, { "name": "DefListItem", "symbols": ["_", "Weight"], "postprocess": function postprocess(_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            weight = _ref14[1];

        return {
          type: 'DefinitionSymbol',
          weight: weight,
          grapheme: ''
        };
      }
    }, { "name": "PatternWithWeight", "symbols": ["Pattern"], "postprocess": function postprocess(_ref15) {
        var _ref16 = _slicedToArray(_ref15, 1),
            pattern = _ref16[0];

        return Object.assign({ weight: 1 }, pattern);
      }
    }, { "name": "PatternWithWeight", "symbols": ["Pattern", "_", "Weight"], "postprocess": function postprocess(_ref17) {
        var _ref18 = _slicedToArray(_ref17, 3),
            pattern = _ref18[0],
            weight = _ref18[2];

        return Object.assign({}, pattern, {
          weight: weight
        });
      }
    }, { "name": "PatternFragment", "symbols": ["Grapheme"], "postprocess": function postprocess(_ref19) {
        var _ref20 = _slicedToArray(_ref19, 1),
            grapheme = _ref20[0];

        return {
          type: 'PatternFragment',
          grapheme: grapheme
        };
      }
    }, { "name": "Pattern$ebnf$1", "symbols": [] }, { "name": "Pattern$ebnf$1$subexpression$1$ebnf$1", "symbols": ["SubPattern"] }, { "name": "Pattern$ebnf$1$subexpression$1$ebnf$1", "symbols": ["Pattern$ebnf$1$subexpression$1$ebnf$1", "SubPattern"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Pattern$ebnf$1$subexpression$1$ebnf$2", "symbols": ["PatternFragment"], "postprocess": id }, { "name": "Pattern$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Pattern$ebnf$1$subexpression$1", "symbols": ["Pattern$ebnf$1$subexpression$1$ebnf$1", "Pattern$ebnf$1$subexpression$1$ebnf$2"] }, { "name": "Pattern$ebnf$1", "symbols": ["Pattern$ebnf$1", "Pattern$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Pattern", "symbols": ["PatternFragment", "Pattern$ebnf$1"], "postprocess": function postprocess(_ref21) {
        var _ref22 = _slicedToArray(_ref21, 2),
            fragment = _ref22[0],
            rest = _ref22[1];

        return {
          type: 'Pattern',
          parts: [fragment].concat(_toConsumableArray(rest.map(function (_ref23) {
            var _ref24 = _slicedToArray(_ref23, 2),
                subPatterns = _ref24[0],
                fragment = _ref24[1];

            return [].concat(_toConsumableArray(subPatterns), _toConsumableArray(fragment == null ? [] : [fragment]));
          }).reduce(function (a, b) {
            return a.concat(b);
          }, [])))
        };
      }
    }, { "name": "Pattern$ebnf$2$subexpression$1$ebnf$1", "symbols": ["SubPattern"] }, { "name": "Pattern$ebnf$2$subexpression$1$ebnf$1", "symbols": ["Pattern$ebnf$2$subexpression$1$ebnf$1", "SubPattern"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Pattern$ebnf$2$subexpression$1$ebnf$2", "symbols": ["PatternFragment"], "postprocess": id }, { "name": "Pattern$ebnf$2$subexpression$1$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Pattern$ebnf$2$subexpression$1", "symbols": ["Pattern$ebnf$2$subexpression$1$ebnf$1", "Pattern$ebnf$2$subexpression$1$ebnf$2"] }, { "name": "Pattern$ebnf$2", "symbols": ["Pattern$ebnf$2$subexpression$1"] }, { "name": "Pattern$ebnf$2$subexpression$2$ebnf$1", "symbols": ["SubPattern"] }, { "name": "Pattern$ebnf$2$subexpression$2$ebnf$1", "symbols": ["Pattern$ebnf$2$subexpression$2$ebnf$1", "SubPattern"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Pattern$ebnf$2$subexpression$2$ebnf$2", "symbols": ["PatternFragment"], "postprocess": id }, { "name": "Pattern$ebnf$2$subexpression$2$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Pattern$ebnf$2$subexpression$2", "symbols": ["Pattern$ebnf$2$subexpression$2$ebnf$1", "Pattern$ebnf$2$subexpression$2$ebnf$2"] }, { "name": "Pattern$ebnf$2", "symbols": ["Pattern$ebnf$2", "Pattern$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Pattern", "symbols": ["Pattern$ebnf$2"], "postprocess": function postprocess(_ref25) {
        var _ref26 = _slicedToArray(_ref25, 1),
            rest = _ref26[0];

        return {
          type: 'Pattern',
          parts: rest.map(function (_ref27) {
            var _ref28 = _slicedToArray(_ref27, 2),
                subPatterns = _ref28[0],
                fragment = _ref28[1];

            return [].concat(_toConsumableArray(subPatterns), _toConsumableArray(fragment == null ? [] : [fragment]));
          }).reduce(function (a, b) {
            return a.concat(b);
          }, [])
        };
      }
    }, { "name": "SubPattern", "symbols": [{ "literal": "(" }, "Pattern", { "literal": ")" }], "postprocess": function postprocess(_ref29) {
        var _ref30 = _slicedToArray(_ref29, 2),
            pattern = _ref30[1];

        return Object.assign({ weight: .5 }, pattern);
      }
    }, { "name": "SubPattern", "symbols": [{ "literal": "(" }, "Pattern", "_", "Weight", { "literal": ")" }], "postprocess": function postprocess(_ref31) {
        var _ref32 = _slicedToArray(_ref31, 4),
            pattern = _ref32[1],
            weight = _ref32[3];

        return Object.assign({}, pattern, {
          weight: weight
        });
      }
    }, { "name": "Weight", "symbols": [{ "literal": "*" }, "_", "Float"], "postprocess": function postprocess(_ref33) {
        var _ref34 = _slicedToArray(_ref33, 3),
            value = _ref34[2];

        return value;
      }
    }, { "name": "Weight", "symbols": [{ "literal": "/" }, "_", "Float"], "postprocess": function postprocess(_ref35) {
        var _ref36 = _slicedToArray(_ref35, 3),
            value = _ref36[2];

        return 1 / value;
      }
    }, { "name": "Identifier$subexpression$1", "symbols": ["Alpha"] }, { "name": "Identifier$subexpression$1", "symbols": ["Unicode"] }, { "name": "Identifier$ebnf$1", "symbols": [] }, { "name": "Identifier$ebnf$1$subexpression$1", "symbols": ["Alpha"] }, { "name": "Identifier$ebnf$1$subexpression$1", "symbols": ["Unicode"] }, { "name": "Identifier$ebnf$1$subexpression$1", "symbols": ["Digit"] }, { "name": "Identifier$ebnf$1", "symbols": ["Identifier$ebnf$1", "Identifier$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Identifier", "symbols": ["Identifier$subexpression$1", "Identifier$ebnf$1"], "postprocess": function postprocess(_ref37) {
        var _ref38 = _slicedToArray(_ref37, 2),
            first = _ref38[0],
            rest = _ref38[1];

        return "" + first + rest.map(id).join('');
      }
    }, { "name": "Grapheme$ebnf$1$subexpression$1", "symbols": ["Alpha"] }, { "name": "Grapheme$ebnf$1$subexpression$1", "symbols": ["Unicode"] }, { "name": "Grapheme$ebnf$1$subexpression$1", "symbols": ["Digit"] }, { "name": "Grapheme$ebnf$1", "symbols": ["Grapheme$ebnf$1$subexpression$1"] }, { "name": "Grapheme$ebnf$1$subexpression$2", "symbols": ["Alpha"] }, { "name": "Grapheme$ebnf$1$subexpression$2", "symbols": ["Unicode"] }, { "name": "Grapheme$ebnf$1$subexpression$2", "symbols": ["Digit"] }, { "name": "Grapheme$ebnf$1", "symbols": ["Grapheme$ebnf$1", "Grapheme$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Grapheme", "symbols": ["Grapheme$ebnf$1"], "postprocess": function postprocess(d) {
        return d[0].join('');
      }
    }, { "name": "_$ebnf$1", "symbols": [] }, { "name": "_$ebnf$1", "symbols": ["_$ebnf$1", { "literal": " " }], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Space$ebnf$1", "symbols": [{ "literal": " " }] }, { "name": "Space$ebnf$1", "symbols": ["Space$ebnf$1", { "literal": " " }], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Space", "symbols": ["Space$ebnf$1"], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Newlines$ebnf$1", "symbols": [/[\n\r]/] }, { "name": "Newlines$ebnf$1", "symbols": ["Newlines$ebnf$1", /[\n\r]/], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Newlines", "symbols": ["Newlines$ebnf$1"], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Alpha", "symbols": [/[A-Za-z]/], "postprocess": id }, { "name": "Unicode", "symbols": [/[^\x00-\xA0]/], "postprocess": id }, { "name": "Digit", "symbols": [/[0-9]/], "postprocess": id }, { "name": "Integer", "symbols": [{ "literal": "0" }], "postprocess": function postprocess() {
        return 0;
      } }, { "name": "Integer$ebnf$1", "symbols": [] }, { "name": "Integer$ebnf$1", "symbols": ["Integer$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Integer", "symbols": [/[1-9]/, "Integer$ebnf$1"], "postprocess": function postprocess(_ref39) {
        var _ref40 = _slicedToArray(_ref39, 2),
            first = _ref40[0],
            rest = _ref40[1];

        return Number([first].concat(_toConsumableArray(rest)).join(''));
      } }, { "name": "Float", "symbols": ["Integer"], "postprocess": id }, { "name": "Float$ebnf$1", "symbols": [{ "literal": "0" }], "postprocess": id }, { "name": "Float$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
        return null;
      } }, { "name": "Float$ebnf$2", "symbols": [/[0-9]/] }, { "name": "Float$ebnf$2", "symbols": ["Float$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Float", "symbols": ["Float$ebnf$1", { "literal": "." }, "Float$ebnf$2"], "postprocess": function postprocess(_ref41) {
        var _ref42 = _slicedToArray(_ref41, 3),
            fractions = _ref42[2];

        return Number('.' + fractions.join(''));
      }
    }, { "name": "Float$ebnf$3", "symbols": [] }, { "name": "Float$ebnf$3", "symbols": ["Float$ebnf$3", /[0-9]/], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Float$ebnf$4", "symbols": [/[0-9]/] }, { "name": "Float$ebnf$4", "symbols": ["Float$ebnf$4", /[0-9]/], "postprocess": function arrpush(d) {
        return d[0].concat([d[1]]);
      } }, { "name": "Float", "symbols": [/[1-9]/, "Float$ebnf$3", { "literal": "." }, "Float$ebnf$4"], "postprocess": function postprocess(_ref43) {
        var _ref44 = _slicedToArray(_ref43, 4),
            first = _ref44[0],
            rest = _ref44[1],
            fractions = _ref44[3];

        return Number([first].concat(_toConsumableArray(rest), ['.'], _toConsumableArray(fractions)).join(''));
      }
    }],
    ParserStart: "Main"
  };
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
