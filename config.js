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
global.pairing = '628888888888'
global.codePairing = 'MMIIZZUU'//custom code pairing disini, maks 8 huruf
//====== [ SETTING OWNER  ] ========//
global.owner = JSON.parse(fs.readFileSync('./Storage/owner.json', "utf8"))
global.dontTagOwn = ''
global.owner0 = ['6281359932022@s.whatsapp.net']
global.ownernumber = ['6281359932022']
global.ownername = 'Mizzuu.html'
//====== [ SETTING BOT ] ========//
global.botname = 'Mizzuu • Assistant'
global.botnumber = ''
global.bot_version = 'V 0.0.1 (_CPANEL VERSION_)'
global.prefa = ['/','!','.','#','&']
global.welcome = true
global.autoai = false
//====== [ SETTING PACKNAME ] ========//
global.packname = 'MizzuuDepeloperChupu'
global.author = `https://github.com/Mizzuu-uuzziM/mizzuu`
global.themeemoji = '🍁'
global.wm = "麻辣不老实"
global.idch = '120363304326811869@newsletter'
global.github = 'https://github.com/Mizzuu-uuzziM'
global.titlech = 'Mizzuu'
//====== [ THEME URL & URL ] ========//

global.thumbnail = 'https://files.catbox.moe/roo10u.jpg'
global.Url = 'https://github.com/Mizzuu-uuzziM'

//====== [ GLOBAL PANEL ] ======//
global.domain = '' // isi dengan domain panel lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//====== [ GLOBAL PANEL-2 ] =======//
global.domain2 = ''
global.apikey2 = ''
global.capikey2 = ''
global.eggsnya2 = '15'
global.location2 = '1'

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