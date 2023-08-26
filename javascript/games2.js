const dummy_games = [
    {
        "id": "7da9b8e0-83d3-4713-ad8c-429df0035d34",
        "name": "Everdell",
        "numberOfPlayers": {"min": 1, "max": 4},
        "designers": ["James Wilson"],
        "company": "Starling Games",
        "playLengthInMins": {"min": 40, "max": 80}
    },
    {
        "id": "1c14faff-0bdb-457c-9a22-741fa3813839",
        "name": "Mech a Dream",
        "numberOfPlayers": {"min": 2, "max": 4},
        "designers": ["Thomas Dupont", "Antoni Guillen"],
        "company": "Blue Orange",
        "playLengthInMins": {"min": 45, "max": 45}
    },
    {
        "id": "58c14ad5-b5b9-4d45-b8c4-d8513e6edc70",
        "name": "Dune Imperium",
        "numberOfPlayers": {"min": 1, "max": 4},
        "designer": "Paul Dennen",
        "company": "Legendary",
        "playLengthInMins": {"min": 60, "max": 120}
    },
]

console.log(
    
)

// print the id of the second game
console.log(
 "the id for the second game is ", dummy_games[1].id
)

// print the name of the second game
console.log(
    "the name of the second game is ", dummy_games[1].name
   )

// print the minimum number of players of the second game
console.log(
    "the minimum number of players of the second game is ", dummy_games[1].numberOfPlayers.min
   )


// print the maximum number of players of the second game
console.log(
    "the maximum number of players of the second game is ", dummy_games[1].numberOfPlayers.max
   )

// print the number of players like '1 - 4 players' of the second game
console.log(
    `${dummy_games[1].numberOfPlayers.min} - ${dummy_games[1].numberOfPlayers.max}`
   )

// print the minimum length of play of the second game
console.log(
    "the minimum length of play of the second game is ", dummy_games[1].playLengthInMins.min
   )
// print the maximum lenth of play of the second game
console.log(
    "the maximum length of play of the second game is ", dummy_games[1].playLengthInMins.max
   )
// print the names of the designers
console.log(
    "the name of the designers of the second game is ", dummy_games[1].designers
   )
// count the number of the designers
console.log(
    "the name of the designers of the second game is ", dummy_games[1].designers.length
   )
// print the second game 
console.log(
    "the second game is ", dummy_games[1]
   )

// print the second game except for id in the following format in one string
// "Everdell : 1 - 4 players | 40 - 80 mins (James Wilson, Starling Games)"
console.log(
    `${dummy_games[1].name} : ${dummy_games[1].numberOfPlayers.min} - ${dummy_games[1].numberOfPlayers.max} players | ${dummy_games[1].playLengthInMins.min} - ${dummy_games[1].playLengthInMins.max} mins (${dummy_games[1].designers}, ${dummy_games[1].company})`
)