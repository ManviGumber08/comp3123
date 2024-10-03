// callbacks.js

const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
    }, 500);
};

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};

// New methods: resolvedPromise and rejectedPromise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'resolved promise success!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('rejected promise error!'));
        }, 500);
    });
};

// Calling the promises and handling the results
resolvedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));

rejectedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));

// Existing calls
delayedSuccess();
delayedException();
