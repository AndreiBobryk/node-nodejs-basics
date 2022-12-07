import fs from 'fs/promises'
import path from "path";
const remove = async () => {
    try {
    const source = path.join('src', 'fs', 'files', 'fileToRemove.txt')
    await fs.rm(source)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await remove();