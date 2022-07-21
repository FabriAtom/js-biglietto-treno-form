
document.getElementById('genera').addEventListener('click', function(){
    let numeroEta = document.getElementById('eta').value;
    let numeroKm = document.getElementById('distanza').value;
    let nome = document.getElementById('username').value;
    const tariffa = 0.21;

let prezzo = tariffa * numeroKm;

if (numeroEta < 18) {
    prezzo = prezzo - (prezzo * 0.2);


}else if (numeroEta > 65) {
    prezzo = prezzo - (prezzo * 0.4);
}

document.getElementById('')
document.getElementById('risultato-prezzo').innerHTML = prezzo;
});