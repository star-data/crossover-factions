const fs = require('fs');

// Read input file
const inputFile = 'requirements.txt';
const outputFile = 'requirements2.txt';

// Read file content and split into lines
const lines = fs.readFileSync(inputFile, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line);

// Remove duplicates while preserving order
const seen = new Set();
const uniqueLines = lines.filter(line => {
    if (seen.has(line)) return false;
    seen.add(line);
    return true;
});

// Write output file
fs.writeFileSync(outputFile, uniqueLines.join('\n'));

console.log('Processing completed. Check output.txt');