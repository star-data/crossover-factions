const fs = require('fs');

// Read the JSON file
// const weaponsData = JSON.parse(fs.readFileSync('weapons.json', 'utf8'));
const weaponsData = JSON.parse(fs.readFileSync('body.json', 'utf8'));

// Convert keys to lowercase for case-insensitive search
const weaponsDataLower = {};
Object.keys(weaponsData).forEach(key => {
    weaponsDataLower[key.toLowerCase()] = weaponsData[key];
});

// Read the list of IDs from the text file
// const idsList = fs.readFileSync('ids.txt', 'utf8').split('\n').map(id => id.trim().toLowerCase()).filter(id => id);

let idsList = Object.keys(weaponsData)
// idsList = idsList.sort((a,b) => resData[a].results && !resData[b].results ? -1 : (resData[a].resultComponents && !resData[b].resultComponents ? -1 : 1))

// Define the legend with proper spacing
const legend = '' +
    `id`.padEnd(40) +
    `name`.padEnd(40) +
    `armourHeat`.padEnd(20) +
    `armourKinetic`.padEnd(20) +
    `buildPoints`.padEnd(20) +
    `buildPower`.padEnd(20) +
    `class`.padEnd(20) +
    `hitpoints`.padEnd(20) +
    `model`.padEnd(20) +
    `powerOutput`.padEnd(20) +
    `size`.padEnd(20) +
    `weaponSlots`.padEnd(20) +
    `weight`.padEnd(20)

function formatWeaponData (id, body) {
    return '' +
        id.toString().padEnd(40) +
        body.name?.toString().padEnd(40) +
        body.armourHeat?.toString().padEnd(20) +
        body.armourKinetic?.toString().padEnd(20) +
        body.buildPoints?.toString().padEnd(20) +
        body.buildPower?.toString().padEnd(20) +
        body.class?.toString().padEnd(20) +
        body.hitpoints?.toString().padEnd(20) +
        body.model?.toString().padEnd(20) +
        body.powerOutput?.toString().padEnd(20) +
        body.size?.toString().padEnd(20) +
        body.weaponSlots?.toString().padEnd(20) +
        body.weight?.toString().padEnd(20)
}


idsList = idsList.sort((a,b) =>  weaponsDataLower[a.toLowerCase()].id < weaponsDataLower[b.toLowerCase()].id ? 1 : -1 )


// Process and extract the relevant weapon data
const outputData = [legend, ...idsList.map(id => {
    if (weaponsDataLower[id.toLowerCase()]) {
        return formatWeaponData(id, weaponsDataLower[id.toLowerCase()]);
    } else {
        return `${id.padEnd(30)}NOT FOUND`;
    }
})].join('\n');

// Save the result to an output file
fs.writeFileSync('body.txt', outputData);

console.log('Data extraction completed. Check output.txt');
