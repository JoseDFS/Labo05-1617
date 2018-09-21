var n = prompt("Ingrese el enesimo termino de fibonacci");
function fibo(n){
    var x = 1;
    var aux=0;
    var fib=0;
    if(n==1){
        console.log(0);
    }
    if(n==2){
        console.log(0);
        console.log(1);
    }
    else{
        console.log(0);
        console.log(1);
        for (let i=1;i <= n-2;i++){
            console.log(fib = x + aux);
            aux=x;
            x=fib;
        }
    }
}
fibo(n);
