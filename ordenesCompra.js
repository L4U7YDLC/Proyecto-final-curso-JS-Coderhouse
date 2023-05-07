const ordenesCompraObjeto = [
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"1"/*nro serial*/,
        Proveedor: "ABB",
        ParaCliente : {
            Valor: true,
            Cliente : "Cliente 1"
        },
        Codigo: 1,
        Cantidad: 10,
        FechaCarga: "2022-12-31",
        FechaRecepcion: "2023-06-01"
    },
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"2"/*nro serial*/,
        Proveedor: "ABB",
        ParaCliente : {
            Valor: true,
            Cliente : "Cliente 1"
        },
        Codigo: 3,
        Cantidad: 2,
        FechaCarga: "2022-12-31",
        FechaRecepcion: "2023-06-01"
    },
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"3"/*nro serial*/,
        Proveedor: "ABB",
        ParaCliente : {
            Valor: true,
            Cliente : "Cliente 3"
        },
        Codigo: 3,
        Cantidad: 250,
        FechaCarga: "2023-04-17",
        FechaRecepcion: "2023-09-16"
    },
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"4"/*nro serial*/,
        Proveedor: "Gen-Rod",
        ParaCliente : {
            Valor: true,
            Cliente : "Cliente 3"
        },
        Codigo: 8,
        Cantidad: 15,
        FechaCarga: "2023-04-17",
        FechaRecepcion: "2023-07-18"
    },
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"5"/*nro serial*/,
        Proveedor: "Gen-Rod",
        ParaCliente : {
            Valor: true,
            Cliente : "Cliente 3"
        },
        Codigo: 9,
        Cantidad: 700,
        FechaCarga: "2022-12-31",
        FechaRecepcion: "2023-07-18"
    },
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"6"/*nro serial*/,
        Proveedor: "Electro Cordoba",
        ParaCliente : {
            Valor: true,
            Cliente : "Cliente 5"
        },
        Codigo: 6,
        Cantidad: 100,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-06-02"
    },
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"7"/*nro serial*/,
        Proveedor: "Electro Cordoba",
        ParaCliente : {
            Valor: true,
            Cliente : "Cliente 5"
        },
        Codigo: 7,
        Cantidad: 300,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-06-02"
    },
    {
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"8"/*nro serial*/,
        Proveedor: "ABB",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 1,
        Cantidad: 500,
        FechaCarga: "2023-04-01",
        FechaRecepcion: "2023-08-31"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"9"/*nro serial*/,
        Proveedor: "Steck",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 2,
        Cantidad: 750,
        FechaCarga: "2023-04-01",
        FechaRecepcion: "2023-07-02"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"10"/*nro serial*/,
        Proveedor: "ABB",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 3,
        Cantidad: 250,
        FechaCarga: "2023-04-01",
        FechaRecepcion: "2023-08-31"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"11"/*nro serial*/,
        Proveedor: "Steck",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 4,
        Cantidad: 500,
        FechaCarga: "2023-04-01",
        FechaRecepcion: "2023-07-02"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"12"/*nro serial*/,
        Proveedor: "Erpla",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 5,
        Cantidad: 15000,
        FechaCarga: "2023-04-01",
        FechaRecepcion: "2023-08-01"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"13"/*nro serial*/,
        Proveedor: "Gen-Rod",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 8,
        Cantidad: 100,
        FechaCarga: "2023-04-01",
        FechaRecepcion: "2023-07-02"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"14"/*nro serial*/,
        Proveedor: "Gen-Rod",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 9,
        Cantidad: 5000,
        FechaCarga: "2023-04-01",
        FechaRecepcion: "2023-07-02"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"15"/*nro serial*/,
        Proveedor: "ABB",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 1,
        Cantidad: 500,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-09-30"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"16"/*nro serial*/,
        Proveedor: "Steck",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 2,
        Cantidad: 750,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-08-01"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"17"/*nro serial*/,
        Proveedor: "ABB",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 3,
        Cantidad: 250,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-09-30"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"18"/*nro serial*/,
        Proveedor: "Steck",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 4,
        Cantidad: 500,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-08-01"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"19"/*nro serial*/,
        Proveedor: "Erpla",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 5,
        Cantidad: 15000,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-08-31"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"20"/*nro serial*/,
        Proveedor: "Electro Cordoba",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 6,
        Cantidad: 1500,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-06-02"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"21"/*nro serial*/,
        Proveedor: "Electro Cordoba",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 7,
        Cantidad: 2000,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-06-02"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"22"/*nro serial*/,
        Proveedor: "Gen-Rod",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 8,
        Cantidad: 100,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-08-01"
    },{
        NumeroOrden: "OC-"+"1-"/*nro sucursal*/+"23"/*nro serial*/,
        Proveedor: "Gen-Rod",
        ParaCliente : {
            Valor: false,
            Cliente : "stock"
        },
        Codigo: 9,
        Cantidad: 5000,
        FechaCarga: "2023-05-01",
        FechaRecepcion: "2023-08-01"
    }
]

const ordenesCompraJSON = JSON.stringify(ordenesCompraObjeto);
if (localStorage.getItem("ordenesCompra")===null) {
    localStorage.setItem("ordenesCompra", ordenesCompraJSON);
}
const ordenesCompra = JSON.parse(localStorage.getItem("ordenesCompra"));