function articulo(cod, desc, prov) {
    this.codigo = cod;
    this.descripcion = desc;
    this.proveedor = prov;
    this.Stock = 0;
}

function comprar(cod, cant) {
        if (cod > articulos.length) {
            alert("El articulo ingresado no existe. Intente nuevamente")
        } else {
            let i = cod-1;
            articulos[i].Stock = articulos[i].Stock + cant
        }     
}

comprar(1, 100);
comprar(2, 70);
comprar(3, 70);
comprar(4, 50)
comprar(5, 10000);
comprar(4, 30);
comprar(6, 2000);
comprar(7, 2000);
comprar(8, 130);
comprar(9, 6000);
