const costo_km= 0.21;

let km_passeggero= prompt("inserisci i km da effettuare")

let eta_passeggero= prompt("inserisci l'età ")

let costobiglietto= km_passeggero * costo_km;

let sconto_giovani=(costobiglietto) * 0.2;

let sconto_matusa=(costobiglietto) * 0.4;

 //alert(costobiglietto);

// scontistica età minori 

if (eta_passeggero < 18){
    
    let biglietto_giovani= costobiglietto - sconto_giovani +"€";
    alert(biglietto_giovani);
    console.log(biglietto_giovani);

}

if(eta_passeggero > 65){
    let biglietto_matusa=costobiglietto - sconto_matusa +"€";
    alert(biglietto_matusa);
    console.log(biglietto_matusa);
}

console.log(costobiglietto);
