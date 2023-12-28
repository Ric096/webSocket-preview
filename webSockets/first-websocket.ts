
/*    PASOS A SEGUIR PARA IMPLEMENTAR WEBSOCKET EN EL PROYECTO DE JOAJU-17    */



//  crear un servicio para el web socket 

// crear las variables ej: 
/* 
  private socket: WebSocket

  entender los subjects and observers de RxJs en angular 

*/
// Crear la conexion bidireccional o instancia con el websocket
const WEB_SOCKET_URL = 'wss://localhost:3000'
const socket = new WebSocket(WEB_SOCKET_URL);


// Luego crear una funcion cuando el evento de conexion se dispare correctamente

socket.onopen = () => {
  console.log('conexion establecida correctamente');
}

// Funcion que se dispare cuando se reciba un mensaje del servidor

socket.onmessage = (event) => {

  // Se recibe la informacion, posible que la informacion se deba pasar a formato json  
  console.log('mensaje recibido', event.data)  
}

// Funcion para enviar informacion al servidor 

const sendMessage = (message:string) =>{ 

  // para enviar la informacion hay que pasarla a formato string para que reconozca  
  socket.send(JSON.stringify(message)) 
}

// Funcion para cerrar la comunicacion con el websocket

socket.onclose = () => {
  console.log('conexion cerrada')

  // Crear una funcion para reconectar si es necesario.
}

