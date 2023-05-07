const proveedoresObjeto = [
    {
        Proveedor: "ABB",
        TiempoDemora: 152
    },
    {
        Proveedor: "Steck",
        TiempoDemora: 92
    },
    {
        Proveedor: "Erpla",
        TiempoDemora: 122
    },
    {
        Proveedor: "Electro Cordoba",
        TiempoDemora: 32
    },
    {
        Proveedor: "Gen-Rod",
        TiempoDemora: 92
    }
]

const proveedoresJSON = JSON.stringify(proveedoresObjeto);
if (localStorage.getItem("proveedores")===null) {
    localStorage.setItem("proveedores", proveedoresJSON);
}
const proveedores = JSON.parse(localStorage.getItem("proveedores"));