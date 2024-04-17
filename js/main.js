// condizioni iniziali
const costo_km= 0.21;

let km_passeggero= prompt("inserisci i km da effettuare")

let eta_passeggero= prompt("inserisci l'età ")

let costo_biglietto= km_passeggero * costo_km;

let costo_biglietto_arrotondato=costo_biglietto.toFixed(2);

let sconto_giovani=(costo_biglietto) * 0.2;

let sconto_matusa=(costo_biglietto) * 0.4;

console.log(costo_biglietto_arrotondato);

// scontistica età minori 

if (eta_passeggero < 18){
    
    let biglietto_giovani= costo_biglietto - sconto_giovani /*+ €*/;
    let biglietto_giovani_arrotondato= biglietto_giovani.toFixed(2);
    alert(biglietto_giovani_arrotondato);
    console.log(biglietto_giovani_arrotondato);

}

if(eta_passeggero > 65){
    let biglietto_matusa=costo_biglietto - sconto_matusa +"€";
    alert(biglietto_matusa);
    console.log(biglietto_matusa);
}

