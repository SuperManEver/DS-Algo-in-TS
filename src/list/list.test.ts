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

  describe('insert', () => {
    it('should have an ability to insert an item to list at particular position', () => {
      const xs = new List()

      xs.append('bread')
      xs.append('milk')
      xs.append('soup')

      xs.insert('toasts', 1)

      expect(xs.toString()).toBe('bread,toasts,milk,soup')
    })
  })

  describe('remove', () => {
    it('should have an ability to remove an item to list at particular position', () => {
      const xs = new List()

      xs.append('bread')
      xs.append('milk')
      xs.append('soup')

      xs.remove('milk')

      expect(xs.toString()).toBe('bread,soup')
    })
  })

  describe('add in from of a list', () => {
    it('should have an ability to add an item to in from of a list', () => {
      const xs = new List()

      xs.append('bread')
      xs.append('milk')
      xs.append('soup')

      xs.addInFront('banana')

      expect(xs.toString()).toBe('banana,bread,milk,soup')
    })
  })
})
