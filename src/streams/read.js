import fs from 'fs'
import path, {dirname} from "path";
import { argv } from 'node:process'

const nameFile = 'fileToRead.txt'
const __dirname= dirname(argv[1])
const filename = path.join(__dirname, 'files', nameFile)
const read = async (readable) => {

    readable.setEncoding('utf8')
    let data =''
    for await (const chunk of readable)  {
        data += chunk
    }
    process.stdout.write(data)
};

await read(fs.createReadStream(filename));