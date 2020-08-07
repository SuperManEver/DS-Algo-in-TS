/*

+ listSize (property) Number of elements in list
pos (property) Current position in list
+ length (property) Returns the number of elements in list
+ clear (function) Clears all elements from list
+ toString (function) Returns string representation of list
getElement (function) Returns element at current position
+ insert (function) Inserts new element after existing element
+ append (function) Adds new element to end of list
remove (function) Removes element from list
front (function) Sets current position to first element of list
end (function) Sets current position to last element of list
prev (function) Moves current position back one element
next (function) Moves current position forward one element
currPos (function) Returns the current position in list
moveTo (function) Moves the current position to specified position

*/

class List<T> {
  xs: T[] = []
  currPos: number = 0

  public append(val: T): void {
    this.xs.push(val)
  }

  public addInFront(val: T): T[] {
    this.xs.splice(0, 0, val)

    return this.xs
  }

  public get head(): T | void {
    return this.xs[0]
  }

  public get len(): number {
    return this.xs.length
  }

  public clear(): void {
    this.xs = []
  }

  public toString(): string {
    return this.xs.toString()
  }

  public find(elem: T): number {
    const len = this.xs.length
    for (let i = 0; i < len; i++) {
      if (this.xs[i] === elem) {
        return i
      }
    }

    return -1
  }

  remove(elem: T): T[] {
    const i = this.xs.indexOf(elem)

    if (i > 0) {
      this.xs.splice(i, 1)
      return this.xs
    }

    return this.xs
  }

  public insert(elem: T, pos: number): void {
    this.xs.splice(pos, 0, elem)
  }

  get hasNext() {
    return this.currPos < this.xs.length
  }

  next() {
    const temp = this.xs[this.currPos]
    this.currPos++
    return temp
  }
}

const xs = new List()

xs.append('bread')
xs.append('milk')
xs.append('soup')

// while (xs.hasNext) {
//   console.log(xs.next())
// }

export { List }
