
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

var nombre= document.getElementById("name").value;
var apellido= document.getElementById("lastname").value;
var correo= document.getElementById("input-email").value;
var contrasena= document.getElementById("input-password").value;


//validacion nombre vacio
function validateForm() {
    if(nombre.length==0){
        alert("Debe ingresar su nombre");
        return false;
   }
   soloLetras(nombre);
   primeraMayuscula(nombre);
}
//nombre debe ser solo letras 

function soloLetras(){
  var caracter = /^[a-Za-z\_\-\.\s\xF1\xD1]+$/;
  if(caracter.test(nombre)){
   return true;
}else{
  alert("Debe ingresar sololetras");
  return false;
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
 function validarApellido(){
	if(apellido.length == 0){
    alert("Debe ingresar Apellido");
   return false;
}
   	return true;
primeraMayuscula(apellido);
soloLetras(apellido);
 }
 //validar correo

 function validarEmail(valor) {
  if(correo.length == 0){
    alert("Debe ingresar su correo");
    return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)){
   return false;
  } 
}

// validar lista
var form= document.getElementsByClassName("form-control").selectedIndex;
   if(form == null || form == 0){
    alert("Elija una bicicleta");
   }