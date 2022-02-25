let check = false;
const listaStudenti = [
    'luca.andaloro4@gmail.com',
    'aleballabio05@gmail.com',
    'luigibardellagerbi@gmail.com',
    'massimo.battinelli@gmail.com',
    'cristianbricicaru.cb@gmail.com',
    'paolo.calafiore.90@gmail.com',
    'Johncalia900@gmail.com',
    '1991sidra@gmail.com',
    'aldoleo83@gmail.com',
    'michela.colangelo@gmail.com',
    'dnl.desimone@gmail.com',
    'marziodellarocca14@gmail.com',
    'samueledellarocca95@gmail.com',
    'g.hongoroo@gmail.com',
    'mattia.las28@gmail.com',
    'kristianllambro@gmail.com',
    'lucalobianco91@gmail.com',
    'lauramargherita25@gmail.com',
    'maxmartino33@gmail.com',
    'giuseppe.m1995@gmail.com',
    'shary.mirko@gmail.com',
    'federicomura98@gmail.com',
    'camilla.palombi14@gmail.com',
    'mg.pasinetti@gmail.com',
    'giacomo.passariello@gmail.com',
    'piraspiergiorgio5@gmail.com',
    'esseppidefi@gmail.com',
    'erikasarleti00@gmail.com',
    'matteo.segattini2@gmail.com',
    'stortini.study@gmail.com',
    'antonio.straziota10@gmail.com',
    'adelintanasa.d@gmail.com',
    'startaglia89@gmail.com',
    'alessandrotucci@gmail.com',
    'a.uva1988@gmail.com',
    'alexviti12@gmail.com'
];

document.querySelector('input:last-of-type').addEventListener('click', function () {
    const mail = document.getElementById("mail").value;

    for (let i = 0; i < listaStudenti.length; i++) {
        if (mail == listaStudenti[i]) {
            check = true;
        }
    }

    if (check) {
        document.querySelector('div').innerHTML = "Accesso consentito";
        check = false;
    } else {
        document.querySelector('div').innerHTML = "Accesso negato"
    }
}
)