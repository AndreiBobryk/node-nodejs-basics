import fs from 'fs/promises'
const copy = async () => {
    try {
        const source = './src/fs/files'
        const destination = './src/fs/files'
        await fs.cp(source, destination, {errorOnExist: true, force: false, recursive: true})
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await copy();