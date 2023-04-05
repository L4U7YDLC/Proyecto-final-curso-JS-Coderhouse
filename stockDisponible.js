let validacion = false;

while (!validacion) {

cliente = prompt("Ingrese el nombre del cliente");
articuloVendido = parseInt(prompt("Ingrese el código del artículo deseado"));
cantidad = parseInt(prompt("Cantidad:"));

if (articuloVendido > articulos.length || articuloVendido < 1) {
    alert("El código ingresado no existe")
 } else {
    validacion = true;
 }
}

let stockPendiente = 0
for (const i of articulos[articuloVendido-1].PendientesEntrega) stockPendiente += i.Cantidad;

let stockDisponible = articulos[articuloVendido-1].Stock - stockPendiente;

let aux = 0;
while (aux !== "a") {
if (cantidad > stockDisponible) {
    alert("No hay stock suficiente de este artículo. ¿Desea encargar al proveedor(1) o refacturar(2)?");
    aux = parseInt(prompt("Inserte su decisión"));

    if (aux === 1) {
        comprar(articuloVendido, cantidad);
        aux = "a"
    } else if(aux === 2) {
        articuloVendido = parseInt(prompt("Ingrese el código del artículo deseado"));
        cantidad = parseInt(prompt("Cantidad:"));
    } else {
        alert("Inserte una opción válida")
    }
} else {
    aux = "a"
    articulos[articuloVendido-1].PendientesEntrega.push({"Cliente": cliente, "Cantidad": cantidad})
    console.log("La venta se ha realizado con éxito!");
}}

console.table(articulos);