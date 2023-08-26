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


// print the id of the first game
console.log(
    "id of the first game",
    dummy_games[0].id
)

// print the name of the first game
console.log(
    "name of the first game",
    dummy_games[0].name
)

// print the minimum number of players of the first game
console.log(
    "minimum number of players of the first game",
    dummy_games[0].numberOfPlayers.min
)

// print the maximum number of players of the first game
console.log(
    "the maximum number of players of the first game is ", dummy_games[0].numberOfPlayers.max
)

// print the number of players like '1 - 4 players' of the first game
console.log(
    `the number of players the first game can play is between ${dummy_games[0].numberOfPlayers.min} and ${dummy_games[0].numberOfPlayers.max} `
)

// print the minimum length of play of the first game
console.log(
    "the minimum play time of the first game is ", dummy_games[0].playLengthInMins.min
)
// print the maximum lenth of play of the first game
console.log(
    "the maximum play time of the first game is ", dummy_games[0].playLengthInMins.max
)
// print the names of the designers
function designerSorting (games, designers){
    let listDesigner = ((e))
}
console.log(
    "the name of the designers of the first game is ", dummy_games[0].designers
)
// count the number of the designers
console.log(
    "the number of designers of the first game is ", dummy_games[0].designers.length
)
// print the first game 

console.log(
    "the information for the first entry in the database is ", dummy_games[0]
)
// print the first game except for id in the following format in one string
// "Everdell : 1 - 4 players | 40 - 80 mins (James Wilson, Starling Games)"

console.log(
    ` ${dummy_games[0].name} : ${dummy_games[0].numberOfPlayers.min} - ${dummy_games[0].numberOfPlayers.max} players | ${dummy_games[0].playLengthInMins.min} - ${dummy_games[0].playLengthInMins.max} (${dummy_games[0].designers}, ${dummy_games[0].company})`
)


// get games that you can play with x number of people
function suitableForXPlayers (games, x){
    let result = games.filter((game) => game.numberOfPlayers.min <= x && game.numberOfPlayers.max >= x )
    return result
}
 console.log('The games that are suitable for 3 players are: ', suitableForXPlayers(dummy_games, 3))
console.log('The games that are suitable for 5 players are: ', suitableForXPlayers(dummy_games, 5))


// get games with length upto x mins
function takesTimeUpTo (games, minutes){
    let result = games.filter((game) => game.playLengthInMins.max <= minutes);
    return result;
}
console.log("games with length up to 45mins ", takesTimeUpTo(dummy_games, 45));
// get games with the name of the game matching the string x
function gamesMatchingString (games, x){
    let result = games.filter((game) => game.name == x);
    return result;
}
console.log("get games with string = ", gamesMatchingString(dummy_games, "Everdell"));

// get games with the name of the company matching the string x
function gamesCompanyName(games, x){
    let result = games.filter((game) => game.company == x);
    return result;
}
console.log("a game with the company name Legendary is ", gamesCompanyName(dummy_games, "Legendary"));
// get games with any name of the designers matching the string x
