const fs = require('fs');

// Read the JSON file
// const researchsData = JSON.parse(fs.readFileSync('researchs.json', 'utf8'));
const researchsData = JSON.parse(fs.readFileSync('research.json', 'utf8'));

// Convert keys to lowercase for case-insensitive search
const resData = {};
Object.keys(researchsData).forEach(key => {
    resData[key.toLowerCase()] = researchsData[key];
});

const idsList = fs.readFileSync('idsresearch.txt', 'utf8').split('\n').map(id => id.trim()).filter(id => id);
const idsCompare = fs.readFileSync('_researchesids.json', 'utf8')
const idsCompareObj = JSON.parse(idsCompare)
const idsCompareObj2 = JSON.parse(idsCompare)
for(let id in idsCompareObj){
    idsCompareObj2[id.toLowerCase()] = idsCompareObj[id]
}

// Define the legend with proper spacing
const legend = "id".padEnd(35) +
    "name".padEnd(45)+
    "icon".padEnd(15)+
    "Points".padEnd(8)+
    "Power".padEnd(8)+
    "redStructures".padEnd(30)+
    "researchResults".padEnd(100) +
    "upgradedParts".padEnd(100)

let redComponents = {}

// Define the output format function
function formatresearchData(id, research) {

    if(!research){
        return id
    }

    let icon = research.iconID.replace("IMAGE_RES_","")


    let resultString = ""

    if(research.results?.length > 0){
        resultString = "  IMPROVE: " + research.results.map(r => `${r.class}.${r.filterValue?.replace(/[ -]/g,"")}.${r.parameter}.${r.value}`).join("  ")
    }
    if(research.resultStructures){
        resultString += "  STRUCTURE: " + research.resultStructures.join("  ")
        icon = getSCID(research.resultStructures[0]) || "." + research.resultStructures[0]
    }
    if(research.redStructures){
        resultString += "  RED:  " + research.redStructures.join("  ")
        for(let i =0 ; i < research.redStructures.length ; i ++ ){
            if(!redComponents[research.redStructures[i]] )redComponents[research.redStructures[i]] = ""
            redComponents[research.redStructures[i]] += " " + research.resultStructures[0]
        }
    }
    if(research.resultComponents){
        resultString += "  COMPONENT: " + research.resultComponents.join("  ")

        icon = getSCID(research.resultComponents[0])  || "." + research.resultComponents[0]
    }
    if(research.redComponents){
        resultString += "  RED:  " + research.redComponents.join("  ")
        for(let i =0 ; i < research.redComponents.length ; i ++ ){
            if(!redComponents[research.redComponents[i]] )redComponents[research.redComponents[i]] = ""
            redComponents[research.redComponents[i]] += " " +  research.resultComponents[0]
        }
    }

    let researchPoints = research.researchPoints ? +research.researchPoints / 100  :null


    function getSCID(req) {
        return Object.keys(idsCompareObj2)[Object.values(idsCompareObj2).map(i=> i.toLowerCase()).indexOf(req.toLowerCase())]
    }
    let requiredString = research.requiredResearch ? research.requiredResearch.map(getSCID).join("  ") : null

    return ''+
        `${id.padEnd(40)}`+
        // `${research.name.padEnd(45)}`+
        `${icon.padEnd(30)}`+
        // `${(researchPoints ?? '-').toString().padEnd(8)}`+
        // `${(research.researchPower ?? '-').toString().padEnd(8)}`+
        resultString.padEnd(200)
        // `   REQUIRED: ${(requiredString ?? '-').toString().padEnd(100)}`;
}

// let idsList = Object.keys(resData)
// idsList = idsList.sort((a,b) => resData[a].results && !resData[b].results ? -1 : (resData[a].resultComponents && !resData[b].resultComponents ? -1 : 1))




// Process and extract the relevant research data
let outputData = [legend, ...idsList.map(id => {
    let wzid = idsCompareObj2[id.toLowerCase()]
    return formatresearchData(id, resData[wzid]);
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
fs.writeFileSync('research.txt', outputData);

console.log('Data extraction completed. Check output.txt');

