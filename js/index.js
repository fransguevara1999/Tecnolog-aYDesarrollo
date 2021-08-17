document.getElementById("pedidos").style.display = "none";
document.getElementById("campoUsuario").style.display = "none";

if (localStorage.getItem('usuarioActivo')!=null) {
    document.getElementById("pedidos").style.display = "flex";
    document.getElementById("campoIR").style.display = "none";
    document.getElementById("campoUsuario").style.display = "flex";
    console.log(localStorage.getItem("usuarioActivo"))
    document.getElementById("usuario").innerHTML= "<h4>"+localStorage.getItem("usuarioActivo")+"</h4>";
    console.log(document.getElementById("usuario").innerHTML)
}

let logout=document.getElementById("logout");

logout.addEventListener('click',function(){
    localStorage.removeItem("usuarioActivo");
    document.getElementById("pedidos").style.display = "none";
    document.getElementById("campoIR").style.display = "flex";
    document.getElementById("campoUsuario").style.display = "none";
    window.location.href="index.html";
});