import fs from 'fs/promises'
import path from "path";

const create = async () => {
    const path = './src/fs/files/fresh.txt'
        const content = 'I am fresh and young'

        try {
            await fs.writeFile(path, content, {
                encoding: "utf8",
                flag: "wx",
                mode: 0o666
            })
        } catch (e) {
            throw new Error('FS operation failed')
        }
};


await create();