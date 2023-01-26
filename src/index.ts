import { ExampleComponent, constant, someFn } from './exampleComponent'

export {
  ExampleComponent,
  constant,
  someFn
}

export * from './customSystem'
/*
import * as WebSocket from "ws";
const wss = new WebSocket('wss://webchatbot.staging.aunoa.ai');
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

wss.on("connection", (clientWs, request) => {
  console.log("🚀 ~ file: index.ts:38 ~ wss.on ~ request", request)
  console.log("🚀 ~ file: index.ts:38 ~ wss.on ~ clientWs", clientWs)
  log("conectado al ws!")
  /*
  const ws = clientWs;
  ws.on("message", function incoming(data) {
    log("🚀 ~ file: index.ts:50 ~ incoming ~ data", data)
  });
  */
});
*/