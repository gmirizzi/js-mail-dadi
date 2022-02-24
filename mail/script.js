let check = false;
const mail = prompt('Inserisci la tua mail');
const listaStudenti = ['luca.andaloro4@gmail.com', 'aleballabio05@gmail.com', 'luigibardellagerbi@gmail.com'];

for (let i = 0; i < listaStudenti.length; i++) {
    if ( mail == listaStudenti[i] ) {
        check = true;
    }    
}

if (check == true) {
    console.log ('ACCESSO CONSENTITO')
} else {
    console.log ('ACCESSO NEGATO')
}
