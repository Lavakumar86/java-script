let sets = new Set()
sets.add(1)
sets.add(2)
sets.add(3)
sets.add(4)
sets.add(5)
sets.add(6)
console.log(sets);
console.log(sets.has(4));

let lists=[
    "apple",
    "mangp",
    "grapes",
    "black grapes",
    "blue grapes",
    "yellow grapes",
    "mangp",
    "grapes",
];

let list = [...new Set(lists)];
console.log(list);


