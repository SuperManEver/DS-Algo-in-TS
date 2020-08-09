import { infix2postfix } from './postfix'

test('Infix to postfix', () => {
  expect(infix2postfix('2 + 1')).toEqual('2 1 +')
  expect(infix2postfix('4 * 8')).toEqual('4 8 *')
  //   expect(infix2postfix('((3 + 2) * 6)')).toEqual('(3 2 +) 6 *')
})
