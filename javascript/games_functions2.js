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

//funtion for game blurb
function getBlurb(game){
    let spreadOfPlayer = `${game.numberOfPlayers.min} - ${game.numberOfPlayers.max} players`
    let gameLength = `${game.playLengthInMins.min} - ${game.playLengthInMins.max}`
    let designInfo = `${game.designers}, ${game.company}`

    return  `${game.name} : ${spreadOfPlayer} | ${gameLength} min (${designInfo})`
}
// print the first game except for id in the following format in one string
// "Everdell : 1 - 4 players | 40 - 80 mins (James Wilson, Starling Games)"

// console.log(
//    getBlurb(dummy_games[0])
// )


// for (let i in dummy_games) {
//     console.log(i)
// }

// for (let i = 0; i < dummy_games.length; i++){
//    console.log(getBlurb(dummy_games[i]))
// }

// for (let game of dummy_games) {
//     console.log(getBlurb(game))
// }



// collect all of the blurbs
let blurbs = []
for (let game of dummy_games) {
    blurbs.push(getBlurb(game));
}

console.log(blurbs);


function getBlurbs(games){
    let blurbs = []
    for (let game of games) {
        blurbs.push(getBlurb(game));
    }

    return blurbs
}


console.log(getBlurbs(dummy_games));

// 3. sort all the games by name ascending

let sortedGameName = dummy_games.sort(
    (a, b) => (a.name < b.name) ? -1 :(a.name > b.name) ? 1 :0
);
console.log("Games sorted by name ascending: " + sortedGameName);

// 3. sort all the games by min play length ascending
let sortedGameMinLength = dummy_games.sort(
    (a , b) => (a.playLengthInMins.min < b.playLengthInMins.min) ? -1 : (a.playLengthInMins.min > b.playLengthInMins.min) ? 1 : 0
);
console.log("Games sorted by min length ascending: " + sortedGameMinLength);

// 3. sort all the games by min player count
let sortedMinPlayer = dummy_games.sort(
    (a, b) => (a.numberOfPlayers.min < b.numberOfPlayers.min) ? -1 : (a.numberOfPlayers.min > b.numberOfPlayers.min) ? 1 : 0
);
console.log("Games sorted by minimum player count: " + sortedMinPlayer);
//3. sort all the games by company
let sortedGameCompany = dumm_games.sort(
    (a, b) => (a.company < b.company) ? -1 : (a.company > b.company) ? 1 : 0
)
console.log("Games sorted by company name: ")

// 5. sort dummy_games descending

let sortedGameNameDesc = dummy_games.sort(
    (a, b) => (a.name < b.name) ? 1 :(a.name > b.name) ? -1 :0
);
console.log("Games sorted by names descending: " + sortedGameNameDesc);

//8. create a function to order things in the array

function sortGames (array, field){
    let finishedSort = array.sort((a,b) => (a[field] < b[field]) ? -1 :( a[field] > b[field])? 1 : 0 );
    return finishedSort;
}
 console.log("Function sortGames sort by the name field: ", sortGames(dummy_games, "name"));
 console.log("Function sortGames sort by the designers  name field: ", sortGames(dummy_games, "designers"[0]));
 console.log("Function sortGames sort by the company field: ", sortGames(dummy_games, "company"));
 console.log("Function sortGames sort by min player count: ", sortGames(dummy_games, "numberOfPlayers:{min}"));