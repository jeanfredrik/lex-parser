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
  | Pattern {% id %}

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

Pattern ->
  Grapheme
  {%
    d => ({
      type: 'Pattern',
      pattern: d[0],
    })
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
Newlines -> [\n\r]:+ {% d => null %}
Alpha -> [A-Za-z] {% id %}
Unicode -> [^\x00-\xA0] {% id %}
Digit -> [0-9] {% id %}
