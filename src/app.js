const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    let count = 0
    for (const i of players) {
        let playerdetails = {
            name: i,
            strength: 100,
            image: "images/super-" + ++count + ".png",
            type: "hero|villain"
        }
        detailedPlayers.push(playerdetails)

    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Number.parseInt((Math.random(100) * 100).toFixed(0))
        // Return a random integer (0,100]
        // Note: You can use Math.random() and Math.ceil()
}
let count = 0
const buildPlayers = (players, type) => {
        let fragment = '';
        if (type === 'hero') {
            for (let j = 0; j < players.length; j += 2) {
                let i = players[j]
                fragment +=
                    '<div class="player"> \
        <img src="' + i.image + '"alt="">\
        <div class="name">' + i.name + '</div>\
        <div class="strength">' + getRandomStrength() + '</div></div>'

            }
        } else {
            for (let j = 1; j < players.length; j += 2) {
                let i = players[j]
                fragment +=
                    '<div class="player"> \
        <img src="' + i.image + '"alt="">\
        <div class="name">' + i.name + '</div>\
        <div class="strength">' + getRandomStrength() + '</div></div>'

            }
        }
        console.log(fragment)







        // Loop through players and accumulate HTML template
        // depending of type of player(hero|villain)
        // Type your code here

        return fragment;
    }
    // Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}