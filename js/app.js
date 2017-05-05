/*
 * Archivo principal de JS
 */
 var boton =document.getElementById("botonformulario");
 boton.addEventListener("click",validar);
 var img = document.getElementsByClassName('imagen');
 console.log(img);
 var longitud=img.length;
 console.log(longitud)
 for(var i=0;i<longitud; i++){
   img[i].addEventListener( 'click', openModal);
 }
 function openModal(){
   console.log("clic")
   document.getElementById('myModal').style.display="block";

   document.getElementById("imagensota").src= this.src;
 }
 var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			document.getElementById("myModal").style.display = "none";
		}
    var boton=document.getElementsByClassName("botoncerrar")[0];
    boton.onclick= function() {
      document.getElementById("myModal").style.display = "none";
    }


    function validar()

    {
     if( document.getElementById("mensaje").value == "" )
     {
       document.getElementById('mensaje').style.color='#78859C';
       document.getElementById('mensaje').value = "• Please enter a message.";

     }

     if( document.getElementById("name").value == "" )
     {
      document.getElementById('name').style.color='#78859C';
      document.getElementById('name').value = "• Please enter your name.";

    }


    if( document.getElementById("phone").value == "" )
    {
     document.getElementById('phone').style.color='#78859C';
     document.getElementById('phone').value = "• Please enter your phone number.";

   }
   if( document.getElementById("email").value == "" )
   {
    document.getElementById('email').style.color='#78859C';
    document.getElementById('email').value = "• Please enter your email address.";

  }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test( document.getElementById("email").value)) {
    console.log("correcta");
  }else {
   document.getElementById('email').style.color='#78859C';
   document.getElementById("email").value+= " • Not a valid email address.";
 }
}
