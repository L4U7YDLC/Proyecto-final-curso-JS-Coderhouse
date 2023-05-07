function articulo(cod, desc, prov) {
    this.codigo = cod;
    this.descripcion = desc;
    this.proveedor = prov;
    this.Stock = 0;
}

function generarOrdenCompra(cod, cant, cliente) {
    const serialComprobante = ordenesCompra.length + 1;
    const i = articulos.findIndex(codigo => codigo.Codigo == cod);
    let proveedor = articulos[i].Proveedor;
    const i2 = proveedores.findIndex(prov => prov.Proveedor === proveedor);
    let tiempoDemora = proveedores[i2].TiempoDemora;
    let fechaCarga = luxon.DateTime.now();
    let nombreCliente = "";
    if (cliente) {
        nombreCliente = clienteInput.value;
    } else {
        nombreCliente = "stock";
    }
    const objetoAuxiliar = {};
    objetoAuxiliar.NumeroOrden = "OC-0001-"+serialComprobante.toString().padStart(10, 0);
    objetoAuxiliar.Proveedor = proveedor;
    objetoAuxiliar.ParaCliente = {Valor: cliente, Cliente: nombreCliente};
    objetoAuxiliar.Codigo = cod;
    objetoAuxiliar.Cantidad = cant;
    objetoAuxiliar.FechaCarga = fechaCarga
    objetoAuxiliar.FechaRecepcion = fechaCarga.plus({days: tiempoDemora});
        let anadir = ordenesCompra.push(objetoAuxiliar);
    localStorage.setItem("ordenesCompra", JSON.stringify(ordenesCompra));
}

function verificarLogin(usuario, contrasena) {
    const i = datosLogin.findIndex(vendedor => vendedor.Usuario_vendedor === usuario);
    if (datosLogin.find(vendedor => vendedor.Usuario_vendedor === usuario) && datosLogin[i].Contraseña_vendedor === contrasena )  {
        return true
    } else {
        return false
    }
}

function cerrarFactura() {
    if (clienteInput.value !== "" && direccionInput !== "" && telefonoInput !== "" && totalFactura>0) {
        const factura = {};
        let serialComprobante = facturas.length + 1;
        const numeroFactura = "x-0001-"+ serialComprobante.toString().padStart(10, 0);
        factura.NumeroComprobante = numeroFactura;
        const nombreCliente = clienteInput.value;
        factura.Cliente = nombreCliente;
        const numeroCtaCte = cuentaCorriente.innerText;
        factura.NroCuenta = numeroCtaCte;
        const medioDePago = metodoPago.value;
        factura.MedioPago = medioDePago;
        const direcc = direccionInput.value;
        factura.Direccion = direcc;
        const tel = telefonoInput.value;
        factura.Telefono = tel;
        factura.Vendedor = nombreVendedor.innerText;
        factura.Descuento = descuento;
        factura.TotalFactura = totalFactura;
        const articulosFacturados = [];
        const arrayAuxiliar = [];
        let codigoFacturado = 0;
        let cantidadFacturada = 0;
        let fechaEntrega = "";
            for (let index = 1; index <= n && arrayAuxiliar.length < document.querySelectorAll("tr").length; index++) {
                if (document.getElementById("codigo"+index)!== null) {
                let nuevaLongitud = arrayAuxiliar.push("a");
                codigoFacturado = document.getElementById("codigo"+index).value;
                cantidadFacturada = document.getElementById("cantidad"+index).value;
                fechaEntrega = document.getElementById("fechaCodigo"+index).value;
                let objetoAuxiliar = {Codigo: codigoFacturado, Cantidad: cantidadFacturada, FechaEntrega: fechaEntrega};
                let agregar = articulosFacturados.push(objetoAuxiliar);
                const aux = articulos.findIndex(cod => cod.Codigo === parseInt(codigoFacturado));
                delete objetoAuxiliar.Codigo;
                objetoAuxiliar.Cliente = nombreCliente;
                let agregarPendiente = articulos[aux].PendientesEntrega.push(objetoAuxiliar);
            }
        }
        factura.articulos = articulosFacturados;
        let anadir = facturas.push(factura);
        localStorage.setItem("facturas", JSON.stringify(facturas));
        localStorage.setItem("articulos", JSON.stringify(articulos));
        
        if (medioDePago === "CuentaCte") {
            const index = cuentasCorrientes.findIndex(cliente => cliente.NumeroCuenta === numeroCtaCte);
            cuentasCorrientes[index].SaldoAdeudado = parseFloat(cuentasCorrientes[index].SaldoAdeudado.slice(1))+totalFactura;
        }

    }
}

