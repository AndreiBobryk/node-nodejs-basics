import zlib from 'zlib';
import fs from 'fs'
import path, {dirname} from "path";
import {argv} from "node:process";

const decompress = async () => {
    const unzip = zlib.createUnzip()
    const __dirname= dirname(argv[1])
    const nameFileInput = 'archive.gz'
    const nameFileOutput = 'fileToCompress.txt'
    const source = path.join(__dirname, 'files', nameFileInput)
    const destination = path.join(__dirname, 'files', nameFileOutput)
    const input = fs.createReadStream(source)
    const output = fs.createWriteStream(destination)
        .on('finish', async () => await fs.promises.rm(source))
    input.pipe(unzip).pipe(output)



};

await decompress();