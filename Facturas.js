const facturasObjeto = [
    {
        NumeroComprobante: "x-"+/*Sucursal*/1+/*Serial*/1,
        Cliente: "Cliente 1",
        NroCuenta: 0,
        MedioPago: "Efectivo",
        Direccion: "Elm Street 123",
        Telefono: 1234567890,
        Vendedor: "Eddard Stark",
        Descuento: 0,
        Articulos: [
            {
                Codigo: 1,
                Cantidad: 10,
                FechaEntrega: "2023-06-01"
            },
            {
                Codigo:2,
                Cantidad:13,
                FechaEntrega: "2023-06-01"
            },
            {
                Codigo:3,
                Cantidad:2,
                FechaEntrega: "2023-06-01"
            },
            {
                Codigo:4,
                Cantidad:3,
                FechaEntrega: "2023-06-01"
            },
            {
                Codigo:5,
                Cantidad:798,
                FechaEntrega: "2023-06-01"
            },
            {
                Codigo:8,
                Cantidad:2,
                FechaEntrega: "2023-06-01"
            },
            {
                Codigo:9,
                Cantidad:200,
                FechaEntrega: "2023-06-01"
            }
        ],
        TotalFactura: 975631.10
    },
    {
        NumeroComprobante: "x-"+/*Sucursal*/1+/*Serial*/2,
        Cliente: "Cliente 1",
        NroCuenta: 0,
        MedioPago: "Efectivo",
        Direccion: "Elm Street 123",
        Telefono: 1234567890,
        Vendedor: "Eddard Stark",
        Descuento: 0,
        Articulos: [
            {
                Codigo: 5,
                Cantidad: 1002,
                FechaEntrega: "2023-06-01"
            }
        ],
        TotalFactura: 988317.4
    },
    {
        NumeroComprobante: "x-"+/*Sucursal*/1+/*Serial*/3,
        Cliente: "Cliente 2",
        NroCuenta: 0,
        MedioPago: "Efectivo",
        Direccion: "Wallabee 42",
        Telefono: 2345678901,
        Vendedor: "Jon Snow",
        Descuento: 0,
        Articulos: [
            {
                Codigo: 1,
                Cantidad: 2,
                FechaEntrega: "2023-06-20"
            },
            {
                Codigo: 2,
                Cantidad: 21,
                FechaEntrega: "2023-06-20"
            },
            {
                Codigo: 5,
                Cantidad: 3000,
                FechaEntrega: "2023-06-20"
            },
            {
                Codigo: 8,
                Cantidad: 1,
                FechaEntrega: "2023-06-20"
            },
            {
                Codigo: 9,
                Cantidad: 150,
                FechaEntrega: "2023-06-20"
            }
        ],
        TotalFactura: 3045926
    },
    {

        NumeroComprobante: "x-"+/*Sucursal*/1+/*Serial*/4,
        Cliente: "Cliente 3",
        NroCuenta: 0,
        MedioPago: "Efectivo",
        Direccion: "Abbey Road 5050",
        Telefono: 3456789012,
        Vendedor: "Daenerys Targaryen",
        Descuento: 10,
        Articulos: [
            {
                Codigo: 3,
                Cantidad: 250,
                FechaEntrega: "2023-05-01"
            },
            {
                Codigo: 8,
                Cantidad: 15,
                FechaEntrega: "2023-05-01"
            },
            {
                Codigo: 9,
                Cantidad: 700,
                FechaEntrega: "2023-05-01"
            }
        ],
        TotalFactura: 1432280
    },
    {
        NumeroComprobante: "x-"+/*Sucursal*/1+/*Serial*/5,
        Cliente: "Cliente 4",
        NroCuenta: 0,
        MedioPago: "Efectivo",
        Direccion: "Grove Street 1",
        Telefono: 4567890123,
        Vendedor: "Tyrion Lannister",
        Descuento: 0,
        Articulos: [
            {
                Codigo: 4,
                Cantidad: 30,
                FechaEntrega: "2023-09-16"
            },
            {
                Codigo: 9,
                Cantidad: 50,
                FechaEntrega: "2023-09-16"
            },
        ],
        TotalFactura: 94085
    },
    {
        NumeroComprobante: "x-"+/*Sucursal*/1+/*Serial*/6,
        Cliente: "Cliente 5",
        NroCuenta: 0,
        MedioPago: "Efectivo",
        Direccion: "Privet Drive 4",
        Telefono: 5678901234,
        Vendedor: "Jon Snow",
        Descuento: 15,
        Articulos: [
            {
                Codigo: 6,
                Cantidad: 100,
                FechaEntrega: "2023-06-02"
            },
            {
                Codigo: 7,
                Cantidad: 300,
                FechaEntrega: "2023-06-02"
            }
        ],
        TotalFactura: 315640
    }
]

const facturasJSON = JSON.stringify(facturasObjeto);
if (localStorage.getItem("facturas") === null) {
    localStorage.setItem("facturas", facturasJSON);
}
const facturas = JSON.parse(localStorage.getItem("facturas"));