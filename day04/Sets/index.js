const exampleSet = new Set( [1,2,3,4,5,6,2,2,3,3]);

exampleSet.add(5);
exampleSet.add(2).add(17);

console.log(exampleSet.delete(5));
console.log(exampleSet.has(17));
console.log(exampleSet);

exampleSet.clear();
console.log(exampleSet);