const cuentasCorrientesObjeto = [
    {
        Cliente: "King's Landing",
        NumeroCuenta: 1,
        SaldoAdeudado: "$"+/*deuda*/0
    },
    {
        Cliente: "Winterfell",
        NumeroCuenta: 2,
        SaldoAdeudado: "$"+/*deuda*/0
    },
    {
        Cliente: "Casterly Rock",
        NumeroCuenta: 3,
        SaldoAdeudado: "$"+/*deuda*/0
    },
    {
        Cliente: "Mordor",
        NumeroCuenta: 4,
        SaldoAdeudado: "$"+/*deuda*/0
    }
]

const cuentasCorrientesJSON = JSON.stringify(cuentasCorrientesObjeto);
if (localStorage.getItem("cuentasCorrientes")===null) {
    localStorage.setItem("cuentasCorrientes", cuentasCorrientesJSON);
}
const cuentasCorrientes = JSON.parse(localStorage.getItem("cuentasCorrientes"));