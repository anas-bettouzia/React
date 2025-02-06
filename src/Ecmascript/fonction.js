let lastID = 0; 

let Tab = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

Tab.forEach(obj => {
    obj.id = ++lastID;
});

Tab.push({ name: "Charlie", age: 35, id: ++lastID });
Tab.unshift({ name: "David", age: 40, id: ++lastID });


export function Search(id, array) {
    return array.find(obj => obj.id === id);
}

export function countOccurrences(inputArray) {

    const flattenedArray = inputArray.flat();

    return flattenedArray.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

export { Tab };