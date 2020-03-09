let promise = new Promise(res => {
    setTimeout(() => {
        res('Deu certo yooooo')
    }, 2000)
})

promise.then(res => {
    console.log(res)
})

//segundo valor entendido como reject

let promiseReject = new Promise((res, rej) => {
    setTimeout(() =>{
        rej('Rejeitado')
    }, 3000)
})

promiseReject.then(res => {
    console.log(res)
})

//como tratar o reject 

let promiseTreat = new Promise((res, rej) => {
    setTimeout(() =>{
        rej('tratamento: ')
    }, 2000)
})

promiseTreat
.then(res => {
    console.log(res + " resultado")
})
.catch(err => {
    console.log(err + " rejeitado")
})

// //Resolver todas as promises

Promise.all([promise, promiseReject, promiseTreat])
.then((res1, res2) => {
    console.log('todas as promises foram resolvidas ' + res1 + "," + res2 + ",")
})
.catch((err1, err2) => {
    console.log('Alguma promise foi rejeitada ' + err1 + "," + err2 + ",")
})

// //Encadeamento 

let promise1 = new Promise(res => {
    setTimeout(() => {
        res('passou 2 segundos')
    }, 2000)
})

let promise2 = new Promise(res => {
    setTimeout(() => {
        res('passou 3 segundos')
    }, 3000)
})

let promise3 = new Promise(res => {
    setTimeout(() => {
        res('passou 4 segundos')
    }, 4000)
})

promise1.then(res => {
    console.log('passo 1 do encadeamento ' + res)
    promise2.then(res2 => {
        console.log('passo 2 do encadeamento ' + res2)
        promise3.then(res3 => {
            console.log('passo 3 do encadeamento ' + res3)
        })
    })
})
.catch(err => {
    console.log('não foi :/')
})