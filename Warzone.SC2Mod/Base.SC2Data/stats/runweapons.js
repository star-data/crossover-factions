const fs = require('fs');

// Read the JSON file
// const weaponsData = JSON.parse(fs.readFileSync('weapons.json', 'utf8'));
const weaponsData = JSON.parse(fs.readFileSync('weapons.json', 'utf8'));
const sensorData = JSON.parse(fs.readFileSync('sensor.json', 'utf8'));
const repairData = JSON.parse(fs.readFileSync('repair.json', 'utf8'));
const constructionData = JSON.parse(fs.readFileSync('construction.json', 'utf8'));
Object.assign(weaponsData,sensorData)
Object.assign(weaponsData,repairData)
Object.assign(weaponsData,constructionData)
// Convert keys to lowercase for case-insensitive search
const weaponsDataLower = {};
Object.keys(weaponsData).forEach(key => {
    weaponsDataLower[key.toLowerCase()] = weaponsData[key];
});

// Read the list of IDs from the text file
const weaponsids = fs.readFileSync('weaponsids.json', 'utf8')

const wepaonsList = JSON.parse(weaponsids)


// idsList = idsList.sort((a,b) => resData[a].results && !resData[b].results ? -1 : (resData[a].resultComponents && !resData[b].resultComponents ? -1 : 1))

// Define the legend with proper spacing
// const legend = "firePause   buildPoints   buildPower   weight      damage      shortRange   longRange    factor      radiusDamage fireOnMove   flightSpeed  numExplosions movement    muzzleGfx      flightGfx      explosionWav   weaponWav";
const legend = '' +
`scid`.padEnd(40) +
// `wzid`.padEnd(40) +
// `name`.padEnd(40) +
// `buildPoints`.padEnd(20) +
// `buildPower`.padEnd(20) +
`damage`.padEnd(20) +
`effectSize`.padEnd(20) +
// `facePlayer`.padEnd(20) +
`firePause`.padEnd(20) +
    `numRounds`.padEnd(20) +
    `reloadTime`.padEnd(20) +
// `flightGfx`.padEnd(20) +
// `flightSpeed`.padEnd(20) +
// `hitGfx`.padEnd(20) +
// `hitpoints`.padEnd(20) +
// `longRange`.padEnd(20) +
// `longHit`.padEnd(20) +
// `maxElevation`.padEnd(20) +
// `minElevation`.padEnd(20) +
// `minimumDamage`.padEnd(20) +
// `missGfx`.padEnd(20) +
// `movement`.padEnd(20) +
// `muzzleGfx`.padEnd(20) +
`numExplosions`.padEnd(20) +
// `recoilValue`.padEnd(20) +
`rotate`.padEnd(20) +
// `shortHit`.padEnd(20) +
// `shortRange`.padEnd(20) +
// `waterGfx`.padEnd(20) +
`weaponClass`.padEnd(20) +
`weaponEffect`.padEnd(20) +
`weaponSubClass`.padEnd(20) +
// `weaponWav`.padEnd(20) +
// `weight`.padEnd(20) +
''

