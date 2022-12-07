const parseArgs = () => {
    try {
        process.argv.forEach((val, index, array) => {
            if (index > 1 && val.includes('--') && !(index % 2)) {
                console.log(`${val} is ${array[index + 1]}`)
            }
        })

    } catch (e) {
        console.error(e.message)
    }
};

parseArgs();