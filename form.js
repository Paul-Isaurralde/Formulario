function captura(){
    let usuario={
        Nombre: document.getElementById("nombre").value,
        Apellido: document.getElementById("apellido").value,
        Email: document.getElementById("email").value,
        Contraseña: document.getElementById("password").value
    }
    const {Nombre}= usuario;
    const {Apellido}= usuario;
    const {Email}= usuario;
    const {Contraseña}= usuario;

   alert(` ¡¡Registro Exitoso!!\n Nombre: ${Nombre}\n Apellido: ${Apellido}\n Email: ${Email}\n Contraseña: ${Contraseña}`)
}
