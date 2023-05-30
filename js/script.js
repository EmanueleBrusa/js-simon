//creo gli array
const numeriGenerati = [];
const numeriIndovinati = [];

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