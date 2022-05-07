// Template
const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good boy";
console.log(fullName);

// ES6 Template below
const fullName2 = `${firstName} ${lastName} is a good man.`;
const fullName3 = `${firstName} ${20+50+30} is a good man.`;
console.log(fullName2);
console.log(fullName3);

const multiline = "I love you\n" +
    "I miss you\n" +
    "I need you."
console.log(multiline);

// ES6 Template below
const multiline2 = `I love you 
I miss you 
no. I don't need you 
Baily road e dorkar nai.`
console.log(multiline2);