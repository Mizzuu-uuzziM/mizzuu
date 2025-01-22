// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 15 November 2024 JAM 00:00 WIB
// GITHUB : TanakaDomp
// VERSION : 1.1.0
// =============================================

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

//====== [ SETTING PAIRING & TOKEN ] ========//
global.pairing = '6289633188822'//isi ini untuk mendapatkan pairing
//====== [ SETTING OWNER  ] ========//
global.owner = [ '6281359932022', '6288807709243','6281399897454','6283841951316' ]
global.dontTagOwn = '6281359932022'
global.owner0 = ['6281359932022@s.whatsapp.net','6288807709243@s.whatsapp.net','6281399897454@s.whatsapp.net','6283841951316@s.whatsapp.net']
global.ownernumber = ['6281359932022','6288807709243','6281399897454','6283841951316']
global.ownername = 'ㅆíㄹㄹùù'
//====== [ SETTING BOT ] ========//
global.botname = 'Mizzuu • Assistant'
global.botnumber = '6289633188822'
global.bot_version = 'V 0.0.1 (_CPANEL VERSION_)'
global.prefa = ['/','!','.','#','&']
//====== [ SETTING PACKNAME ] ========//
global.packname = 'ׄ 𓄯ִ ── ꯭𐑈ƚꪱִ𝖼𝗄ᧉׄ𝗋 ᎓  lylꪱc𝗁α𝗇 ხᦢƚ x Mizzuu '
global.author = `Crᧉׄdı๋𝗍 : 森晓伟 ταიακαdοოρ.ხiz.id\nAt ${hariini}\n${time}`
global.themeemoji = '🍁'
global.wm = " TanakaSense.js."
global.idch = '--@newsletter'
global.github = 'https://github.com/Mizzuu-uuzziM'
global.titlech = '--'
//====== [ THEME URL & URL ] ========//
global.thumbnail = 'https://files.catbox.moe/n60pjq.jpg'
global.Url = 'https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h'

//====== [ GLOBAL PANEL ] ======//
global.domain = 'https://ditashopxrifky.panelku-vip.my.id' // isi dengan domain panel lu
global.apikey = 'ptla_VhFEumG6cfz7SbxpXVd3tv3s2uvTrefln1ydxvwKwJ5' // Isi Apikey Plta Lu
global.capikey = 'ptlc_0Zk9dSAJKe9GjMpsyA1Cja9VV9iq40JlhNtWBIwOEsY' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//====== [ GLOBAL MESSAGES  ] ========//
global.mess = {
    done: '*( 🎂 )* ```Success...My Favorite Owner```',
    prem: '`Sorry, this feature can only be used by premium users.\nIf you want to buy premium, type *.buyprem*`',
    admin: '*( Error )* Fitur ini khusus untuk penjabat!!',
    botadmin: '*( Error )* Sepertinya... Aku bukan admin🤔!!',
    owner: '*( Error )* Kamu bukan ownerkuu>_<!!',
    group: '*( Error )* Fitur ini khusus dalam group!!',
    private: '*( Error )* Fitur ini hanya untuk private chat!!',
    wait: '*( Loading )* Chotto matte... Kyaahhh....><',
    error: 'Error!',
}
/*isi list kalian disini, jangan gunakan tanda petik ``, karna bakal eror kalau kalian pakai itu*/
global.list = `list produk? isi sendiri`
//  - AKHIR -
//  JIKA ADA YANG KURANG MENGERTI SILAHKAN CHAT ADMIN DI WHATSAPP MAUPUN DI TELEGRAM OKEY
//  - Number : +62 815 4117 7589
//  - Telegram : @tanaka_senn


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})