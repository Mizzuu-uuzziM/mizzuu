// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 15 November 2024 JAM 00:00 WIB
// GITHUB : TanakaDomp
// VERSION : 1.1.0
// =============================================

const fs = require('fs')
const fetchJson = require('./App/function/myfunc')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

    
//====== [ SETTING PAIRING & TOKEN ] ========//
global.pairing = ''
global.codePairing = 'MIZZZUUU'//custom code pairing disini, maks 8 huruf
//====== [ SETTING OWNER  ] ========//
global.owner = [ '' ]
global.dontTagOwn = ''
global.owner0 = ['']
global.ownernumber = ['']
global.ownername = ''
//====== [ SETTING BOT ] ========//
global.botname = ''
global.botnumber = ''
global.bot_version = 'V 0.0.1 (_CPANEL VERSION_)'
global.prefa = ['/','!','.','#','&']
global.welcome = true
//====== [ SETTING PACKNAME ] ========//
global.packname = ''
global.author = ``
global.themeemoji = '🍁'
global.wm = "麻辣不老实"
global.idch = '120xxxx@newsletter'
global.github = 'https://github.com/Mizzuu-uuzziM'
global.titlech = ''
//====== [ THEME URL & URL ] ========//

global.thumbnail = 'https://files.catbox.moe/0oz144.jpg'
global.Url = ''

//====== [ GLOBAL PANEL ] ======//
global.domain = '' // isi dengan domain panel lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
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