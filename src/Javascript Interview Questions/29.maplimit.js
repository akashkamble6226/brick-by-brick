// 1. What is mapLimit in JavaScript?

// mapLimit is an async utility function that works like Array.map()
// but limits the number of async operations running at the same time.

// Problem it solves
// When you run many async tasks together using Promise.all(), all tasks run in parallel.

// Example:
// await Promise.all(urls.map(fetchData));
// If urls contains 1000 items, then 1000 requests run at the same time, which can:

// overload API
// exceed rate limits
// consume too much memory
// crash the server

// So we limit concurrency.
// 👉 mapLimit = Run async tasks with a maximum number running at once


async function mapLimit(arr, limit, fun){
    let result = [];
    let index = 0;
    
    async function worker(){
        while(index < arr.length){
            let ind = index++;
            result[ind] = await fun(arr[ind])
        }
    }
    
    const workers = new Array(limit).fill(null).map(worker);
    await Promise.all(workers);
    return result;
}



function asyncFun(num){
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Fetched", num);
            res(num);
        }, 1000)
    })
}

mapLimit([1,2,3,4,5], 2, asyncFun)