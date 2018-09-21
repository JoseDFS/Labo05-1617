var n = prompt("Ingrese un numero al que se le sacara el valor absoluto");
function absol(n){
    if(n<0){
        n*=(-1);
    }
    console.log("El valor absoluto es: " + n);
}
absol(n);