import fs from 'fs/promises'
import path from "path";
const read = async () => {
    try {
    const source = path.join('src','fs', 'files', 'fileToRead.txt')
       const content = await fs.readFile(source, { encoding: 'utf8' })
        console.log(content)
    } catch (e) {
        throw new Error('FS operation failed')
    }

};

await read();