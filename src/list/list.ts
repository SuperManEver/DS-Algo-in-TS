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
  storage: T[] = []
  currPos: number = 0

  public append(val: T): void {
    this.storage.push(val)
  }

  public get head(): T | void {
    return this.storage[0]
  }

  public get len(): number {
    return this.storage.length
  }

  public clear(): void {
    this.storage = []
  }

  public toString(): string {
    return this.storage.toString()
  }

  public find(elem: T): number {
    const len = this.storage.length
    for (let i = 0; i < len; i++) {
      if (this.storage[i] === elem) {
        return i
      }
    }

    return -1
  }

  remove(elem: T): T[] {
    const i = this.storage.indexOf(elem)

    if (i > 0) {
      this.storage.splice(i, 1)
      return this.storage
    }

    return this.storage
  }

  public insert(elem: T, pos: number): void {
    this.storage.splice(pos, 0, elem)
  }

  get hasNext() {
    return this.currPos < this.storage.length
  }

  next() {
    const temp = this.storage[this.currPos]
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
