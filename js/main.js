
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

//validacion nombre
function validateForm() {
    if(nombre.length==0){
        alert("Debe ingresar su nombre");
        return false;
    }
}

//nombre debe ser solo letras 

function nombre(){
	var caracter = /^[a-Za-z\_\-\.\s\xF1\xD1]+$/;
	if(caracter.test(nombre)){
   return true;
}else{
  alert("Debe ingresar sololetras");
   }
}
//primera letra mayuscula
function primeraMayuscula(nombre){
  if(nombre.substring(0,1) == nombre.substring(0,1).toUpperCase()){
    return true;
  }else{
    alert("La primera letra debe ser mayúscula");
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
