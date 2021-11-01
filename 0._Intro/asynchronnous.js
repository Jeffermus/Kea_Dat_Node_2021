// why:
// since Javascript is single-threaded (everything runs on the main thread)
// we want to avoid blocking 


// when
// requesting (over a network)
// database 
// user input
// I/O (file handling)

// Promise states:
// pending
// fulfilled 
    // resolved / rejected

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("shoot");
            resolve("Everyting went well");
        } catch {
            reject("OH NO!");
        }
    }, 4000);
})
.then(message => console.log("The message is:", message))
.catch(errorMessage => console.log("Error was:", errorMessage)); */

/* task Create a promise that resolves with "Noice" or rejects with "Damn" */
// no need to handle the promise
function nodeIsAMood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Noice");
            } catch {
                reject("Damn");
            }
        }, 3000);
    });
}

/* nodeIsAMood()
.then(console.log)
.catch(console.log); */


(async function asynchronousFunction() {
    try {
        const message = await nodeIsAMood();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})();

