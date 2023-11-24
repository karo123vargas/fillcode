//Encontrar los N primeros pares 

function encontrarPares(){
    let n = parseInt(prompt("Ingrese un numero por favor"));
    let array = [];

    for(let i = 1; i <= n; i++){
    array.push(i*2);
    }
    alert(`primeros ${n} pares: ${array}`)
}