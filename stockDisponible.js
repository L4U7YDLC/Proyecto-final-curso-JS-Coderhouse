function validarStock(cod, cant, fecha) {
    const aux = articulos.findIndex(codigo => codigo.Codigo === parseInt(cod));
    let proveedor = articulos[aux].Proveedor;
    const aux2 = proveedores.findIndex(prov => prov.Proveedor === proveedor);
    let stockDisponible = articulos[aux].Stock;
    let tiempoDemora = proveedores[aux2].TiempoDemora;
    let stockPendiente = 0;

    if (fecha > luxon.DateTime.now().plus({days:tiempoDemora}) ) {
        return true
    }else{
        for (const iterator of ordenesCompra) {
            if (iterator.Codigo === cod) {
                if (fecha > luxon.DateTime.fromISO(iterator.fechaRecepcion)) {
                    stockDisponible = stockDisponible+ iterator.Cantidad;
                }
            }}
            for (const iterator of articulos[aux].PendientesEntrega){
                if(fecha > luxon.DateTime.fromISO(iterator.FechaEntrega)){
                    stockPendiente = stockPendiente + iterator.Cantidad;
                }
            }
            if ((stockDisponible-stockPendiente) >= cant) {
                return true
            } else {
                return false
            } 
        }}