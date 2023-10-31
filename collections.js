let block = ['querty', 'taco', 'yle', 'car', 'map']
console.log (block.length)
console.log(block[1])

console.log(block.includes('taco', 2)) // true or false, false STARTING FROM 2ND ELEMENT

// RETURN INDEX NUMBER OF AN ELEMENT
console.log(block.indexOf('yle'))

// add elements to the end of array
console.log(block.push('login', 'bin')) // output - length
console.log(block) // output - array

console.log(block.pop('login', 'bin')) // delete last element
console.log(block)

// array MATRIX - двухмерный массив
let blockDeep = [
    ['querty', 'taco', 'yle'],
    ['car', 'map']
]
console.log(blockDeep[0][1])


// map
let mapSample = new Map()
mapSample.set(['1', '2', '3'], 'first value')
mapSample.set(Date.now(), 'sec value')
console.log(mapSample)

console.log(mapSample.get(Date.now()))

// set
let sampleTest = new Set()
sampleTest.add('1')
console.log(sampleTest)
sampleTest.has ('1')