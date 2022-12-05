// const transform = async () => {
//     // Write your code here
// };

import fs from 'fs'
import stream from 'stream'
import {dirname} from "path";
import {argv, stdin} from "node:process";
import path from "path";
function reverse(filePath) {
    const readStream = fs.createReadStream(filePath);
    const reversedDataFilePath = filePath.split('.')[0] + '-reversed.'+ filePath.split('.')[1];
    const writeStream = fs.createWriteStream(reversedDataFilePath);

    const reverseStream = new stream.Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });

    stdin.on('data', (chunk) => {
        reverseStream.transform(chunk).pipe(writeStream).on('finish', () => {
            console.log(`Finished reversing the contents of ${filePath} and saving the output to ${reversedDataFilePath}.`);
        });
    });




}

    const nameFile = 'fileToWrite.txt'
    const __dirname= dirname(argv[1])
    const filename = path.join(__dirname, 'files', nameFile)
reverse(filename)

// await transform();