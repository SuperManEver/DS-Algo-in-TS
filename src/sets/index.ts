class MSet<T> {
  dataStore: T[] = []

  add(val: T): boolean {
    if (this.dataStore.indexOf(val) < 0) {
      this.dataStore.push(val)
      return true
    } else {
      return false
    }
  }

  remove(val: T): boolean {
    var pos = this.dataStore.indexOf(val)
    if (pos > -1) {
      this.dataStore.splice(pos, 1)
      return true
    } else {
      return false
    }
  }

  contains(val: T): boolean {
    if (this.dataStore.indexOf(val) > -1) {
      return true
    } else {
      return false
    }
  }

  union(set: MSet<T>): MSet<T> {
    var tempSet = new MSet<T>()

    for (var i = 0; i < this.dataStore.length; ++i) {
      tempSet.add(this.dataStore[i])
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.dataStore.push(set.dataStore[i])
      }
    }

    return tempSet
  }

  intersect(set: MSet<T>): MSet<T> {
    var tempSet = new MSet<T>()

    for (var i = 0; i < this.dataStore.length; ++i) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      }
    }

    return tempSet
  }

  subset(set: MSet<T>): boolean {
    if (this.size() > set.size()) {
      return false
    } else {
      for (let i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
          return false
        }
      }
    }
    return true
  }

  show(): T[] {
    return this.dataStore
  }

  size(): number {
    return this.dataStore.length
  }
}

const names = new MSet()
names.add('David')
names.add('Jennifer')
names.add('Cynthia')
names.add('Mike')
names.add('Raymond')
if (names.add('Mike')) {
  console.log('Mike added')
} else {
  console.log("Can't add Mike, must already be in set")
}
console.log(names.show())
var removed = 'Mike'

if (names.remove(removed)) {
  console.log(removed + ' removed.')
} else {
  console.log(removed + ' not removed.')
}
