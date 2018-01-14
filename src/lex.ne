Main ->
  Newlines:? Statement (Newlines Statement):* Newlines:?
  {%
    ([, first, rest]) => ({
      type: 'Main',
      statements: [first, ...rest.map(el => el[1])],
    })
  %}

Statement ->
  Definition {% id %}
  | PatternWithWeight {% id %}
  | Comment {% id %}

Comment ->
  "#" [^\n\r]:*
  {%
    ([, comment]) => ({
      type: 'Comment',
      comment,
    })
  %}

Definition ->
  Identifier _ "=" DefList
  {%
    ([identifier, , , items]) => ({
      type: 'Definition',
      identifier,
      items,
    })
  %}

DefListSep -> "," {% d => null %}

DefList ->
  DefListItem (DefListSep DefListItem):*
  {%
    ([first, rest]) => [first, ...rest.map(el => el[1])]
  %}

DefListItem ->
  (_ Grapheme _) {% d => d[0][1] %}
  | _ {% d => '' %}

PatternWithWeight ->
  Pattern
  {%
    ([pattern]) => Object.assign({weight: 1}, pattern)
  %}
  | Pattern _ PatternWeight
  {%
    ([pattern, , weight]) => Object.assign({}, pattern, {
      weight,
    })
  %}

PatternFragment ->
  Grapheme
  {%
    ([grapheme]) => ({
      type: 'PatternFragment',
      grapheme,
    })
  %}

Pattern ->
  PatternFragment (SubPattern:+ PatternFragment:?):*
  {%
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
  %}
  | (SubPattern:+ PatternFragment:?):+
  {%
    ([rest]) => ({
      type: 'Pattern',
      parts: rest.map(([subPatterns, fragment]) => [
        ...subPatterns,
        ...(fragment == null ? [] : [fragment])
      ]).reduce((a, b) => a.concat(b), [])
    })
  %}

SubPattern ->
  "(" Pattern ")"
  {%
    ([, pattern, ]) => Object.assign({weight: .5}, pattern)
  %}
  | "(" Pattern _ PatternWeight ")"
  {%
    ([, pattern, , weight, ]) => Object.assign({}, pattern, {
      weight,
    })
  %}

PatternWeight ->
  "*" _ Float
  {%
    ([, , value]) => value
  %}
  | "/" _ Float
  {%
    ([, , value]) => 1 / value
  %}

Identifier ->
  (Alpha | Unicode) (Alpha | Unicode | Digit):*
  {%
    ([first, rest]) => `${first}${rest.map(id).join('')}`
  %}

Grapheme ->
  (Alpha | Unicode | Digit):+
  {%
    d => d[0].join('')
  %}

_ -> " ":* {% d => null %}
Space -> " ":+ {% d => null %}
Newlines -> [\n\r]:+ {% d => null %}
Alpha -> [A-Za-z] {% id %}
Unicode -> [^\x00-\xA0] {% id %}
Digit -> [0-9] {% id %}
Integer ->
  "0" {% () => 0 %}
  | [1-9] [0-9]:* {% ([first, rest]) => Number([first, ...rest].join('')) %}
Float ->
  Integer
  {% id %}
  | "0":? "." [0-9]:+
  {%
    ([, , fractions]) => Number('.' + fractions.join(''))
  %}
  | [1-9] [0-9]:* "." [0-9]:+
  {%
    ([first, rest, , fractions]) => Number([first, ...rest, '.', ...fractions].join(''))
  %}
