const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        dity: 'Los Angeles'
    }
};

console.log(player.address.city);

const { name, club, address: {city} } = player;

console.log(`${name} plyers for ${club} `);
console.log(`${name} lives in ${city} `);

let fullName = ['Kyukin', 'Lee'];
console.log( fullName[1]);

let [firstName, lastName] = ['Kyukin', 'Lee'];
lastName = 'kim';
console.log( lastName );
