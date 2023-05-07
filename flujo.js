let encabezado = document.getElementById("Encabezado");
let encabezado2 = document.getElementById("Encabezado2");
let nuevaFactura = document.getElementById("NuevaFactura"); 
let formLogin = document.getElementById("login");
let botonConfirmar = document.getElementById("Confirmar");
let interfaz = document.getElementById("Interfaz");
let fechaVenta = document.getElementById("FechaVenta");
let nombreVendedor = document.getElementById("nombreVendedor");
let fechaEntregaInput = document.getElementById("FechaEntrega");
let nuevoItem = document.getElementById("NuevoItem");
let tablaFactura = document.getElementById("ItemsFacturados");
let cantidadItems = document.getElementById("cantItems");
let cancelarFactura = document.getElementById("Cancelar");
let botonFinalizar = document.getElementById("Finalizar");
let descuentoInput = document.getElementById("Descuento");
let clienteInput = document.getElementById("Cliente");
let direccionInput = document.getElementById("Direccion");
let telefonoInput = document.getElementById("Telefono");
let totalArticulo = document.getElementById("PrecioTotal");
let cuentaCorriente = document.getElementById("CtaCte");
let metodoPago = document.getElementById("MedioPago");
let botonCancelar = document.getElementById("Cancelar");
let nroFactura = document.getElementById("NroFactura");
let ctaCteDisplay = document.getElementById("CtaCte");
let botonCtaCte = document.getElementById("botonCuentaCte");

nuevaFactura.onclick = () => {nuevaFactura.className = "Oculto";
encabezado.className = "Encabezado";
formLogin.className = "Login"
}

formLogin.addEventListener("submit", (e) => {e.preventDefault()
let usuario = document.getElementById("Vendedor").value;
let contrasena = document.getElementById("Contraseña").value;
if(verificarLogin(usuario, contrasena)){
    formLogin.className = "Oculto";
    encabezado2.className = "EncabezadoFactura";
    interfaz.className = "Interfaz";
    const i = datosLogin.findIndex(vendedor => vendedor.Usuario_vendedor === document.getElementById("Vendedor").value);
    nombreVendedor.innerText = datosLogin[i].Nombre_vendedor;
    nroFactura.innerText = "Factura n°: x-0001-"+(facturas.length+1).toString().padStart(10,0);
} else {
    let mensajeError = document.createElement("div");
    mensajeError.innerText = "Usuario o contraseña erróneos";
    formLogin.append(mensajeError);
}
})

clienteInput.value = ""
direccionInput.value = ""
telefonoInput.value = ""

botonCtaCte.addEventListener("click", () => {
    let buscadorCliente = document.createElement("div");
    buscadorCliente.innerHTML = '<input class="buscador" type="text" id="buscarNombre" placeholder="Busque por nombre"><button id="botonBuscarNombre">Buscar</button><input class="buscador" type="number" id="buscarNroCta" placeholder="Busque por número de cuenta"><button id="botonBuscarNumero">Buscar</button><br><ul id="resultados"></ul>';
    ctaCteDisplay.appendChild(buscadorCliente);
    let buscador = document.getElementById("buscarNombre");
    let buscador2 = document.getElementById("buscarNroCta");
    let botonBuscar = document.getElementById("botonBuscarNombre");
    let botonBuscar2 = document.getElementById("botonBuscarNumero")
    let resultados = document.getElementById("resultados");
    botonBuscar.onclick = () => {
        for (const iterator of cuentasCorrientes) {
            if (iterator.Cliente.toLowerCase().includes(buscador.value.toLowerCase())) {
                let resultado = document.createElement("li");
                resultado.innerText = iterator.Cliente;
                resultados.append(resultado);
                resultado.addEventListener("click", () => {
                    const clienteElegido = resultado.innerText;
                    let cerrarBuscador = ctaCteDisplay.removeChild(buscadorCliente);
                    clienteInput.value = clienteElegido;
                    ctaCteDisplay.innerText = iterator.NumeroCuenta;
                })
            }}
    }
    botonBuscar2.onclick = () => {
        for (const iterator of cuentasCorrientes) {
            if (iterator.NumeroCuenta === parseInt(buscador2.value)) {
                let resultado = document.createElement("li");
                resultado.innerText = iterator.Cliente;
                resultados.append(resultado);
                resultado.addEventListener("click", () => {
                    const clienteElegido = resultado.innerText;
                    let cerrarBuscador = ctaCteDisplay.removeChild(buscadorCliente);
                    clienteInput.value = clienteElegido;
                    ctaCteDisplay.innerText = iterator.NumeroCuenta;
                })
            }}
    }

})


