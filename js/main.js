function agregaMensaje() {
  var contenedorMensajes = document.getElementById("chat");
  var mensajeEnviado = document.getElementById("mensajes").value;

  var nuevoMensaje = document.createElement("div");
  nuevoMensaje.classList.add('w-message');
  nuevoMensaje.classList.add('w-message-out');

  var contenedorTexto = document.createElement("div");
  contenedorTexto.classList.add('w-message-text');
  
  var parrafo = document.createElement('p');

  var hora = document.createElement('div');
  hora.classList.add('time');

  var nodoMensaje = document.createTextNode(mensajeEnviado);
  var nodoHora = document.createTextNode('12:30');

  parrafo.appendChild(nodoMensaje);
  hora.appendChild(nodoHora);
  
  nuevoMensaje.appendChild(contenedorTexto);
  contenedorTexto.appendChild(parrafo);
  contenedorTexto.appendChild(hora);

  contenedorMensajes.appendChild(nuevoMensaje);

  document.getElementById("mensajes").value = "";
  }

function cambiaAvatar() {
  

}