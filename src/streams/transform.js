import stream from 'stream'
import { stdin, stdout} from "node:process";


const transform = async () => {

    const reverseStream = new stream.Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("") + '\n';
            callback(null, reversedData);
        }
    });
    stdin.pipe(reverseStream).pipe(stdout)

}



 await transform();
