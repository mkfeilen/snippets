/* a function for getting information selected from an html input tag
 and insert into another html p tag through id */

/* <input class="inputBox" id="name" name="name" oninput="myName()" onfocus="nameColour(this.id)"
        onblur="colourBack(this.id)">
    <p id="characterName" class="result"></p>
 */

function myName() {
    let name = document.getElementById("name");
    document.getElementById("characterName").innerHTML = "Character's name is: " + name.value;
}

// rolling a dice (change number in math random for dice size)
function randomRoll() {
    let diceRoll = Math.floor((Math.random() * 6) + 1);
    return diceRoll;
}

/* creates an array of dice rolls where each array indec is dice rolled 4 times and take 3 highest for each array value */
function setStats() {
    let diceArray = []
    diceArray.push(randomRoll(), randomRoll(), randomRoll(), randomRoll());
    console.log(diceArray);
    let sortedDice = diceArray.sort();
    sortedDice.shift();
    let finalStat = 0;
    for (let i = 0; i < sortedDice.length; i++) {
        finalStat += sortedDice[i];
    }
    return finalStat;
}

// gives length of array above for number of dice rolls wanted
function statList() {
    let statLength = 6;
    let statArr = [];
    for (let i = 0; i < statLength; i++) {
        statArr.push(setStats());
    }
    document.getElementById("rolledStats").innerHTML = "Your stat values are: " + statArr;
}

// a function that lets you roll a random dice(x) and either take the dice roll or the average of the dice, whichever is higher
function rollX(x) {
    let roll1 = Math.floor(Math.random() * x) + 1;
    let roll2 = x/2;          
    return Math.max(roll1, roll2);
}

// if class for drop down menu input, takes in addShield function
function setArmour(){
    let armourClass = 0;
    let armour = document.getElementById("armour").value;
    let dex = document.getElementById("dexterity");
    let dexMod = Math.floor((dex.value - 10) / 2);
    
if (armour === "none" ){
    armourClass = 10 + dexMod  + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "padded" || armour === "leather"){
    armourClass = 11 + dexMod  + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "studded-leather" ){
   armourClass = 12 + dexMod  + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour ===  "hide"){
    armourClass = 12 + (Math.min(dexMod, 2))  + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "chain shirt" ){
   armourClass = 13 + (Math.min(dexMod, 2))  + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "scale mail" || armour === "breastplate" ){
   armourClass = 14 + (Math.min(dexMod, 2))   + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "half-plate"){
    armourClass = 15 + (Math.min(dexMod, 2))   + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "ring_mail"){
    armourClass = 14  + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "chain_mail"){
   armourClass = 16 + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
 } else if (armour === "splint"){
   armourClass = 17 + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} else if (armour === "plate"){
    armourClass = 18 + addShield();
   document.getElementById("returnedArmour").innerHTML = "Your AC is: " + armourClass;
} 
}

function addShield(){
    let shieldPresent = document.getElementById("shield").checked;
     if(shieldPresent === true){
         return 2;
          } else {
               return 0;
          } 
}     

// using a switch case
function raceBonus(){
    let race = document.getElementById("race").value;
   
    switch (race){
        case "elf":
        document.getElementById("racialBonus").innerHTML = "As an Elf +2 to Dexterity and High Elf: Inteligence +1, Wood Elf: Wisdom +1 or Drow: Charisma +1 " ;
            break;
        case "half-elf":
        document.getElementById("racialBonus").innerHTML = "As a Half-elf +2 to Charisma and +1 to two other attributes of your choice." ;
            break;
        case "human":
        document.getElementById("racialBonus").innerHTML = "As a Human +1 to all your attributes " ;
            break;
        case "dwarf":
        document.getElementById("racialBonus").innerHTML = "As a Dwarf +2 to Constitution and Hill Dwarf: +1 Wisdom or Mountain Dwarf: +2 Strength " ;
            break;
        case "halfling":
        document.getElementById("racialBonus").innerHTML = "As a Halfling +2 to Dexterity and Lightfoot: +1 Charisma, Stout: +1 Constitution " ;
            break;
        case "gnome": 
        document.getElementById("racialBonus").innerHTML = "As a Gnome +2 to Intelligance and Forest Gnome: +1 Dexterity or Mountain Gnome: +1 Constitution " ;
            break;
        case "half-orc": 
        document.getElementById("racialBonus").innerHTML = "As a Half-Orc +2 to Strength and +1 to Constitution " ;
            break;
        case "dragonborn": 
        document.getElementById("racialBonus").innerHTML = "As a Dragonborn +2 to Strength and +1 to Charisma " ;
            break;

    }
}