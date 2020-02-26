function valider(){
    var info = document.getElementById('info');
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var adr = document.getElementById('adr').value;
    var email = document.getElementById('email').value;
    var passw = document.getElementById('passw').value;
    var commen = document.getElementById('commen').value;
    var teste1 = /\S+@\S+\.\S+/;
    var teste2=/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    
    // info.event.preventDefault();

  if ((firstname=="")||(lastname=="")||(adr=="")||(email=="")||(passw=="")||(commen=="")){
    alert('un ou plusieurs champs sont tous vide !!!!! ');}
       
    if(!teste1.test(email)){
        alert('désolé votre mail est invalide')
    }
    if(!teste2.test(passw)){
        alert(' Votre mot de passe dois contenir au moin 8 caractères, au moin un nombre, un caractère miniscule et un caractère miniscule et un caractère spécial\n" ')
    }
    
    
   
} 
function reset(){
     var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var adr = document.getElementById('adr').value;
    var email = document.getElementById('email').value;
    var passw = document.getElementById('passw').value;
    var commen = document.getElementById('commen').value;
    let center=document.getElementsByTagName('center')
 if ((firstname!="")||(lastname!="")||(adr!="")||(email!="")||(passw!="")||(commen!="")){
    center.firstname="";
center.lastname="";
center.adr="";
center.email="";
center.passw="";
center.commen="";

}

}