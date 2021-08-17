document.getElementById("campoIR").style.display = "none";
let pedidos= " invisible";

function visiblePedidos(pedidos){
    document.getElementById("pedidos").className += pedidos;
}
visiblePedidos(pedidos);


const usuario= [
    ['Juan','Flores','juanito@gmail.com','12345'],
    ['Maria','Castillo','maria@gmail.com','maria123']
]

function validar(correo,contraseña){
    let acceso=false;
    
    for (let i = 0; i < usuario.length; i++) {
        if (correo == usuario[i][2] && contraseña==usuario[i][3]) {
            acceso=true;
            localStorage.setItem('usuarioActivo', usuario[i][0]+' '+usuario[i][1]);
        }    
    }
    return acceso;
}
    
document.querySelector('#boton').addEventListener('click',function(e){
    let sCorreo="";
    let sPass="";
    let bAcceso=false;

    sCorreo=document.querySelector('#email').value;
    sPass=document.querySelector('#password').value;

    bAcceso=validar(sCorreo,sPass);
    if (bAcceso==true) {
        pedidos=" visible";
        visiblePedidos(pedidos);
        document.getElementById("campoIR").style.display = "none";
        window.location.href = "index.html";

    }
        
    e.preventDefault();
})

