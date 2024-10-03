export const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            return reject(new Error('Input must be an array.'));
        }
        const lowerCasedWords = mixedArray
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());
        resolve(lowerCasedWords);
    });
};

lowerCaseWords(['Hello', 123, 'WORLD', true, 'JaVaScRiPt'])
    .then(result => console.log(result))
    .catch(err => console.error(err));
