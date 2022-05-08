// Destructure Object, //array, destructure complex object
const person = { name: 'Jack Watson', age: 27, job: 'Facebooker', gfname: 'Ema Watson', address: 'Dhanmondi', phone: '123', friends: ['Rahime', 'Korim', 'Salam'] }

const { name, gfname, address, phone, age } = person;

// const gfname = person.gfname;
// const phone = person.phone;
// console.log(gfname, phone);
// console.log(gfname, age);
// console.log(name, address);


// arrow destructure

const friends = ['Sahib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sogir Khan', 'Ohab Khan'];
// const [chotoFriends, nextFriends, ...restFriends] = friends;
const [chotoFriends, ...olderFriends] = friends;
// console.log(chotoFriends, nextFriends);
// console.log(restFriends);
console.log(olderFriends);

// destructure complex object
const complexObject = {
    name: 'ABC',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger leader'
    }
}
const { leader } = complexObject.info;
console.log(leader);