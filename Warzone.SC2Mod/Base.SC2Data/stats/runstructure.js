const fs = require('fs');

const researchsData = JSON.parse(fs.readFileSync('structure.json', 'utf8'));

// Convert keys to lowercase for case-insensitive search
// const resData = {};
// Object.keys(researchsData).forEach(key => {
//     resData[key.toLowerCase()] = researchsData[key];
// });

// const idsList = fs.readFileSync('idsresearch.txt', 'utf8').split('\n').map(id => id.trim()).filter(id => id);
// const idsCompare = fs.readFileSync('_researchesids.json', 'utf8')
// const idsCompareObj = JSON.parse(idsCompare)
// const idsCompareObj2 = JSON.parse(idsCompare)
// for(let id in idsCompareObj){
//     idsCompareObj2[id.toLowerCase()] = idsCompareObj[id]
// }

let idsList = Object.keys(researchsData)
idsList = idsList.sort((a,b) => researchsData[a].type > researchsData[b].type  ? -1 : 1)

// Define the legend with proper spacing
const legend = "id".padEnd(40) +
    "name".padEnd(40)+
    "type".padEnd(25)+
    "xxxx".padEnd(25)+
    "buildPoints".padEnd(25)+
    "buildPower".padEnd(25)+
    "thermal".padEnd(25)+
    "hitpoints".padEnd(25)+
    "armour".padEnd(25)+
    "resistance".padEnd(25)
let redComponents = {}

// Define the output format function
function formatresearchData(id, entity) {

    return  `${entity.id.padEnd(40)}` +
        `${entity.name.padEnd(40)}` +
        `${entity.type.padEnd(25)}` +
        `${entity.structureModel?.[0]?.padEnd(25)}` +
        `${(entity.buildPoints?.toString() || '-').padEnd(25)}` +
        `${(entity.buildPower?.toString() || '-').padEnd(25)}` +
        `${(entity.thermal?.toString() || '-').padEnd(25)}` +
        `${(entity.hitpoints?.toString() || '-').padEnd(25)}` +
        `${(entity.armour?.toString() || '-').padEnd(25)}` +
        `${(entity.resistance?.toString() || '-').padEnd(25)}`
}

// Process and extract the relevant research data
let outputData = [legend, ...idsList.map(id => {
    return formatresearchData(id, researchsData[id]);
})].join('\n');


// let researchLines = []
// for(let redComponent in redComponents){
//     let researchLine = redComponent.padEnd(30)  + redComponents[redComponent]
//     // let researchLine = redComponent
//     // while(redComponents[redComponents[redComponent]]){
//     //     researchLine += " -> " + redComponents[redComponent]
//     //     delete redComponents[redComponent]
//     // }
//     researchLines.push(researchLine)
// }
// outputData += '\n\n\n' + researchLines.join('\n');


// Save the result to an output file
fs.writeFileSync('structures.txt', outputData);

console.log('Data extraction completed. Check output.txt');

