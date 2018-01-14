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
        statements: [
          {
            identifier: 'C',
            items: ['p', 'b', 'm'],
            type: 'Definition',
          },
          {
            identifier: 'V',
            items: ['a'],
            type: 'Definition',
          },
          {
            pattern: 'CVC',
            type: 'Pattern',
          },
        ],
        type: 'Main',
      },
    ]
    expect(output.length).toBe(1)
    expect(output).toEqual(expectedOutput)
  })
})
