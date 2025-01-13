require("./config")
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const FormData = require('form-data');
const cheerio = require('cheerio')
const moment = require("moment-timezone")
const { addExif } = require('./App/function/exif')
const { smsg, formatDate, getTime, getGroupAdmins, formatp, await, sleep, runtime, clockString, msToDate, sort, toNumber, enumGetKey, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, fetchBuffer, buffergif, GIFBufferToVideoBuffer, totalcase } = require('./App/function/myfunc'); 
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, shorturl, color } = require("./App/function/funcc");
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./App/function/converter')
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./App/function/premiun');
let premium = JSON.parse(fs.readFileSync('./Storage/premium.json'));
const { tiktoksearch, tiktokdl, Facebook } = require('./App/scraper/downloader.js');
module.exports = lilychan = async (lilychan, m, chatUpdate, store) => {
try {
const body = (m && m.mtype) ? (
m.mtype === 'conversation' ? m.message?.conversation :
m.mtype === 'imageMessage' ? m.message?.imageMessage?.caption :
m.mtype === 'videoMessage' ? m.message?.videoMessage?.caption :
m.mtype === 'extendedTextMessage' ? m.message?.extendedTextMessage?.text :
m.mtype === 'buttonsResponseMessage' ? m.message?.buttonsResponseMessage?.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m.mtype === 'templateButtonReplyMessage' ? m.message?.templateButtonReplyMessage?.selectedId :
m.mtype === 'messageContextInfo' ? (
m.message?.buttonsResponseMessage?.selectedButtonId || 
m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m.text
) : ''
) : '';

const budy = (m && typeof m.text === 'string') ? m.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m.pushName || "No Name";
const botNumber = await lilychan.decodeJid(lilychan.user.id);
const { type, fromMe } = m
const sender = m.sender
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const itsMe = (m && m.sender && m.sender == botNumber) || false;
const text = q = args.join(" ");
var msg_text = (typeof m.text === 'string') ? m.text : '';
const fatkuns = m && (m.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const groupMetadata = m.isGroup ? await lilychan.groupMetadata(m.chat).catch(e => {}) : {};
const participants = m.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isBot = botNumber.includes(senderNumber)
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium); expiredCheck(lilychan, m, premium);
const groupOwner = m.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
 
// FUNTION DISINI WAE YAK
const hariini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)    
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)
const lilydate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (time2 < "23:59:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'; }
if (time2 < "19:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'; }
if (time2 < "18:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'; }
if (time2 < "15:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'; }
if (time2 < "10:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'; }
if (time2 < "05:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'; }
if (time2 < "03:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'; }

if (time2 < "23:59:00") { var emojiwaktu = `🌌`; }
if (time2 < "19:00:00") { var emojiwaktu = `🌙`; }
if (time2 < "18:00:00") { var emojiwaktu = `🌅`; }
if (time2 < "17:00:00") { var emojiwaktu = `🌅`; }
if (time2 < "15:00:00") { var emojiwaktu = `☀️`; }
if (time2 < "11:00:00") { var emojiwaktu = `🌄`; }
if (time2 < "05:00:00") { var emojiwaktu = `🌙`; }

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const totalFitur = () => {
    var mytext = fs.readFileSync("./message.js").toString();
    var numUpper = (mytext.match(/case '/g) || []).length;
    return numUpper;
};

const pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
 
try {
    var ppuser = await lilychan.profilePictureUrl(m.sender, 'image');
} catch (err) {
    var ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
    var mini = 'https://files.catbox.moe/p4g53y.jpg';
}

let ppnyauser = await getBuffer(ppuser);
let thumbmini = await getBuffer(global.thumbnail);
lilychan.readMessages([m.key]);
const reSize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
let jimp = require('jimp')
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
 })}


/**
* Remove Background Image
* Created at 03-06-2024
* Created by @rippanteq7 (anjay nge-wm)
*/

const api = axios.create({ baseURL: 'https://api4g.iloveimg.com' })
const getTaskId = async () => {
const { data: html } = await axios.get('https://www.iloveimg.com/id/hapus-latar-belakang')
api.defaults.headers.post['authorization'] = `Bearer ${html.match(/ey[a-zA-Z0-9?%-_/]+/g)[1]}`
return html.match(/taskId = '(\w+)/)[1]
}

const uploadImageToServer = async (imageBuffer) => {
const taskId = await getTaskId()

const fileName = Math.random().toString(36).slice(2) + '.jpg'
const form = new FormData()
form.append('name', fileName)
form.append('chunk', '0')
form.append('chunks', '1')
form.append('task', taskId)
form.append('preview', '1')
form.append('pdfinfo', '0')
form.append('pdfforms', '0')
form.append('pdfresetforms', '0')
form.append('v', 'web.0')
form.append('file', imageBuffer, fileName)

const reqUpload = await api.post('/v1/upload', form, { headers: form.getHeaders() })
.catch(e => e.response)
if (reqUpload.status !== 200) throw reqUpload.data || reqUpload.statusText

return { serverFilename: reqUpload.data.server_filename, taskId }
}

const removeBg = async (imageBuffer, responseType = 'arraybuffer') => {
const { serverFilename, taskId } = await uploadImageToServer(imageBuffer)

const form = new FormData()
form.append('task', taskId)
form.append('server_filename', serverFilename)

const reqRmbg = await api.post('/v1/removebackground', form, {
headers: form.getHeaders(), responseType
}).catch(e => e.response)
const type = reqRmbg.headers['content-type']
if (reqRmbg.status !== 200 || !/image/.test(type))
throw JSON.parse(reqRmbg.data?.toString() || '{"error":{"message":"An error occurred"}}')

return reqRmbg.data
}

let fkthmb = reSize(ppuser, 300, 300)
//================== [ CONSOL LOGG] ==================//
if (m.message) {            
    console.log(chalk.cyan(`────────────『 ${chalk.redBright('从ㅌㄹㄹㅂGㅌ区')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: TanakaSensei`);
    console.log(chalk.cyan('───────────────────────────────────⳹\n'));
}

//-- STAFF SYSTEM 
let list_staff = [];
  let staff_domp = global.owner;
  for (let i of staff_domp) {
  let name_staff = await lilychan.getName(i + "@s.whatsapp.net")   
    list_staff.push({
      displayName: await lilychan.getName(i + "@s.whatsapp.net"),
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${name_staff}\nFN:${name_staff}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Hubungi staff kami 💬\nitem2.EMAIL;type=INTERNET:tanakadomp@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.tanakadomp.biz.id\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
    });
}
  
switch(command) {
case 'menu':case'help':{
    const jomok = `
HALO ${pushname}
${ucapanWaktu + emojiwaktu}

Nama saya ${global.botname}, Saya adalah Assistant dari ${global.ownername} yang siap membantu siapa pun
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬


*————————『“”INFO“”』———————*
*TANGGAL : ${hariini}*
*JAM : ${time2}*
*OWNER :*
*BOT VERSION : ${global.bot_version}*


▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*——————『“”LIST MENU“”』—————*
> allmenu
> menuai
> menudownload
> menuconvert
> menustore
> menupterodactyl 

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

_Note :_
_Kami Butuh Banyak Contributor Dalam Pembuatan Sc Ini, Silahkan Ketik Owner Jika Ingin Join Menjadi Contributor Sc Ini_
`
await lilychan.sendMessage(from, { document: fs.readFileSync('./package.json'), mimetype:"image/jpg", 
    fileName:`Mizzuu • Assistant`,
    fileLength:"9999999999999999999999",
    jpegThumbnail:thumbmini,
    contextInfo: {
    externalAdReply: {
    showAdAttribution: true, 
    title: `${ucapanWaktu}${emojiwaktu} ${pushname}`,
    body: 'Mizzuu • Assistant',
    mediaType: 1,  
    renderLargerThumbnail : true,
    thumbnailUrl: global.thumbnail,
    sourceUrl: ``
    }}, 
    caption: jomok,
    
    },  {quoted: m})
}
break
case 'menuai':case'aimenu':{
    const jomok = `
HALO ${pushname}
${ucapanWaktu + emojiwaktu}

Nama saya ${global.botname}, Saya adalah Assistant dari ${global.ownername} yang siap membantu siapa pun
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬


*————————『“”INFO“”』———————*
*TANGGAL : ${hariini}*
*JAM : ${time2}*
*OWNER :*
*BOT VERSION : ${global.bot_version}*


▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*——————『“”LIST MENU“”』—————*
> google
> ai
> ~gpt~ (_Coming Soon_)
> ~blackbox~ (_Coming Soon_)

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

_Note :_
_Kami Butuh Banyak Contributor Dalam Pembuatan Sc Ini, Silahkan Ketik Owner Jika Ingin Join Menjadi Contributor Sc Ini_
`
await lilychan.sendMessage(from, { document: fs.readFileSync('./package.json'), mimetype:"image/jpg", 
    fileName:`Mizzuu • Assistant`,
    fileLength:"9999999999999999999999",
    jpegThumbnail:thumbmini,
    contextInfo: {
    externalAdReply: {
    showAdAttribution: true, 
    title: `${ucapanWaktu}${emojiwaktu} ${pushname}`,
    body: 'Mizzuu • Assistant',
    mediaType: 1,  
    renderLargerThumbnail : true,
    thumbnailUrl: global.thumbnail,
    sourceUrl: ``
    }}, 
    caption: jomok,
    
    },  {quoted: m})
}
break
case 'allmenu':case'menuall': {
let teksmenu = `${ucapanWaktu}${emojiwaktu} ${pushname}

Nama saya ${global.botname}, Saya adalah Assistant dari ${global.ownername} yang siap membantu siapa pun
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬


*————————『“”INFO“”』———————*
*TANGGAL : ${hariini}*
*JAM : ${time2}*
*OWNER :*
*BOT VERSION : ${global.bot_version}*


▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*♪ ~ Menu Ai*
> ai
> google
> ~gpt~ (_Coming Soon_)
> ~blackbox~ (_Coming Soon_)

*♪ ~ Menu Owner*
> addprem
> delprem
> trackip
> pushkontak
> pushkontakv2
> pushkontakv3
> savecontact
> savecontactv2

*♪ ~ Menu Downlaod*
> tiktokdl
> tiktoksearch
> igdl

*♪ ~ Menu Convert*
> sticker
> tourl
> removebg
> ~smeme~ (dalam pengembangan)
> smeme2
> brat

*♪ ~ Menu Store*
> jpm
> listproduk
> done
> proses

*♪ ~ Menu Panel Pterodactyl*
> 1gb
> 2gb
> 3gb
> 4gb
> 5gb
> 6gb
> 7gb
> 8gb
> 9gb
> 10gb
> 11gb
> 12gb
> 13gb
> 14gb
> 15gb
> unli( ∞ )

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

_Note :_
_Kami Butuh Banyak Contributor Dalam Pembuatan Sc Ini, Silahkan Ketik Owner Jika Ingin Join Menjadi Contributor Sc Ini_`;
await lilychan.sendMessage(from, { document: fs.readFileSync('./package.json'), mimetype:"image/jpg", 
    fileName:`Mizzuu • Assistant`,
    fileLength:"9999999999999999999999",
    jpegThumbnail:thumbmini,
    contextInfo: {
    externalAdReply: {
    showAdAttribution: true, 
    title: `${ucapanWaktu}${emojiwaktu} ${pushname}`,
    body: 'Mizzuu • Assistant',
    mediaType: 1,  
    renderLargerThumbnail : true,
    thumbnailUrl: global.thumbnail,
    sourceUrl: ``
    }}, 
    caption: teksmenu,
    
    },  {quoted: m})
}
break
case'payment': case'pay':{
    if(!isCreator) return m.reply(`\n\n\n\n\n\nngapain cik kapal karam`)
    const kikir = `



*NGUAWOR*




`
    lilychan.sendMessage(from, {image: {url: global.thumbnail}, caption: kikir, }, {quoted:m})
}
break
case 'smeme2': {
    const { fromBuffer } = require('file-type');

    async function tmpfiles(buffer) {
        const { ext, mime } = (await fromBuffer(buffer)) || {};
        const form = new FormData();
        form.append("file", buffer, {
            filename: `tmp.${ext}`,
            contentType: mime
        });
        const { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
            headers: form.getHeaders()
        });
        const match = /https?:\/\/tmpfiles.org\/(.*)/.exec(data.data.url);
        return `https://tmpfiles.org/dl/${match[1]}`;
    }

    const atas = text.split('|')[0] ? text.split('|')[0] : '-';
    const bawah = text.split('|')[1] ? text.split('|')[1] : '-';
    if (!m.text) return m.reply(func.example(m.cmd, 'beliau | awikawok'));
    if (m.text.length > 75) return m.reply('Textnya kepanjangan.');
    if (/image\/(jpe?g|png)/.test(quoted.mime)) return m.reply(`Kirim/Reply gambar dengan caption ${m.cmd} text atas | text bawah`);
    m.reply('wait');

    let buffer = await quoted.download();
    let image_url = await tmpfiles(buffer);
    let meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${image_url}`;
    lilychan.sendImageAsSticker(m.chat, meme_url, m, {
        packname: packname, 
        author: author,
        expiration: m.expiration
    });

    if (/webp/.test(quoted.mime)) {
        if (m.quoted.isAnimated) return m.reply('Not support gif stickers.');
        lilychan.sendReact(m.chat, '🕒', m.key);
        let buffer = await quoted.download();
        let image_url = await tmpfiles(buffer);
        let meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${image_url}`;
        lilychan.sendImageAsSticker(m.chat, meme_url, m, {
            packname: packname, 
            author: author,
            expiration: m.expiration
        });
    }
}
break;
case 'igpostdl': case'igpost':{
const axios = require('axios');
const qs = require('qs');
const cheerio = require('cheerio');
const instadl = async (url) => {
    let data = qs.stringify({
        'url': url,
        'v': '3',
        'lang': 'en'
    });

    let config = {
        method: 'POST',
        url: 'https://api.downloadgram.org/media',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept-language': 'id-ID',
            'referer': 'https://downloadgram.org/',
            'origin': 'https://downloadgram.org',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'priority': 'u=0',
            'te': 'trailers'
        },
        data: data
    };

    try {
        const response = await axios.request(config);
        const $ = cheerio.load(response.data);
        let mediaInfo = {};

        if ($('video').length) {
            mediaInfo.videoUrl = $('video source').attr('src');
        } else if ($('img').length) {
            mediaInfo.imageUrl = $('img').attr('src');
        }

        for (let key in mediaInfo) {
            if (mediaInfo.hasOwnProperty(key)) {
                mediaInfo[key] = mediaInfo[key].replace(/\\\\"/g, '').replace(/\\"/g, '');
            }
        }

        return mediaInfo;
    } catch (error) {
        return { error: 'Error: ' + error.message };
    }
};
   
    if (command === 'igdl') {
        if (!args[0]) {
            return m.reply('url?!');
        }

        const url = args[0];
        if (!/^https?:\/\/(www\.)?instagram\.com/.test(url)) {
            return m.reply('gak valid.');
        }

        m.reply('✨ Wait..');

        const result = await instadl(url);
        if (result.error) {
            return m.reply(`emror: ${result.error}`);
        }

        if (result.videoUrl) {
            try {
                const videoBuffer = await axios.get(result.videoUrl, { responseType: 'arraybuffer' });
                await lilychan.sendMessage(m.chat, { video: Buffer.from(videoBuffer.data), caption: '✅ Video berhasil' });
            } catch (error) {
                m.reply('Gagal mengunduh dan mengirim video.');
            }
        } else if (result.imageUrl) {
            try {
                const imageBuffer = await axios.get(result.imageUrl, { responseType: 'arraybuffer' });
                await lilychan.sendMessage(m.chat, { image: Buffer.from(imageBuffer.data), caption: '✅ Gambar berhasil' });
            } catch (error) {
                m.reply('Gagal mengunduh dan mengirim gambar.');
            }
        } else {
            m.reply('Media tidak ditemukan di URL yang diberikan.');
        }
    }
}
break

case 'trackip':{
    if(!isCreator) return m.reply('lu bukan ownerr')
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await lilychan.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break


case'removebg':case'removebackground':{
if (/image\/(jpe?g|png)/.test(quoted.mime)) return m.reply(`
Kirim/Reply gambar dengan caption 
${prefix + command}
`) 
m.reply('wait')
try {
const buffer = await quoted.download()
const result = await removeBg(buffer, 'arraybuffer')
await lilychan.sendMessage(m.chat, {
image: result,
caption: `『 ${command} • Success 』`
}, {quoted: m, ephemeralExpiration: m.expiration})
} catch (e) {
m.reply(String(e))
}
}
break
case 'tourl': {
const fetch = require('node-fetch');
const FormData = require('form-data');
	var q = m.quoted ? m.quoted : m;
	
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime))return m.reply('reply atau beri caption')
		

		try {
			const img = await q.download?.();
			const fileSizeInBytes = img.length;
			const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
			const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
			const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;
			const form = new FormData();
			form.append('reqtype', 'fileupload');
			form.append('fileToUpload', img, 'image.jpg');

			let resImg = await fetch('https://catbox.moe/user/api.php', {
				method: 'POST',
				body: form
			});
			let imageUrl = await resImg.text();
			await m.reply(`🔗 URL Gambar: ${imageUrl.trim()}\n\n*Ukuran:* ${fileSize}`);
		} catch (e) {
			console.error(e);
			m.reply(`[ ! ] Gagal mengubah gambar menjadi URL. Error: ${e.message}`);
		}
	
}
break
case'listproduk':case'mylist':{
    const agus = `${global.list}`
    lilychan.sendMessage(m.chat, {text: agus, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
}
break
case 'done':{
    if(!isCreator) return m.reply('cot')
    let t = text.split(',')
    if(t.length < 2) return m.reply(`salah`)
    let barang = t[0];
    let nominal = t[1];
    let urutan = t[2];
    const sopo = `
*——————————{『INFO TRANSAKSI』}——————————*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*BARANG : ${barang}*
*NOMINAL : ${nominal}*
*URUTAN-TRX : ${urutan}*
*TANGGAL : ${hariini}*
*JAM : ${time2}*

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*CONTAC CS : ${global.owner}*
*TESTI : ${global.linktesti}*

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`
    const webnyo = ''
await lilychan.sendMessage(m.chat, {text: sopo, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: webnyo, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
}
break
case 'hd': case 'remini': {
const sharp = require('sharp');
async function upscaleImage(inputPath) {
try {
const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
fs.writeFileSync(tempFilePath, inputPath);
await sharp(inputPath)
.resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: false })
.sharpen()
.linear(1.2, -(128 * 1.2) + 128)
.modulate({ brightness: 0.98 })
.toFile(tempFilePath);
await lilychan.sendMessage(m.chat, {image: fs.readFileSync(tempFilePath)})
fs.unlinkSync(tempFilePath);
} catch (error) {
console.error('Error processing image:', error);
}
}

const bufferImage = await m.quoted.download()
return upscaleImage(bufferImage)
}
break
case 'google': {
let input = `Ex : ${prefix + command} Siapakah Presiden Indonesia Sekarang`

if (!text) return m.reply(input)
const website = axios.create({
baseURL: "https://app.yoursearch.ai",
headers: {
"Content-Type": "application/json",
},
});

const yousearch = async (searchTerm) => {
const requestData = {
searchTerm: searchTerm,
promptTemplate: `Search term: "${searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
searchParameters: "{}",
searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
};

try {
const response = await website.post("/api", requestData);
return response.data.response;
} catch (error) {
console.error("Error:", error);
throw error;
}
};

let hanjing = await yousearch(text)
m.reply(`${hanjing}`)
}
break
case 'tqto': 
case 'thanksto': {
    let caption = `ㅡㅈ Thanks To:
TanakaDomp ( *Creator Script* )
Avosky ( *Special Helpers* )
Kaviaan ( *Scraper* )
Mizzuu ( *Pembersih Hama* )
Han ( *Minta Fitur* )
Mecha ( *Minta Fitur* )

YOUR NAME?`

    await lilychan.sendMessage(m.key.remoteJid, {
        image: { url: 'https://raw.githubusercontent.com/TanakaDomp/uploder-db/main/uploads/senn_sed_boy.jpeg' },
        caption: caption,
        footer: "© Ɩylꪱc𝗁α𝗇 ხᦢƚ",
        
    }, { quoted: m });
}
break;
case 'owner':
case 'creator': {  
  lilychan.sendMessage(from, {
    contacts: {
      displayName: `${list_staff.length} Contact`,
      contacts: list_staff
    }
  }, {
    quoted: m
  });
}
break;
case 'addprem': {
    if (!isCreator) return m.reply(mess.owner);
    let jawir = args[0] + "@s.whatsapp.net";
    if (args.length < 2) {
        return m.reply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
    }
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[i], args[1], premium);
         lilychan.sendMessage(m.mentionedJid[i], { text: 'Congratulations you are now premium in Lilychan database 🎊' });
        }
        m.reply("Premium Success");
    } else {
        addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
        lilychan.sendMessage(jawir, { text: 'Congratulations you are now premium in Lilychan database 🎊' });
        m.reply("Success");
    }
}
break

case 'delprem': {
    if (!isCreator) return m.reply(mess.owner);
    if (args.length < 1) return m.reply(`Use :\n*#delprem* @tag\n*#delprem* number`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("./Storage/premium.json", JSON.stringify(premium));
        }
        m.reply("Delete success");
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
        fs.writeFileSync("./Storage/premium.json", JSON.stringify(premium));
        m.reply("Success");
    }
}
break


// AI
case 'ai': { 
    if (!text) return m.reply('Ada yang bisa ku bantu?');

        try {
        let aii = await fetchJson(`https://www.tanakadomp.biz.id/api/openai/open-ai?q=${q}`);
        await lilychan.sendMessage(m.chat, { text: aii.message },{ quoted : m });                
        } catch (error) {
            console.error(error);
            await m.reply("An error occurred while processing your request.");
    }
}
break

// TOOLS
case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`);

    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await lilychan.sendImageAsSticker(m.chat, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!');
        let media = await quoted.download();
        let encmedia = await lilychan.sendVideoAsSticker(m.chat, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else {
        return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`);
    }
}
break 

case 'smeme': {
    let respond = `Send/Reply image with caption ${prefix + command} txt-bawah|txt-atas`;
    if (!/image/.test(mime)) return m.reply(respond);
    if (!text) return m.reply(respond);

    m.reply(mess.wait);
    const atas = text.split('|')[0] ? text.split('|')[0] : '-';
    const bawah = text.split('|')[1] ? text.split('|')[1] : '-';
    
    let dwnld = await lilychan.downloadAndSaveMediaMessage(qmsg);
    let fatGans = await uploadToCatbox(dwnld);
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
    
    let pop = await lilychan.sendImageAsSticker(m.chat, smeme, m, {
        packname: packname,
        author: author
    });
    fs.unlinkSync(pop);
}
break
case 'brat': {
    let text;

    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("Input teks atau reply teks yang ingin dijadikan brat!");
    }

    if (!text) {
        return m.reply(`Penggunaan: ${prefix + command} <teks>`);
    }

    let ngawiStik = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`);
    await lilychan.sendImageAsSticker(m.chat, ngawiStik, m, {
        packname: `𓄯ִ ── ꯭𐑈ƚꪱִ𝖼𝗄ᧉׄ𝗋 ᎓`,
        author: `${pushname} ׄ 𝅄crᧉׄdı๋𝗍 : 森晓伟 ταიακαdοოρ.ხiz.id\nAt ${hariini}\n${time2}`
    });
}
break;
// DOWNLOADER 
case 'tiktok':
case 'tiktokdl': {
    let text;
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("Input URL atau Reply URL tiktok yang ingin di download!");
    }

    await lilychan.sendMessage(m.chat, { react: { text: "🕐", key: m.key } });

    let old = new Date();
    let tanaka = await tiktokdl(text);
    
    await lilychan.sendMessage(m.chat, { 
        video: { url: tanaka.hdplay }, 
        caption: tanaka.title 
    }, { quoted: m });
}
break; 

// SEARCH FITUR
case 'ttsearch': {
    if (!text) return m.reply(`• *Example :* .${command} jedag jedug`);
    
    lilychan.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    
    let lily = await tiktoksearch(`${text}`);
    await lilychan.sendMessage(m.key.remoteJid, {
    video: { url: lily.media[0].no_watermark },
    caption: lily.title,
    footer: "© Ɩylꪱc𝗁α𝗇 ხᦢƚ",
    buttons: [{
            buttonId: `${prefix}ttsearch ${text}`,
            buttonText: {
                displayText: '🍱 NEXT'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true
}, { quoted: m });
}
break
default:
if (budy.startsWith('$')) {
    if (!isCreator) return m.reply(mess.owner);
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(err);
        if (stdout) return m.reply(stdout);
    });
}

if (budy.startsWith('~')) {
    if (!isCreator) return m.reply(mess.owner);
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        await m.reply(String(err));
    }
}

if (budy.startsWith('~>')) {
    if (!isCreator) return m.reply(mess.owner);

    function Return(sul) {
        let sat = JSON.stringify(sul, null, 2);
        let bang = util.format(sat);
        if (sat === undefined) {
            bang = util.format(sul);
        }
        return m.reply(bang);
    }

    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
    } catch (e) {
        m.reply(String(e));
    }
}
//batas euy 
}
} catch (err) {
  let formattedError = util.format(err);
  let errorMessage = String(formattedError);
  let stackTrace = err.stack ? err.stack : "Stack trace not available";
  if (typeof err === 'string') {
    m.reply(`Terjadi error:\n\nKeterangan Error: ${errorMessage}`);
  } else {
    console.log(formattedError);
  }
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
