import { List } from './list'

describe('List', () => {
  it('should be empty by default', () => {
    const xs = new List()

    expect(xs.len).toBe(0)
  })

  it('should has 1 after append', () => {
    const xs = new List()
    xs.append('Bread')

    expect(xs.len).toBe(1)
    expect(xs.head).toBe('Bread')
  })

  it('should clears element in a list', () => {
    const xs = new List()
    xs.append('Bread')
    xs.append('Milk')

    expect(xs.len).toBe(2)
    xs.clear()

    expect(xs.len).toBe(0)
  })

  it('should print list in string', () => {
    const xs = new List()

    xs.append('bread')
    xs.append('milk')
    xs.append('soup')

    expect(xs.toString()).toBe('bread,milk,soup')
  })

  it('should have an ability to find item in list', () => {
    const xs = new List()

    xs.append('bread')
    xs.append('milk')
    xs.append('soup')

    const i = xs.find('milk')
    expect(i).toBe(1)

    const i_not = xs.find('fire')

    expect(i_not).toBe(-1)
  })
})
