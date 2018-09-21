var r= prompt("Ingrese radio de la circunferencia");
function area(r){
    if(r>0){
        console.log("El area de la circunferencia es : " + Math.PI*r**2);
    }
    else{
        console.log(-1);
    }
}
area(r);