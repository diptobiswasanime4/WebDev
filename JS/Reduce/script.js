const pkmnTrainers = [
  {
    name: "Wally",
    pkmn: "Ralts",
    age: 12,
    town: "Petalburg City",
    pkmnCount: 6,
  },
  {
    name: "Gary",
    pkmn: "Eevee",
    age: 10,
    town: "Pallet Town",
    pkmnCount: 4,
  },
  {
    name: "Lyra",
    pkmn: "Marill",
    age: 14,
    town: "New Bark Town",
    pkmnCount: 3,
  },
];


let totalPkmn = pkmnTrainers.reduce((acc, cur) => {
  console.log(acc);
  acc += cur.pkmnCount
  return acc
}, 2)

console.log("Total Pkmn:", totalPkmn);

let totalPkmnInfo = pkmnTrainers.reduce((acc, cur) => {
  console.log(acc);
  acc.totalPkmn += cur.pkmnCount
  acc.trainers.push(cur.name)
return acc
}, {
  totalPkmn: 2,
  trainers: ['Ash']
})

console.log("Total Pkmn info:", totalPkmnInfo);