import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
Hi
*നോക്കിയിരുന്നോ ഇപ്പോകിട്ടും 😂*
😁
`
let pp = 'PAIN' 
conn.sendButton(m.chat, m2, pp, [
  ['⏍ Info', `${usedPrefix}botinfo`],
  ['⌬ Groups', `${usedPrefix}gpguru`]
],m, rpyt)

}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo'] 

export default handler
