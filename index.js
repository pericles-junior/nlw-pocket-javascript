// // Hello, world!
// mensagem = "Hello, I!"

// {
//     const mensagem = "Hello, world!"
//     console.log(mensagem)
// }

// console.log(mensagem);
// // console = objeto / log = função

// arrays, objetos
// let meta = {
//     value: 'ler um livro por mês',
//     checked: false
// }

// let metas = [
//     meta,
//     {
//         value: "estudar programação 1h ou mais todos os dias",
//         checked: false
//     }
// ]

// console.log(metas[1].value)

// function // arrow function
// const criarMeta = () => {}

// function criarMeta() {}

// const start = () => {
//     let count = 0
//     while(count < 10){
//         console.log(count)
//         count++
//     }
// }

// start()

const start = () => {

    while(true) {
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()