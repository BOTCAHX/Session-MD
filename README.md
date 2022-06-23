<div align="alight">
<img src="https://telegra.ph/file/19968eb11731f27620ffe.jpg" alt="BOTCAHX" width="300" />

## AMBIL INSTAN
- Klik tombol replit di bawah ini untuk instan tanpa coding  
[![Run on Repl.it](https://repl.it/badge/github/quiec/whatsAlfa)](https://replit.com/@tioclkp02/Session-Md-5#.replit)

  
## MANUAL INSTALL
Cara ambil session nya,-

- Tampilan session ada di file seperti di gambar ini
- Hanya bisa run di replit tidak bisa di terminal lain
- Salin session tepat di file auth_info_multi.json / jika mau file langsung ke session.data.json ganti terlebih dahulu file index
- file index mentahan [[KLIK MENTAHAN INDEX INI]](https://github.com/BOTCAHX/Session-Md/blob/main/index.js.bak) salin dan ganti file index asli.
```  
const makeWASocket = require("@adiwajshing/baileys").default
const qrcode = require("qrcode-terminal")
const { delay, useSingleFileAuthState } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState('./session.data.json')

function qr() {
  let session = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  })
  session.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s
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
  ```

# Session-Md
Session untuk bot Md 
[DEM0](https://replit.com/@tioclkp02/Session-Md-5#.replit)

  

## INSTALL ON Replit
[ INSTALLING ]

```bash
git clone https://github.com/BOTCAHX/Session-Md.git
cd Session-Md
npm i
node index
```
---------
