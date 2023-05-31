//creo gli array
const numeriGenerati = [];
const numeriIndovinati = [];
const numeriSbagliati = []
const numeri = []

//genero i numeri da indovinare
for (let i = 0; i < 5; i++){

    const numeroCasuale = Math.floor(Math.random() * 100);
    
    //metto i numeri casuali nell'array opportuno
    numeriIndovinati.push(numeroCasuale);
    
    //stampo i numeri sulla pagina
    const numeriStampati = document.createElement("div");

    numeriStampati.textContent = numeroCasuale;

    document.body.appendChild(numeriStampati);

}

//creazione del timeout e propt
setTimeout(function(){

    //facciamo scomparire i numeri stampati
    document.body.innerHTML = "";

//secondi prima che scompaiano i numeri a schermo
}, 30000);

setTimeout(function(){

    //creiamo i propt per chiedere i numeri
    let numeroInserito1 = parseInt(prompt("Inserisci il primo numero che hai visto precedentemente"));
    let numeroInserito2 = parseInt(prompt("Inserisci il secondo numero che hai visto precedentemente"));
    let numeroInserito3 = parseInt(prompt("Inserisci il terzo numero che hai visto precedentemente"));
    let numeroInserito4 = parseInt(prompt("Inserisci il quarto numero che hai visto precedentemente"));
    let numeroInserito5 = parseInt(prompt("Inserisci il quinto numero che hai visto precedentemente"));

    //controlliamo che sia un numero generato e inseriamolo nell'array
    if (numeriIndovinati.includes(numeroInserito1)) {
        numeri.push(numeroInserito1);
    } else {
        numeriSbagliati.push(numeroInserito1);
    }
    if (numeriIndovinati.includes(numeroInserito2)) {
        numeri.push(numeroInserito2);
    } else {
        numeriSbagliati.push(numeroInserito2);
    }
    if (numeriIndovinati.includes(numeroInserito3)) {
        numeri.push(numeroInserito3);
    } else {
        numeriSbagliati.push(numeroInserito3);
    }
    if (numeriIndovinati.includes(numeroInserito4)) {
        numeri.push(numeroInserito4);
    } else {
        numeriSbagliati.push(numeroInserito4);
    }
    if (numeriIndovinati.includes(numeroInserito5)) {
        numeri.push(numeroInserito5);
    } else {
        numeriSbagliati.push(numeroInserito5);
    }

    //stampo in pagina se e quali numeri sono stati indovinati 
    const numeriIndovinatiElement = document.createElement("div");
    numeriIndovinatiElement.textContent = "Numeri indovinati: " + numeri.join(", ");
    document.body.appendChild(numeriIndovinatiElement);

    // Stampiamo i numeri sbagliati
    const numeriSbagliatiElement = document.createElement("div");
    numeriSbagliatiElement.textContent = "Numeri sbagliati: " + numeriSbagliati.join(", ");
    document.body.appendChild(numeriSbagliatiElement);


//secondi prima che spunti il primo prompt
}, 30500)