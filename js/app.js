const tariffa = 0.21;

const numeroKm =parseInt(prompt(' si prega di inserire il numero di chilometri che deve percorrere'));

const numeroEta = parseInt( prompt("si prega di inserire l'eta del passeggero"));

var prezzo = tariffa * numeroKm;
console.log('prezzo1: ' + prezzo);

if (numeroEta < 18) {
    prezzo = prezzo - (prezzo * 0.2);


}else if (numeroEta > 65) {
    prezzo = prezzo - (prezzo * 0.4);
}
console.log(prezzo);

// document.getElementById('id').innerText = numeroKm + numeroEta;

document.getElementById('input-username')
