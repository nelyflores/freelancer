/*
 * Archivo principal de JS
 */
 var intputElements=document.getElementsByClassName('formulario');
 function validacion(){
 for (var i=0;i <intputElements.length; i++){
   if (intputElements.value==null || valor.length == 0 || /^\s+$/.test(valor) ){
     console.log("faltan cosas")
   }

 }
}
