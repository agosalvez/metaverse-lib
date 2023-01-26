import { ExampleComponent, constant, someFn } from './exampleComponent'

export {
  ExampleComponent,
  constant,
  someFn
}

export * from './customSystem'

//import * as WebSocket from "ws";
const wss = new WebSocket('wss://wswebchatbot.staging.aunoa.ai/167-fe0988da-ceee-11e9-988b-42010a840081/c1fbcb2a-9055-404d-b859-9ae6b0d4a62c');

const msg = {
  "channel": "WEBCHATBOT",
  "recipient": "193-d36c2f34-85aa-11ec-a00d-42010a840061",
  "sender": "755ee063-d6bb-48dd-a91c-f8955ed43930",
  "date": "16:44:20",
  "type": "user",
  "message": "hola metaverso",
  "profile": {
    "locale": "es",
    "userInfo": {
      "screen": "1920 x 1080",
      "browser": "Chrome",
      "browserVersion": "109.0.0.0",
      "mobile": false,
      "os": "Windows",
      "osVersion": "NT 4.0",
      "cookies": true
    },
    "currentPage": "https://console.staging.aunoa.ai/bots/193/edit/0/graph/"
  },
  "payload": "",
  "timestamp": 1674747860.277
}
wss.onopen = function(event) {
  log(event)
  log("conexión WS abierta")
  wss.send(JSON.stringify(msg))
  log("datos enviados")
}

wss.onmessage = function(event) {
  log("datos recibidos!")
  log(event)
}

wss.onclose = function(event) {
  log(event)
  if (event.wasClean) {
    log(`[close] Conexión cerrada limpiamente, código=${event.code} motivo=${event.reason}`);
  } else {
    // ej. El proceso del servidor se detuvo o la red está caída
    // event.code es usualmente 1006 en este caso
    log('[close] La conexión se cayó');
  }
};

wss.onerror = function(error) {
  log(error);
};
