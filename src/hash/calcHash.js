import  { createReadStream }  from 'node:fs'
import { argv } from 'node:process'
const {
    createHash
} = await import('crypto');
import path, {dirname} from "path";

const calculateHash = async () => {
    const nameFile = 'fileToCalculateHashFor.txt'
    const __dirname = dirname(argv[1])
    const filename = path.join(__dirname, 'files', nameFile)

    const hash = await createHash('sha256')
    const input = createReadStream(filename)
    input.on('readable', ()=>{
        const data = input.read();
        if (data) {
          hash.update(data)
        } else {
            console.log(`${nameFile} hash equal: ${hash.digest('hex')}`)

        }
    })
};

await calculateHash();