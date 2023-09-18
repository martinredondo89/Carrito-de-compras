let listaDeCompras = [];
var cont = 1
do {
    var respuesta = prompt("Bienvenido! ¿Que fruta desceas comprar?");
    
    if (respuesta.length > 1) {
        listaDeCompras.push(respuesta);
        let parrafo = document.getElementById(cont)
        parrafo.textContent = cont + " " + respuesta
        cont++
    }
} while (confirm("Desea agregar otro elemento al carrito? "));

console.log("***** Lista de compras *****")
for (let i = 0; i < listaDeCompras.length; i++) {    
    console.log(listaDeCompras[i]);
}
console.log("****************************")

