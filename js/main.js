
  //validacion del formulario
function validateForm() {
  //validar nombre
  var nombre= document.getElementById("name");
  if(nombre.value == null || nombre.value.length==0 || /^\s+$/.test(nombre.value)){
    alert("Debe ingresar su nombre");
    return false;
  }
   //solo letras
   else if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
    alert ("Nombre no valido, ingresar solo letras");
    return true;
  }    
  //primera mayúscula
  else if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
    alert ("La primera letra debe ser mayúscula");
    return false;
  }
  //validar input apellido
  var apellido= document.getElementById("lastname");
  if(apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value)){
    alert("Debe ingresar Apellido");
    return false;
  }
  else if(/^^[a-zA-Z]*$/.test(apellido.value) == false){
    alert ("Debe ingresar solo letras");
    return true;
  }
  else if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
    alert ("La primera letra debe ser en mayúscula");
    return false;
  }

  //validar correo
  var correo= document.getElementById("input-email");
  if(correo.value === null || correo.value.length == 0 || /^\s+$/.test(correo.value)){
    alert("Debe ingresar su correo");
    return false;
  }
  var simb= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!simb.test(correo.value)){
    alert ("Ingresar correo electrónico valido");
    return false; 
  }

  //contraseña 
  var contrasena = document.getElementById("input-password");
  function contrasenaValida(){
    if(contrasena.value.length ==0){
      alert("Tiene que ingresar contraseña");
      return false;
    }
    if (contrasena.value.length < 6){
      alert("Ingresar contraseña valida");
      return false;
    } else if (contrasena.value=="contrasena"){
      alert("Ingresar contraseña valida");
      return false; 
    } else if (contrasena.value =="123456"){
      alert("Ingresar contraseña valida");
      return false;
    } else if (contrasena.value =="098754"){
      alert("Ingresar contraseña valida");
      return false;
    }else{
      return true;
    }
  }
  contrasenaValida();
  // validar lista
  function eleccion(){
    var form= document.querySelector('select').value;
    if(form == null || form == 0){
      alert("Elija una bicicleta");
      return false;
    }else{
      return true;
    }
  }
  eleccion();
}