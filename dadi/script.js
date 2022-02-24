const dadoCPU = parseInt(Math.random() * 6 + 1);
document.getElementById('cpu').innerHTML = 'CPU ha lanciato il dado:' + dadoCPU;
document.querySelector('button').addEventListener('click', function(){
    const dadoUser = parseInt(Math.random() * 6 + 1);
    document.getElementById('user').innerHTML = 'Hai lanciato il dado:' + dadoUser;
    
    if (dadoUser==dadoCPU){
        document.getElementById('result').innerHTML = 'DRAW';
    } else if (dadoUser>dadoCPU) {
        document.getElementById('result').innerHTML = 'YOU WIN!';
    } else {
        document.getElementById('result').innerHTML = 'CPU wins :(';
    }

})

