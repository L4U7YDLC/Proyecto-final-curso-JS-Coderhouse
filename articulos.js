const articulosObjeto =[
    {   Codigo: 1 ,
        Descripcion: "Termica" ,
        Proveedor: "ABB" ,
        PrecioCompra: 2500,
        Stock: 453,
        PendientesEntrega: [{
            Cliente: "Cliente 1",
            Cantidad: 10,
            FechaEntrega: "2023-06-01"
            },
        {
            Cliente: "Cliente 2",
            Cantidad: 2,
            FechaEntrega: "2023-06-20"
        }]
    },
    {
        Codigo: 2 ,
        Descripcion: "Termica" ,
        Proveedor: "Steck" ,
        PrecioCompra: 1000,
        Stock: 564,
        PendientesEntrega: [{
            Cliente: "Cliente 1",
            Cantidad: 13,
            FechaEntrega: "2032-06-01"
            },
        {
            Cliente: "Cliente 2",
            Cantidad: 21,
            FechaEntrega: "2023-06-20"
        }]
    },
    {
        Codigo: 3 ,
        Descripcion: "Disyuntor" ,
        Proveedor: "ABB" ,
        PrecioCompra: 3000,
        Stock: 796,
        PendientesEntrega: [{
            Cliente: "Cliente 1",
            Cantidad: 2,
            FechaEntrega: "2032-06-01"
            },
        {
            Cliente: "Cliente 3",
            Cantidad: 250,
            FechaEntrega: "2023-09-16"
        }]
    },
    {
        Codigo: 4 ,
        Descripcion: "Disyuntor" ,
        Proveedor: "Steck" ,
        PrecioCompra: 1750,
        Stock: 461,
        PendientesEntrega: [{
            Cliente: "Cliente 1",
            Cantidad: 3,
            FechaEntrega: "2023-06-01"
            },
        {
            Cliente: "Cliente 4",
            Cantidad: 30,
            FechaEntrega: "2023-05-20"
        }]
    },
    {
        Codigo: 5 ,
        Descripcion: "Cable" ,
        Proveedor: "Erpla" ,
        PrecioCompra: 800,
        Stock: 8745,
        PendientesEntrega: [
            {
                Cliente: "Cliente 1",
                Cantidad: 798,
                FechaEntrega: "2023-06-01"
                },
            {
                Cliente: "Cliente 2",
                Cantidad: 3000,
                FechaEntrega: "2023-06-20"
            },
            {
                Cliente: "Cliente 1",
                Cantidad: 1002,
                FechaEntrega: 2023-06-01
                }
        ]
    },
    {
        Codigo: 6 ,
        Descripcion: "Morseto" ,
        Proveedor: "Electro Cordoba" ,
        PrecioCompra: 500,
        Stock: 798,
        PendientesEntrega: [{
            Cliente: "Cliente 5",
            Cantidad: 100,
            FechaEntrega: "2023-06-02"
            }]
    },
    {
        Codigo: 7 ,
        Descripcion: "Grampa aérea" ,
        Proveedor: "Electro Cordoba" ,
        PrecioCompra: 700,
        Stock: 2156,
        PendientesEntrega: [{
            Cliente: "Cliente 5",
            Cantidad: 300,
            FechaEntrega: "2023-06-02"
            }]
    },
    {
        Codigo: 8 ,
        Descripcion: "Gabinete" ,
        Proveedor: "Gen-Rod" ,
        PrecioCompra: 8000,
        Stock: 347,
        PendientesEntrega: [
            {
                Cliente: "Cliente 1",
                Cantidad: 2,
                FechaEntrega: "2023-06-01"
                },
            {
                Cliente: "Cliente 2",
                Cantidad: 1,
                FechaEntrega: "2023-06-20"
            },
            {
                Cliente: "Cliente 3",
                Cantidad: 15,
                FechaEntrega: "2023-05-20"
                }]
    },
    {
        Codigo: 9 ,
        Descripcion: "Caños" ,
        Proveedor: "Gen-Rod" ,
        PrecioCompra: 500,
        Stock: 7416,
        PendientesEntrega: [{
            Cliente: "Cliente 1",
            Cantidad: 200,
            FechaEntrega: "2023-06-01"
            },
        {
            Cliente: "Cliente 2",
            Cantidad: 150,
            FechaEntrega: "2023-06-20"
        },
        {
            Cliente: "Cliente 3",
            Cantidad: 700,
            FechaEntrega: "2023-05-20"
            },
        {
            Cliente: "Cliente 4",
            Cantidad: 50,
            FechaEntrega: "2023-09-16"
        }]
    }
]

const articulosJSON = JSON.stringify(articulosObjeto);
if (localStorage.getItem("articulos")=== null) {
    localStorage.setItem("articulos", articulosJSON);
}
const articulos = JSON.parse(localStorage.getItem("articulos"));

