const loginJSON = '[{"Nombre_vendedor": "Eddard Stark","Usuario_vendedor": "vendedor1","Contraseña_vendedor": "EddSta123"},{"Nombre_vendedor": "Jon Snow","Usuario_vendedor": "vendedor2","Contraseña_vendedor": "JonSno123"},{"Nombre_vendedor": "Daenerys Targaryen","Usuario_vendedor": "vendedor3","Contraseña_vendedor": "DaeTar123"},{"Nombre_vendedor": "Tyrion Lannister","Usuario_vendedor": "vendedor4","Contraseña_vendedor": "TyrLar123"}]'
if (localStorage.getItem("datosLogin")=== null) {
    localStorage.setItem("datosLogin", loginJSON);
}
let datosLogin = JSON.parse(localStorage.getItem("datosLogin"));

