var makeWASocket = require("@adiwajshing/baileys").default
var qrcode = require("qrcode-terminal");
var { 
delay, 
useSingleFileAuthState 
} = require("@adiwajshing/baileys");
var { 
state, 
saveState 
} = useSingleFileAuthState('./session.data.json')

function qr() {
  var session = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  })
  session.ev.on("connection.update", async (s) => {
    var { 
          connection, 
          lastDisconnect 
         } = s
    if (connection == "open") {
      await delay(1000 * 10)
      process.exit(0)
    }
    if (
      connection === "close" &&
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output.statusCode != 401
    ) {
      qr()
    }
  })
  session.ev.on('creds.update', saveState)
  session.ev.on("messages.upsert", () => { })
}
qr()