let fechaHoy = luxon.DateTime.now().toLocaleString();
let fechaHoyISO = luxon.DateTime.now().toISODate();
fechaVenta.innerText = "Fecha de Venta: "+fechaHoy;
fechaEntregaInput.value = fechaHoyISO;
fechaEntregaInput.min = fechaHoyISO;
let fechaEntrega = fechaEntregaInput.value;
fechaEntregaInput.addEventListener("change", () => {fechaEntrega = fechaEntrega = fechaEntregaInput.value})

descuentoInput.value = 0
let descuento = descuentoInput.value;
descuentoInput.addEventListener("change", () => {
    descuento = descuentoInput.value;
}) 

let n = 0;
let totalFactura = 0;
nuevoItem.onclick = () => {
    n = n+1;
    cantidadItems.innerText = n;

    let nuevoArticulo = document.createElement("tr")
    nuevoArticulo.innerHTML = ('<td><input type="Number" id="codigo'+n+'"></td><td><span id="descripcion'+n+'"></span><button id="buscarDescrip'+n+'">Buscar</button></td><td><input type="Number" id="cantidad'+n+'"></td><td><span id="precioUnitario'+n+'"></span></td><td><span id="precioTotal'+n+'"></span></td><td><input type="Date" value="'+fechaEntrega+'" id="fechaCodigo'+n+'" min="'+fechaHoyISO+'"></td><button id="botonEliminar'+n+'">Eliminar</button>');
    tablaFactura.append(nuevoArticulo);
    
    const filaNumero = document.createAttribute("id");
    filaNumero.value = "Fila"+n;
    nuevoArticulo.setAttributeNode(filaNumero);
    const claseSeleccion = document.createAttribute("class");
    claseSeleccion.value = "NoSeleccionado"
    nuevoArticulo.setAttributeNode = claseSeleccion;
    
    let buscarCodigo = document.getElementById("codigo"+n);
    let buscarDescrip = document.getElementById("buscarDescrip"+n);
    let descripcion = document.getElementById("descripcion"+n);
    let precioUnitario = document.getElementById("precioUnitario"+n);
    let precioTotal = document.getElementById("precioTotal"+n);
    let cantidad = document.getElementById("cantidad"+n);
    let fechaCodigo = document.getElementById("fechaCodigo"+n).value;

    let eliminarItem = document.getElementById("botonEliminar"+n);
    eliminarItem.addEventListener("click", () => {
        n = n-1;
      cantidadItems.innerText = n;
      totalFactura = totalFactura - parseFloat(precioTotal.innerText.slice(1));
      totalArticulo.innerText = "$" + totalFactura;
      tablaFactura.removeChild(nuevoArticulo);
    });
      
    buscarCodigo.addEventListener("change", () => {
        if (articulos.find(codigo => codigo.Codigo === parseInt(buscarCodigo.value))) {
            const index = articulos.findIndex(codigo => codigo.Codigo === parseInt(buscarCodigo.value))
            descripcion.innerText = articulos[index].Descripcion;
            precioUnitario.innerText = "$"+(articulos[index].PrecioCompra*1.21+articulos[index].PrecioCompra*0.4*((1-descuento)/100));
        } else {
            descripcion.innerText = "¡El código ingresado no existe! Intente nuevamente";
        }
    })

    buscarDescrip.addEventListener("click", () => {
        let buscadorInterfaz = document.createElement("div");
        buscadorInterfaz.innerHTML = '<input class="buscador" type="text" id="buscador" placeholder="Busque una palabra clave"><button id="buscar">Buscar</button><br><ul id="resultados"></ul>';
        interfaz.appendChild(buscadorInterfaz);
        const clase = document.createAttribute("class");
        clase.value = "BuscadorDescripcion";
        let buscador = document.getElementById("buscador");
        let buscar = document.getElementById("buscar");
        let resultados = document.getElementById("resultados");
        buscar.onclick = () => {
            for (const iterator of articulos) {
                if (iterator.Descripcion.toLowerCase().includes(buscador.value.toLowerCase())) {
                    let resultado = document.createElement("li");
                    resultado.innerText = iterator.Descripcion;
                    resultados.append(resultado);
                    resultado.addEventListener("click", () => {
                        const descripcionElegida = resultado.innerText;
                        let cerrarBuscador = interfaz.removeChild(buscadorInterfaz);
                        descripcion.innerText = descripcionElegida;
                        buscarCodigo.value = iterator.Codigo;
                        precioUnitario.innerText = "$"+(iterator.PrecioCompra*1.21+iterator.PrecioCompra*0.4*((1-descuento)/100)).toFixed(2);

                    })
                }}
        }
    })

    
    cantidad.addEventListener("change", () => {
        if (precioTotal.innerText !== "") {
            totalFactura = totalFactura - parseFloat(precioTotal.innerText.slice(1));
        }
        precioTotal.innerText = "$"+(parseFloat(precioUnitario.innerText.slice(1))*cantidad.value);
        totalFactura = totalFactura + parseFloat(precioTotal.innerText.slice(1));
        totalArticulo.innerText = "$" + totalFactura;
        if(!(validarStock(buscarCodigo.value, cantidad.value, luxon.DateTime.fromISO(fechaCodigo)))){
            botonFinalizar.className = "Oculto";
            const botonBloqueado = document.createElement("button");
            botonBloqueado.innerText = "¡STOCK NO DISPONIBLE!";
            botonBloqueado.className = "Alerta"
            interfaz.appendChild(botonBloqueado);
            const botonAlerta = document.createElement("td");
            botonAlerta.innerHTML = "<button>REVISAR</button>";
            botonAlerta.className = "Alerta";
            document.getElementById("Fila"+n).appendChild(botonAlerta);

            botonAlerta.onclick = () => {
                let mensajeAlerta = document.createElement("div");
                mensajeAlerta.innerHTML = '<h3>STOCK NO DISPONIBLE</h3><br><p>El stock solicitado no está disponible. Pruebe alguna de las siguientes opciones:<br><ul><li>Facture otro artículo <li>Reduzca la cantidad <li id="cambiarTiempoDemora">Establezca la fecha de entrega para un plazo superior al tiempo de demora del proveedor</li></ul><br><button id="botonCerrar">Cerrar y continuar</button>'
                mensajeAlerta.classList.add("mensajeAlerta");
                document.querySelector("body").appendChild(mensajeAlerta);
                const botonCerrar = document.getElementById("botonCerrar");
                const aux = articulos.findIndex(art => art.Codigo === parseInt(buscarCodigo.value))
                const proveedor = articulos[aux].Proveedor;
                const aux2 = proveedores.findIndex(prov => prov.Proveedor === proveedor);
                const tiempoDemora = proveedores[aux2].TiempoDemora;
                document.getElementById("cambiarTiempoDemora").innerText = document.getElementById("cambiarTiempoDemora").innerText + "  (" + tiempoDemora + " días)"
                botonCerrar.onclick = () =>{
                    totalFactura = totalFactura - parseFloat(precioTotal.innerText.slice(1));
                    totalArticulo.innerText = "$"+totalFactura
                    buscarCodigo.value = "";
                    descripcion.innerText = "";
                    cantidad.value = "";
                    precioUnitario.innerText = "";
                    precioTotal.innerText = "";
                    fechaEntrega = fechaHoyISO;
                    mensajeAlerta.className = "Oculto";
                    botonAlerta.classList = "Oculto";
                    botonFinalizar.className = "";
                    let eliminarBotonBloqueado = interfaz.removeChild(botonBloqueado);  
                }
            }
        }
    })

}


