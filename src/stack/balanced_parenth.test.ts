import { isParenthBalanced } from './balanced_parentheses'

describe('Balanced parenthesis', () => {
  it('should returns true for balanced', () => {
    const exp = '(a + b)'

    expect(isParenthBalanced(exp)).toBeTruthy
    expect(isParenthBalanced('((a + b) * (b * c))')).toBeTruthy
  })

  it('should return false for unbalanced', () => {
    expect(isParenthBalanced('(a + b))')).toBeFalsy
    expect(isParenthBalanced('((a + b)) * (b * c))')).toBeTruthy
  })
})
