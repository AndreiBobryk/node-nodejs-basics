const parseEnv = () => {
    const prefix = 'RSS_'
    const needEnvVariablesKeys = Object.keys(process.env).filter(key => key.includes(prefix))
    needEnvVariablesKeys.forEach(key => {
        const output = key + '=' + process.env[key]
        console.log(output)
    })
};

parseEnv();