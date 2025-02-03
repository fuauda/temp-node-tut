const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/first.txt');
writeFileSync('./content/aded.txt', 'adeded thing', {flag: 'a'})



console.log(first);
console.log(second.toString());


const { log } = require('console');
const {readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        log(err)
        return;
        
    }
    console.log(result)
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            log(result)
        })
    
})