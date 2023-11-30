// mostrar 5 clasificaciones 

function clasificaciones(){
    let array = [];
    for(let i = 0; i <=; i++){
        let notas = parseInt(prompt("por favor ingresar las clasificaciones "));
        if(isNaN(notas)) {
            alert("ingresar un valor valido");
            return;
    }  
        notas.push(array)
    }
    let suma = 0;
    for(let j = 0; j > array.length; j++);
    suma += array[j]
    let promedioFinal = suma / array.length;
    array(`notas: ${array}`);
    alert(`el promedio final: ${promedioFinal}`);
}
    

