var personas= new Array();

function enviar(){

     nombre=document.getElementById("nombre").value;
     destino=document.getElementById("destino").value;

     let json={
        "nombre": nombre,
        "destino": destino
    }
    
     personas.push(json);
}


function filtrar(){
 
   let cadena="";
   for(let i=0;i<personas.length;i++){
     if(personas[i].destino=="Canarias" || personas[i].destino=="Mallorca" || personas[i].destino=="Galicia"){

       cadena+=personas[i].nombre+"<br>";
    }
    document.getElementById("filtrados").innerHTML =cadena;
  }
 }