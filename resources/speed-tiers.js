import speedTiersJSON from "./speed-tiers.json" assert {type: 'json'};

const speedTiers = speedTiersJSON.S1["3v3 OU"];

window.onload = function() {
    initPage();
}

function initPage() {
    let tiers = Object.keys(speedTiers);
    for (let i = 0; i < tiers.length; i++) {
        let tierTitle = document.createElement("h2");
        tierTitle.innerHTML = tiers[i];
        document.getElementById("main").appendChild(tierTitle);

        let entries = speedTiers[tiers[i]]
        for (let j = 0; j < entries.length; j++) {
            let monElement = document.createElement("p");
            monElement.innerHTML = entries[j].Speed + " / " + entries[j].Coromon + " / " + entries[j]["Base Stat"] + " / " + entries[j].Investment + " / " + entries[j].Boosts;
            document.getElementById("main").appendChild(monElement);
        }
    }
}