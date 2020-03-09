const biscoitos = [
    { nome: "Cookie", marca: "Bauduco", venda: 12 },
    { nome: "Cookie", marca: "Toddy", venda: 30 },
    { nome: "Biscoito agua e sal", marca: "Bauduco", venda: 10 },
    { nome: "Biscoito maizena", marca: "Marilan", venda: 8 },
    { nome: "Biscoito chocolate", marca: "Marilan", venda: 15 }
]

// FOREACH
biscoitos.forEach(biscoito => {
    console.log(biscoito.nome)
});

// MAP
const nomeBiscoitos = biscoitos
.map(biscoito => biscoito.nome)

console.log(nomeBiscoitos);


console.log(nomeBiscoitos);

// FILTER
const bolachaNaoBiscoito = biscoitos.filter(bolacha => 
    bolacha.nome == 'Cookie')

const biscoitoBauduco = biscoitos.filter(function(biscoito) {
    if (biscoito.marca == 'Bauduco') {
        return true;
    }
});

const biscoitoBauduco2 = biscoitos
.filter(biscoito => biscoito.marca == 'Bauduco');

console.log(bolachaNaoBiscoito);
console.log(biscoitoBauduco);
console.log(biscoitoBauduco2);


//SORT

const ordemBiscoitos2 = biscoitos
.sort(function(biscoito1, biscoito2) {
    if(biscoito1.venda - biscoito2.venda) {
        return true;
    } 
});

const ordemBiscoitos = biscoitos
.sort((biscoito1, biscoito2) => biscoito1.venda - biscoito2.venda);

console.log(ordemBiscoitos);
console.log(ordemBiscoitos2);

//REDUCE

const totalDeVendas = biscoitos
.reduce((total, venda) => total += venda.venda)

console.log(totalDeVendas)

//Combinação dos métodos, soma de vendas dos biscoitos Bauduco

const somaBauduco = biscoitos
.filter(biscoito => biscoito.marca == 'Bauduco')
.map(biscoito => biscoito.venda)

console.log(somaBauduco);

const resultadoSoma = somaBauduco
.reduce((a, b) => a + b, 0)

console.log(resultadoSoma);


