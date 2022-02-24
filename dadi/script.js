const dadoUser = parseInt(Math.random() * 6 + 1);
console.log('User:'+dadoUser)
const dadoCPU = parseInt(Math.random() * 6 + 1);
console.log('CPU:'+dadoCPU)

if (dadoUser==dadoCPU){
    console.log('draw');
} else if (dadoUser>dadoCPU) {
    console.log('user wins');
} else {
    console.log('CPU wins');
}