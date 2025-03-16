const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado"); 
function agregarAmigo() {
if(inputAmigo.value ==""){
        alert("Debes ingresar un nombre");
    }


    listaAmigos.push(inputAmigo.value)
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};



function sortearAmigo(){
    const random =Math.floor((Math.random() * listaAmigos.length));
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es ${amigoSecreto}</li>`;

    //console.log(random);
}
    //Revisa que el nombre no este repetido, pero aun no logro que funcione
    //if(amigo.includes(inputAmigo)){
      //  alert(`El nombre ${inputAmigo} ya está en la lista`);
    //}