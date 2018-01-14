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
            items: ['p', 'b', 'm'],
          },
          {
            type: 'Definition',
            identifier: 'V',
            items: ['a'],
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
})
