console.log(1)

const promise = new Promise((resolve) => {
    resolve('promise data')
})

promise.then(data => console.log(data))

for(let i = 0; i <= 100; i++){
    console.log(i)
}