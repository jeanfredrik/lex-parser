const parser = require('../dist')
const { stripIndent } = require('common-tags')

describe('parse', () => {
  it('works', () => {
    const input = stripIndent`
      C=p,b,m
      V=a

      CVC
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Definition',
            identifier: 'C',
            symbols: [
              { type: 'DefinitionSymbol', grapheme: 'p' },
              { type: 'DefinitionSymbol', grapheme: 'b' },
              { type: 'DefinitionSymbol', grapheme: 'm' },
            ],
          },
          {
            type: 'Definition',
            identifier: 'V',
            symbols: [
              { type: 'DefinitionSymbol', grapheme: 'a' },
            ],
          },
          {
            type: 'Pattern',
            weight: 1,
            parts: [
              {
                type: 'PatternFragment',
                grapheme: 'CVC',
              },
            ],
          },
        ],
      },
    ]
    expect(output).toEqual(expectedOutput)
    expect(output.length).toBe(1)
  })
  it('handles subpatterns', () => {
    const input = stripIndent`
      CV(CV)
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Pattern',
            weight: 1,
            parts: [
              {
                type: 'PatternFragment',
                grapheme: 'CV',
              },
              {
                type: 'Pattern',
                weight: 0.5,
                parts: [
                  {
                    type: 'PatternFragment',
                    grapheme: 'CV',
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
    expect(output.length).toBe(1)
    expect(output).toEqual(expectedOutput)
  })
  it('handles patterns with weight', () => {
    const input = stripIndent`
      CV(CV)*5
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Pattern',
            weight: 5,
            parts: [
              {
                type: 'PatternFragment',
                grapheme: 'CV',
              },
              {
                type: 'Pattern',
                weight: 0.5,
                parts: [
                  {
                    type: 'PatternFragment',
                    grapheme: 'CV',
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
    expect(output.length).toBe(1)
    expect(output).toEqual(expectedOutput)
  })
  it('handles subpatterns with weight', () => {
    const input = stripIndent`
      CV(CV * .75)
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Pattern',
            weight: 1,
            parts: [
              {
                type: 'PatternFragment',
                grapheme: 'CV',
              },
              {
                type: 'Pattern',
                weight: 0.75,
                parts: [
                  {
                    type: 'PatternFragment',
                    grapheme: 'CV',
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
    expect(output.length).toBe(1)
    expect(output).toEqual(expectedOutput)
  })
  it('handles whole-line comments', () => {
    const input = stripIndent`
      # abc
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Comment',
            comment: ' abc',
          },
        ],
      },
    ]
    expect(output.length).toBe(1)
    expect(output).toEqual(expectedOutput)
  })
  it('handles graphemes with weights', () => {
    const input = stripIndent`
      C=a*2, b, c/4
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Definition',
            identifier: 'C',
            symbols: [
              {
                type: 'DefinitionSymbol',
                grapheme: 'a',
                weight: 2,
              },
              { type: 'DefinitionSymbol', grapheme: 'b' },
              {
                type: 'DefinitionSymbol',
                grapheme: 'c',
                weight: 0.25,
              },
            ],
          },
        ],
      },
    ]
    expect(output).toEqual(expectedOutput)
    expect(output.length).toBe(1)
  })
  it('handles empty graphemes', () => {
    const input = stripIndent`
      C=a,
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Definition',
            identifier: 'C',
            symbols: [
              {
                type: 'DefinitionSymbol',
                grapheme: 'a',
              },
              { type: 'DefinitionSymbol', grapheme: '' },
            ],
          },
        ],
      },
    ]
    expect(output).toEqual(expectedOutput)
    expect(output.length).toBe(1)
  })
  it('handles empty graphemes with weight', () => {
    const input = stripIndent`
      C=a,*5
    `
    const output = parser.parse(input)
    const expectedOutput = [
      {
        type: 'Main',
        statements: [
          {
            type: 'Definition',
            identifier: 'C',
            symbols: [
              {
                type: 'DefinitionSymbol',
                grapheme: 'a',
              },
              {
                type: 'DefinitionSymbol',
                grapheme: '',
                weight: 5,
              },
            ],
          },
        ],
      },
    ]
    expect(output).toEqual(expectedOutput)
    expect(output.length).toBe(1)
  })
})
