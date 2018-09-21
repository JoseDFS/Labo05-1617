var n = prompt("Ingrese numero a convertir a binario");
function binario(numero){
    var cad="";
    while(n>=0){
        n=n/2;
        cad=cad + toString(n%2);
    }
    console.log(cad);

}
binario(n);