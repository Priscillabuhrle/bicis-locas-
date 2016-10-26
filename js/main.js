
/*var camposObligatorios= document.getElementsByClassName("sr-only").value;

function validateForm(){
	
	if(camposObligatorios[0] == a caracteres a-z && la primera letra es mayuscula){
        
	}if(camposObligatorios== ""){
		alert ("no debe estar vacio")
	}else{
		alert (no es valido);
	}
	if(camposObligatorios)
}*/
var form= document.getElementsByClassName("form-signup");
var nombre= document.getElementById("name").value;
var apellido= document.getElementById("lastname").value;
var correo= document.getElementById("input-email").value;
var contrasena= document.getElementById("input-password").value;

function validateForm() {
    var x = document.forms["form-signup"]["sr-only"].value;
    if (x == null || x == "") {
        alert("La casilla debe ser llenada");
        return false;
    }
}

//validad input nombre
function nombre(){
	var caracter = /^[a-zA-Z]*$/;
	var mayusc= nombre.charAt(0).toUpperCase() + nombre.slice(1);
	if(nombre != caracter && nombre == mayusc){
   return true;
}
   if(nombre.length == 0){
   	alert ("debe ingresar nombre");
   	return false;
   }
   else{
   	return false;
   }
 }
//validar input apellido
 function apell(){
	var caracter = /^[a-zA-Z]*$/;
	var mayuscu= apellido.charAt(0).toUpperCase() + apellido.slice(1);
	if(apellido != caracter){
   return true;
}
   if(apellido == mayuscu){
      return true;
   } else{
   	return false;
   }
 }
 //validar correo

 function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}
