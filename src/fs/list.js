import fs from 'fs/promises'
import path from "path";
const list = async () => {
    try {
        const source = path.join('src','fs', 'files')
        const filesInFolder = await fs.readdir(source)
        for (const file of filesInFolder) {
            console.log(file)

        }


    } catch (e) {
        console.error(e);

        throw new Error('FS operation failed')

    }
};

await list();