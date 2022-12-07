import fs from 'fs/promises'
import path, {dirname} from "path";
import {fileURLToPath} from 'url';


async function exists(path) {
    try {
        await fs.access(path)
        return true
    } catch (e) {
        return false

    }
}

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const source = path.join(__dirname, 'files', 'wrongFilename.txt')
        const destination = path.join(__dirname, 'files', 'properFilename.md')
        const isDestinationPathFile = await exists(destination)
        const isSourcePathFile = await exists(source)
        if (isDestinationPathFile || !isSourcePathFile) {
            throw new Error('FS operation failed')
        }
        await fs.rename(source, destination)
    } catch (e) {
        console.error(e.message)
    }

};

await rename();