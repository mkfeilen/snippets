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


// function to return id of the game
function id(game){
    return game.id
}
// print the id of the game
console.log(
    "id of the game",
    id(dummy_games[0])
)


// function to return name of the game
function getGame(game){
    return game.name
}
// print the name of the game
console.log(
    "name of the game",
    getGame(dummy_games[0])
)

// function to get min number of players

function getMinPlayers(game){
    return game.numberOfPlayers.min
}
// print the minimum number of players of the game
console.log(
    "minimum number of players of the first game",
    getMinPlayers(dummy_games[0])
)

// function to get max number of players

function getMaxPlayers(game){
    return game.numberOfPlayers.max
}
// print the maximum number of players of the first game
console.log(
    "the maximum number of players of the first game is ", getMaxPlayers(dummy_games[0])
)
//function for number players

function getPlayerCount(game){
    return `${game.numberOfPlayers.min} - ${game.numberOfPlayers.max}`
}
// print the number of players like '1 - 4 players' of the first game
console.log(
    "the number of players the first game can play is between ", getPlayerCount(dummy_games[0])
)

//function to give min play length

function getMinPlayLength(game){
    return game.playLengthInMins.min
}
// print the minimum length of play of the first game
console.log(
    "the minimum play time of the first game is ", getMinPlayLength(dummy_games[0])
)
//function for max play length
function getMaxPlayLength(game){
  return game.playLengthInMins.max
}
// print the maximum lenth of play of the first game
console.log(
    "the maximum play time of the first game is ", getMaxPlayLength(dummy_games[0])
)

//function to get name of designers
function getNameOfDesigners(game){
    return game.designers
}
// print the names of the designers
console.log(
    "the name of the designers of the first game is ", getNameOfDesigners(dummy_games[0])
)

//fucntion to count number of designers
function getNoOfDesigners(game){
    return game.designers.length
}
// count the number of the designers
console.log(
    "the number of designers of the first game is ", getNoOfDesigners(dummy_games[0])
)

//funtion for game blurb
function getBlurb(game){
    return  `${game.name} : ${game.numberOfPlayers.min} - ${game.numberOfPlayers.max} players | ${game.playLengthInMins.min} - ${game.playLengthInMins.max} (${game.designers}, ${game.company})`
}
// print the first game except for id in the following format in one string
// "Everdell : 1 - 4 players | 40 - 80 mins (James Wilson, Starling Games)"

console.log(
   getBlurb(dummy_games[0])
)