botonFinalizar.onclick = () => {
    if (clienteInput.value !== "" && direccionInput !== "" && telefonoInput !== "" && totalFactura>0) {
        cerrarFactura();
        let colapsarTodo = document.querySelectorAll("div");
     colapsarTodo.forEach(element => {
        element.className = "Oculto";
        });
        let arrayAuxiliar = [];
        for (let index = 1; index <= n && arrayAuxiliar.length < document.querySelectorAll("tr").length; index++) {
            if (document.getElementById("codigo"+index)!== null){let nuevaLongitud = arrayAuxiliar.push("a");
            const aux = articulos.findIndex(art => art.Codigo == document.getElementById("codigo"+index).value);
            let proveedor = articulos[aux].Proveedor;
            const aux2 = proveedores.findIndex(prov => prov.Proveedor === proveedor);
            let tiempoDemora = proveedores[aux2].TiempoDemora;
            if (luxon.DateTime.fromISO(document.getElementById("fechaCodigo"+index).value) > luxon.DateTime.now().plus({days:tiempoDemora}) ) {
                generarOrdenCompra(parseInt(document.getElementById("codigo"+index).value), parseInt(document.getElementById("cantidad"+index), true))
            }
        }}   

    } else {
        const mensajeError2 = document.createElement("span");
        mensajeError2.innerText = "¡Rellene los datos faltantes!";
        interfaz.append(mensajeError2);
    }
    let mensajeFinal = document.createElement("div");
    mensajeFinal.className = "MensajeFinal";
    mensajeFinal.innerText = "La factura se ha realizado con éxito. Recargue la página para comenzar una nueva factura";
    document.querySelector("body").append(mensajeFinal);

}

botonCancelar.onclick = () => {
    let colapsarTodo = document.querySelectorAll("div");
    colapsarTodo.forEach(element => {
       element.className = "Oculto";
    })
    let mensajeFinal = document.createElement("div");
    mensajeFinal.className = "MensajeFinal";
    mensajeFinal.innerText = "La factura se ha cancelado. Recargue la página para comenzar una nueva factura";
    document.querySelector("body").append(mensajeFinal);
}