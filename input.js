const readline = require("readline"); //readline 모듈

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
let input = [];

rl.on("line", (line) => {
    if (!count) {
        count = Number(line); //count가 없을때,
    } else {
        input.push(line);
        if (input.length === count) {
            main();
            rl.close()
        }
    }
});


function main() {
    console.log(input);
}
