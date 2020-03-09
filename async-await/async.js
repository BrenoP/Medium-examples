// const gatos = ['peste negra', 'furioso', 'gatrito', 'Gerson']

// let contaGatos = gatos.length

// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Você tem " + contaGatos + " gatos")
//     }, 3000)
// })

// let promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("fail")
//     }, 4000)
// })

// promise.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// }) 
// promise2.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// }) 

// async function main() {
//     try {
//         let executarPromise1 = await promise;
//         console.log(executarPromise1)
//         let executarPromise2 = await promise2;
//         console.log(executarPromise2)
//     } catch(err) {
//         console.log('deu erro ' + err)
//     }

// }

// main();

const gatos = ['peste negra', 'furioso', 'gatrito', 'Gerson']

async function main() {
    try {
        if(await contandoGatos(gatos.length) == 3) {
            console.log('Eu tenho 3 gatos')
        }
        if(await contandoGatos(gatos.length) == 4) {
            console.log('Eu tenho 4 gatos')
        }
    } catch(err) {
        console.log(err)
    }
}

main();

function contandoGatos(param) {
    return new Promise((res, rej) => {
    setTimeout(() => {
        res(param)
    }, 3000)
})
}

console.log('Todo o resto da aplicação')