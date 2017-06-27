const parser = require('../dist');
const {
  stripIndent,
} = require('common-tags');

describe('parse', () => {
  it('works', () => {
    const input = stripIndent`
      C=p,b,m
      V=a

      CVC
    `;
    const output = parser.parse(input);
    expectedOutput = [{}];
    expect(output.length).toBe(1);
    expect(output).toEqual(expectedOutput);
  });
});
