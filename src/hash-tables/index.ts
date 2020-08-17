class HashTable<T extends string> {
  table = new Array<T>(137)

  simpleHash(data: T): number {
    var total = 0
    for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i)
    }
    return total % this.table.length
  }

  // Horner’s method
  betterHash(data: T): number {
    const H = 37
    var total = 0
    for (var i = 0; i < data.length; ++i) {
      total += H * total + data.charCodeAt(i)
    }
    total = total % this.table.length

    if (total < 0) {
      total += this.table.length - 1
    }

    return total
  }

  showDistro(): void {
    var n = 0
    for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
        console.log(i + ': ' + this.table[i])
      }
    }
  }

  put(data: T): void {
    var pos = this.betterHash(data)
    this.table[pos] = data
  }
}

var someNames = [
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan',
]

var hTable = new HashTable<string>()
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i])
}
hTable.showDistro()
