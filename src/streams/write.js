import {stdout, stdin, argv} from 'node:process'
import path, {dirname} from "path";
import fs from 'fs';

const write = async () => {
    stdout.write('Please, enter text:\n')
    const nameFile = 'fileToWrite.txt'
    const __dirname= dirname(argv[1])
    const filename = path.join(__dirname, 'files', nameFile)
    const output = fs.createWriteStream(filename)
    process.on('exit', () => stdout.write('Good luck!'));

    stdin.on('data', (chunk) => {
        output.write(chunk);
    });
    stdin.on('error', (error) => console.log('Error', error.message));
    process.on('SIGINT', () => {
        process.exit(0);
    });

};

await write();