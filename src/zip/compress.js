import zlib from 'zlib';
import fs from 'fs'
import path, {dirname} from "path";
import {argv} from "node:process";


const compress = async () => {
    const gzip = zlib.createGzip()
    const nameFileInput = 'fileToCompress.txt'
    const nameFileOutput = 'archive.gz'
    const __dirname= dirname(argv[1])
    const source = path.join(__dirname, 'files', nameFileInput)
    const destination = path.join(__dirname, 'files', nameFileOutput)
    const input = fs.createReadStream(source)
    const output = fs.createWriteStream(destination)
        .on('finish', async () => await fs.promises.rm(source))
    input.pipe(gzip).pipe(output)

};

await compress();