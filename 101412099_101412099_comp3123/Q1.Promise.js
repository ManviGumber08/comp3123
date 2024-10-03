export const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved promise success!');
        }, 500);
    });
};

export const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Rejected promise error!'));
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));

rejectedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));