// Define the output format function
function formatWeaponData(id, w) {

    return '' +
        id.toString().padEnd(40) +
        // (w.id?.toString() || '').padEnd(40) +
        // (w.name?.toString() || '').padEnd(40) +
        // (w.buildPoints?.toString() || '').padEnd(20) +
        // (w.buildPower?.toString() || '').padEnd(20) +
        (w.damage?.toString() || '').padEnd(20) +
        (w.effectSize?.toString() || '').padEnd(20) +
        // (w.facePlayer?.toString() || '').padEnd(20) +
        (w.firePause?.toString() || '').padEnd(20) +
        (w.numRounds?.toString() || '0').padEnd(20) +
        (w.reloadTime?.toString() || '').padEnd(20) +
        // (w.flightGfx?.toString() || '').padEnd(20) +
        // (w.flightSpeed?.toString() || '').padEnd(20) +
        // (w.hitGfx?.toString() || '').padEnd(20) +
        // (w.hitpoints?.toString() || '').padEnd(20) +
        // (w.longRange?.toString() || '').padEnd(20) +
        // (w.longHit?.toString() || '').padEnd(20) +
        // (w.maxElevation?.toString() || '').padEnd(20) +
        // (w.minElevation?.toString() || '').padEnd(20) +
        // (w.minimumDamage?.toString() || '').padEnd(20) +
        // (w.missGfx?.toString() || '').padEnd(20) +
        // (w.movement?.toString() || '').padEnd(20) +
        // (w.muzzleGfx?.toString() || '').padEnd(20) +
        (w.numExplosions?.toString() || '').padEnd(20) +
        // (w.recoilValue?.toString() || '').padEnd(20) +
        (w.rotate?.toString() || '').padEnd(20) +
        // (w.shortHit?.toString() || '').padEnd(20) +
        // (w.shortRange?.toString() || '').padEnd(20) +
        // (w.waterGfx?.toString() || '').padEnd(20) +
        (w.weaponClass?.toString() || '').padEnd(20) +
        (w.weaponEffect?.toString() || '').padEnd(20) +
        (w.weaponSubClass?.toString() || '').padEnd(20) +
        // (w.weaponWav?.toString() || '').padEnd(20) +
        // (w.weight?.toString() || '').padEnd(20) +
        ''
    return `${id.padEnd(30)}${weapon.name.padEnd(30)}${weapon.weaponSubClass?.padEnd(12) || "-"}${firePause.padEnd(12)}${(weapon.buildPoints ?? '-').toString().padEnd(12)}${(weapon.buildPower ?? '-').toString().padEnd(12)}${weight.padEnd(12)}${damage.padEnd(12)}${shortRange.padEnd(12)}${longRange.padEnd(12)}${factor.padEnd(12)}${radiusDamage.padEnd(12)}${(weapon.fireOnMove ?? '-').toString().padEnd(12)}${flightSpeed.padEnd(12)}${(weapon.numExplosions ?? '-').toString().padEnd(12)}${movement.padEnd(12)}${muzzleGfx.padEnd(15)}${flightGfx.padEnd(15)}${explosionWav.padEnd(15)}${weaponWav.padEnd(15)}`;







    // const firePause = w.firePause ? (w.firePause / 10).toFixed(1) : '-';
    // const weight = w.weight ? (w.weight / 10).toFixed(1) : '-';
    // const damage = w.damage ? (w.damage / 2).toFixed(1) : '-';
    // const radiusDamage = w.radiusDamage ? (w.radiusDamage / 100).toFixed(1) : '-';
    // const shortRange = w.shortRange ? (w.shortRange / 100).toFixed(1) : '-';
    // let longRange = w.longRange ? (w.longRange / 100).toFixed(1) : '-';
    // let factor = '-';
    //
    // if (shortRange !== '-' && longRange !== '-' && shortRange !== longRange) {
    //     factor = (w.longRange / w.shortRange).toFixed(2);
    // } else {
    //     longRange = '-';
    // }
    //
    // const flightSpeed = w.flightSpeed ? (w.flightSpeed / 100).toFixed(1) : '-';
    // const movement = w.movement ? w.movement.replace(/DIRECT/i, "D").replace(/HOMING/i, "H").replace(/INDIRECT/i, "I") : '-';
    // const muzzleGfx = (w.muzzleGfx ?? '-').replace(/\.ogg|\.pie/gi, '');
    // const flightGfx = (w.flightGfx ?? '-').replace(/\.ogg|\.pie/gi, '');
    // const explosionWav = (w.explosionWav ?? '-').replace(/\.ogg|\.pie/gi, '');
    // const weaponWav = (w.weaponWav ?? '-').replace(/\.ogg|\.pie/gi, '');


    // return `${id.padEnd(30)}${weapon.name.padEnd(30)}${weapon.weaponSubClass?.padEnd(12) || "-"}${firePause.padEnd(12)}${(weapon.buildPoints ?? '-').toString().padEnd(12)}${(weapon.buildPower ?? '-').toString().padEnd(12)}${weight.padEnd(12)}${damage.padEnd(12)}${shortRange.padEnd(12)}${longRange.padEnd(12)}${factor.padEnd(12)}${radiusDamage.padEnd(12)}${(weapon.fireOnMove ?? '-').toString().padEnd(12)}${flightSpeed.padEnd(12)}${(weapon.numExplosions ?? '-').toString().padEnd(12)}${movement.padEnd(12)}${muzzleGfx.padEnd(15)}${flightGfx.padEnd(15)}${explosionWav.padEnd(15)}${weaponWav.padEnd(15)}`;
}


// idsList = idsList.sort((a,b) =>  weaponsDataLower[a.toLowerCase()].weight < weaponsDataLower[b.toLowerCase()].weight ? 1 : -1 )
// Process and extract the relevant weapon data
const outputData = [legend, ...wepaonsList.map(({wzid,scid}) => {

    if (weaponsDataLower[wzid.toLowerCase()]) {
        return formatWeaponData(scid, weaponsDataLower[wzid.toLowerCase()]);
    } else {
        return `${wzid.padEnd(30)}NOT FOUND`;
    }
})].join('\n');

// Save the result to an output file
fs.writeFileSync('WEAPONS.txt', outputData);

console.log('Data extraction completed. Check output.txt');
