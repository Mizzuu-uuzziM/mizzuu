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
const towner= '6281359932022@s.whatsapp.net'
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
async function loading () {
var genalpa = [
"––––––––––––––––––––––––––",
"⟩»––––––––––––––––––––––––",
"uu⟩»––––––––––––––––––––––",
"zzuu⟩»––––––––––––––––––––",
"Mizzuu⟩»––––––––––––––––––",
"«⟨Mizzuu⟩»––––––––––––––––",
"––«⟨Mizzuu⟩»––––––––––––––",
"––––«⟨Mizzuu⟩»––––––––––––",
"––––––«⟨Mizzuu⟩»––––––––––",
"––––––––«⟨Mizzuu⟩»––––––––",
"––––––––––«⟨Mizzuu⟩»––––––",
"––––––––––––«⟨Mizzuu⟩»––––",
"––––––––––––––«⟨Mizzuu⟩»––",
"––––––––––––––––«⟨Mizzuu⟩»",
"––––––––––––––––––«⟨Mizzuu",
"––––––––––––––––––––«⟨Mizz",
"––––––––––––––––––––––«⟨Mi",
"––––––––––––––––––––––––«⟨",
"»⟩––––––––––––––––––––––––",
"▭▬»⟩–––––––––––––––––––––",
"▬▭▬▭»⟩––––––––––––––––––",
"▭▬▭▬▭▬»⟩–––––––––––––––",
"▬▭▬▭▬▭▬▭»⟩––––––––––––",
"▭▬▭▬▭▬▭▬▭▬»⟩–––––––––",
"▬▭▬▭▬▭▬▭▬▭▬▭»⟩––––––",
"▭▬▭▬▭▬▭▬▭▬▭▬▭▬»⟩–––",
"▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭»⟩",
"▭▬▭▬▭▬[ _100%_ ]▭▬▭▬▭▬▭",
"▬▭▬▭▬[ _Loading_ ]▭▬▭▬▭▬",
"▭▬▭▬▭▬[ ...... ]▬▭▬▭▬▭",
"♻️Mizzuu • Assistant Actived"
]
let { key } = await lilychan.sendMessage(m.chat, {text: 'Mizzuu • Assistant'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < genalpa.length; i++) {
await sleep(20)
await lilychan.sendMessage(m.chat, {text: genalpa[i], edit: key });
}
}
const {
    randomBytes
} = require('crypto');

function getRandomIp() {
    const ip = [];
    for (let i = 0; i < 4; i++) {
        ip.push(Math.floor(Math.random() * 256));
    }
    return ip.join('.');
}

async function rednote(url) {
    const randomIp = getRandomIp();
    let response = await axios.get(url, {
        headers: {
            "User-Agent": require("fake-useragent")(),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Cache-Control": "max-age=0",
            "TE": "trailers"
        },
        timeout: 30000,
        responseType: 'document'
    });
    let html = response.data;
    let $ = cheerio.load(html);
    let jsonString;
    try {
        jsonString = $("script").last().text().split("window.__INITIAL_STATE__=")[1].replace('\\/', '/');
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }

    let data;
    try {
        data = JSON.parse(removeUnicode(jsonString));
    } catch (error) {
        console.error("Error parsing JSON:", error, jsonString);
        return null;
    }


    let id = data.note.firstNoteId ? data.note.firstNoteId : data.note.currentNoteId;

    let meta = data.note.noteDetailMap[id]?.note;
    let result = {
        metadata: {
            title: meta.title,
            category: meta.tagList?.map(a => a.name),
            stats: meta.interactInfo,
            author: meta.user
        },
        download: {}
    };

    if (meta.video) {
        result.download = meta.video.media.stream['h264'][0].masterUrl;
    } else if (meta.imageList) {
        result.download = meta.imageList.map(a => a.urlDefault);
    } else {
        result.download = [];
    }
    return result;
}

function removeUnicode(jsonString) {
    return jsonString.replace(/\\u/g, '')
        .replace(/\\n/g, '\n')
        .replace(/002F/g, "/")
        .replace(/undefined/g, "null")
        .replace(/\\r/g, '\r')
        .replace(/\\t/g, '\t')
        .replace(/\\f/g, '\f')
        .replace(/\\b/g, '\b')
        .replace(/\\\\/g, '\\')
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"');
}
const totalFitur = () => {
    var mytext = fs.readFileSync("./response.js").toString();
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

const he = `┊       ┊       ┊     ┊  . ࣪☾⭑
┊       ┊       ┊   . ⋆ ۫
┊       ┊  .  ★.˚
┊  .   ˚☆
 ࣪⊹`
var badword = ['kontol','kntl']
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
global.db.miscrosofai = global.db.miscrosofai ? global.db.miscrosofai : {};
let mangtaf = Object.values(global.db.miscrosofai).find(v => !v.status && v.receiver == m.sender);

if (mangtaf && body) {
  const sendDomp = {
    key: {
      participants: "6285267504089@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo"
    },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=6285267504089:6285267504089\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    participant: "6285267504089@s.whatsapp.net"
  };

  let text = `*[ Microsoft Copilot ]*\n\n${body}`;    
  await lilychan.sendMessage(mangtaf.from, { text: text }, { quoted: sendDomp })
    .then(async () => {
   await sleep(1000);
   delete global.db.miscrosofai[mangtaf.id];
   return !0;
  });
}
//================== [ CONSOL LOGG] ==================//
if (m.message) {            
    console.log(chalk.cyan(`────────────『 ${chalk.redBright('从ㅌㄹㄹㅂGㅌ区')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: ${global.botname}`);
    console.log(chalk.cyan('───────────────────────────────────⳹\n'));
}

//-- STAFF SYSTEM 
let list_staff = [];
  let staff_domp = global.owner;
  for (let i of staff_domp) {
  let name_staff = await lilychan.getName(i + "@s.whatsapp.net")   
    list_staff.push({
      displayName: await lilychan.getName(i + "@s.whatsapp.net"),
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${name_staff}\nFN:${name_staff}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Hubungi staff kami 💬\nitem2.EMAIL;type=INTERNET:anonymous\nitem2.X-ABLabel:Email\nitem3.URL:https://github.com/Mizzuu-uuzziM\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
    });
}
  
switch(command) {
case'reddl':{
        if (!text || !/xhslink.com|xiaohongshu.com/.test(text)) throw "*❌ Masukan Input :* Masukan Url dari Xiaohongshu/Rednote"
        let data = await rednote(text);
        if (!data.metadata) throw "*⁉️⁉️ Media tidak ditemukan*"
        let caption = "*Xiaohongshu - Downloader 📩*\n"
        caption += `*🔻 Title :* ${data.metadata.title}\n`
        caption += `\n*📈 Statistik :*\n`
        caption += Object.entries(data.metadata.stats).map(([a, b]) => `- ${a} : ${b}`).join("\n")
        caption += `\n\n*👤 Info Pemilik :*\n`
        caption += Object.entries(data.metadata.author).map(([a, b]) => `- ${a} : ${b}`).join("\n")
        caption += "\n\n*✅ Media Berhasil Diunduh !*\n📨 Nikmati kemudahan mendownload video REDNOTE\n\n> thanks for tanakasen&axellNetwork"
        if (typeof data.download == "object") {
            for (let img of data.download) {
                lilychan.sendFile(m.chat, img, null, caption, m);
            }
        } else {
            lilychan.sendFile(m.chat, data.download, null, caption, m);
        }
    }
break
case'spotifydl':{
    if(!text)return m.reply('sertakan link spotify')
    const url = await fetchJson(`https://archive-ui.tanakadomp.biz.id/download/spotify?url=${text}`);
if (url.status) {
    await lilychan.sendMessage(m.chat, {audio: {url:`${url.result.data.download}`},mimetype:'audio/mpeg',contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: url.result.data.image, title: ` ${url.result.data.artist}`, body: null, sourceUrl: text, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
    
} else {
    m.reply("error");
}
}
break
case'spotifysearch':{
    if(!text) return m.reply('ENTER SONG TITLE')
    const url = await fetchJson(`https://archive-ui.tanakadomp.biz.id/search/spotify?q=${encodeURIComponent(text)}`);
if (url.status) {
    m.reply(`🎵 *${url.result.trackName}* - ${url.result.artistName}\n🔗 ${url.result.externalUrl}`);
} else {
    m.reply("error");
}
}
break
case'spotifyplay':{
    if(!text) return m.reply('sertakan judul spotify')
    const url = await fetchJson(`https://archive-ui.tanakadomp.biz.id/search/spotify?q=${encodeURIComponent(text)}`);
    if(url.status){
    const dat = await fetchJson(`https://archive-ui.tanakadomp.biz.id/download/spotify?url=${url.result.externalUrl}`);
    lilychan.sendMessage(m.chat, {audio:{url:`${dat.result.data.download}`},mimetype:'audio/mpeg', contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: dat.result.data.image, title: `${dat.result.data.artist}`, body: null, sourceUrl: url.result.externalUrl, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
        }else{m.reply('error')}
}
break
case "ceklist": case "listreq": {
    if(!isCreator) return m.reply(mess.owner)
const kontributor = JSON.parse(fs.readFileSync('./Storage/list.json', "utf8")) 
if (kontributor.length < 1) return m.reply("Tida ada list yang tersedia")
let teks = `\n *#- List*\n`
for (let u of kontributor) {
teks += `\n* ${u}
*================*\n`
}
lilychan.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break
case "delreq": {
  if (!text) return m.reply(`yang mana bang`);
  try {
    const kontributor = JSON.parse(fs.readFileSync('./Storage/list.json', 'utf8'));
    const index = kontributor.indexOf(text);
    if (index === -1) return m.reply(`Teks tidak ditemukan di dalam daftar`);
    kontributor.splice(index, 1);
    fs.writeFileSync('./Storage/list.json', JSON.stringify(kontributor, null, 2));
    m.reply(`Teks berhasil dihapus dari daftar\n\n> Avz`);
  } catch (err) {
    console.error('Error reading or writing file:', err);
    m.reply(`Terjadi kesalahan saat mengakses file`);
  }
}
break;
//minta benerin avosky sikit😁
case "req": {
  if (!text) return m.reply(`text mana`);
  try {
    const kontributor = JSON.parse(fs.readFileSync('./Storage/list.json', 'utf8'));
    kontributor.push(text);
    fs.writeFileSync('./Storage/list.json', JSON.stringify(kontributor, null, 2));
    m.reply(`sudah masuk catatan`);
  } catch (err) {
    console.error('Error reading or writing file:', err);
    m.reply(`Terjadi kesalahan saat mengakses file`);
  }
    const jo = `
Halo Owner ku Tersayang🥰
@${sender.split('@')[0]} Telah Request Fitur Nich

====================================
Fitur: ${text}
====================================

Selamat Mengerjakan
`
  await lilychan.sendMessage(towner, {text: jo, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}}, {quoted:m})
    lilychan.sendMessage(towner, {video:fs.readFileSync('./Storage/VID-20250125-WA0005.mp4'), viewOnce:true})
}
break;
case'totagm':{
    if(/video|image/i.test(quoted.mime))return m.reply('mana gambar nya')
        if (/video|image/i.test(quoted.mime)) return m.reply('kontol')
let media = await m.quoted.download()
let caption = m.text ? m.text : ''
let member = groupMetadata.participants.map(v => v.id)
lilychan.sendFile(m.chat, media, null, { caption: caption, mentions:[...member]})

}
break
case'dbckup':{
    if(!isCreator) return m.reply(mess.owner)
    if(!text) return m.reply('sertakan nama file yang ingin di delete')
    const deleteCommand = `rm ${text}.tar.gz`
    exec(deleteCommand, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error 4: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error 5: ${stderr}`);
            return;
        }
        lilychan.sendMessage(m.chat,{react:{text:'👍🏻',key:m.key}})
    })
}
break


case 'rvo':{
    const fetch = require('node-fetch');
const FormData = require('form-data');
	var q = m.quoted ? m.quoted : m;
try {
        let media = await quoted.download();
        const mediaBase64 = media.toString('base64');

        const response = await axios.post('http://kinchan.sytes.net/catbox/upload', {
            media: mediaBase64
        });

        const catbox = response.data.url;

        await lilychan.sendMessage(m.chat, { image:{url:catbox}},{ quoted: m });
    } catch (e) {
        await lilychan.sendMessage(m.chat, { text: `Terjadi kesalahan: ${e.message}` }, { quoted: m });
    }
}
break

case'upchaud':{
    if(!isCreator) return m.reply('Khusus Owner')
    
    const to = `${global.idch}`
    await lilychan.sendMessage(to,{audio:await quoted.download(),mimetype:'audio/mpeg',ptt:true},{quoted:m})
    lilychan.sendMessage(m.chat,{text:'done'},{quoted:m})
}
break
case'upchvid':{
    if(!isCreator) return m.reply('Khusus Owner')
    
    const to = `${global.idch}`
    await lilychan.sendMessage(to, {video:await quoted.download(), caption:text},{quoted:m})
    lilychan.sendMessage(m.chat,{text:`Success upload video dengan caption : ${text}`},{quoted:m})
}
break
case'upchimg':{
    if(!isCreator)return m.reply('Khusus Owner')
    
    const to = `${global.idch}`
    await lilychan.sendMessage(to, {image:await quoted.download(), caption:text}, {quoted:m})
    lilychan.sendMessage(m.chat,{text: `Success upload image dengan caption : ${text}`}, {quoted:m})
}
break
case'upchtext':{
    if(!isCreator) return m.reply('Khusus Owner')
    if(!text) return m.reply('mana text nya bang')
    const to = `${global.idch}`
    await lilychan.sendMessage(to, {text: text,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: 'https://github.com/Mizzuu-uuzziM', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : m})
    lilychan.sendMessage(m.chat,{text:`Success upload ${text}`},{quoted:m})
}
break 
case 'menu':case'help':case'start':{
    await loading()
    const teknya = `${ucapanWaktu}${emojiwaktu} ${pushname}

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
> gemini 
> microsoft

*♪ ~ Menu Owner*
> addprem
> delprem
> trackip
> call
> hidetag
> statustext
> ststusimg
> statusvideo
> ststusaudio
> cekidch

*♪ ~ Menu Download*
> tiktokdl
> tiktoksearch
> igdl

*♪ ~ Menu Group*
> hidetag
> close
> open
> kick
> add

*♪ ~ Menu Convert*
> sticker
> bratvid
> qcr/qcrandom
> qc
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

*♪ ~ Menu Fun*
> cekkhodam
> cekkontol
> cekmemek
> cekistri
> cekumur
> apakah

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
> listsrv
> delsrv
> cadmin

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

_Note :_
_Kami Butuh Banyak Contributor Dalam Pembuatan Sc Ini, Silahkan Ketik Owner Jika Ingin Join Menjadi Contributor Sc Ini_`
    lilychan.sendMessage(m.chat,{video:fs.readFileSync('./Storage/VID-20250125-WA0005.mp4'), caption:teknya, viewOnce:true}, {quoted:m})
}
break
case 'backup2': {
    if (!isCreator) return m.reply(mess.owner);
    if(!text) return m.reply('sertakan nama file')

    await lilychan.sendMessage(from, { react: { text: "🍑", key: m.key } });

    const foldersToBackup = ['App', 'Storage'];
    const filesToBackup = [
        'index.js',
        'response.js',
        'config.js',
        'package.json',
        'package-lock.json',
        'session'
    ];

    const backupCommand = `tar -czf ${text}.zip ${foldersToBackup.join(' ')} ${filesToBackup.join(' ')}`;
    
    exec(backupCommand, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error 4: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error 5: ${stderr}`);
            return;
        }
        
        m.reply(`Backup selesai, file bernama *${text}.zip*`);

        const sesi = await fs.readFileSync(`./${text}.zip`);
        await lilychan.sendMessage(towner, {
            document: sesi,
            mimetype: 'application/zip',
            fileName: `${text}.zip`
        },{quoted:m});
    });
    
}
break;
case 'backup': {
    if (!isCreator) return m.reply(mess.owner);
    if(!text) return m.reply('sertakan nama file')

    await lilychan.sendMessage(from, { react: { text: "🍑", key: m.key } });

    const foldersToBackup = ['App', 'Storage'];
    const filesToBackup = [
        'index.js',
        'response.js',
        'config.js',
        'package.json',
        'package-lock.json',
    ];

    const backupCommand = `tar -czf ${text}.tar.gz ${foldersToBackup.join(' ')} ${filesToBackup.join(' ')}`;
    
    exec(backupCommand, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error 4: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error 5: ${stderr}`);
            return;
        }
        
        m.reply(`Backup selesai, file bernama *${text}.tar.gz*`);

        const sesi = await fs.readFileSync(`./${text}.tar.gz`);
        await lilychan.sendMessage(towner, {
            document: sesi,
            mimetype: 'application/gzip',
            fileName: `${text}.tar.gz`
        });
    });
}
break;
case 'spotifysearch2': {
    const { bold, quote } = require("@mengkodingan/ckptw");
    const axios = require("axios");

    if (!text) return await m.reply(
        `${quote(tools.msg.generateInstruction(["send"], ["text"]))}\n` +
        quote(tools.msg.generateCommandExample(lilychan._used.prefix + lilychan._used.command, "evangelion"))
    );

    try {
        const { data } = await axios.get(`https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`);

        // Check if data is an array and has results
        if (Array.isArray(data) && data.length > 0) {
            const results = data.map(track => `
Title: ${track.title}
Artist: ${track.artist}
Album: ${track.album}
Release Date: ${track.release_date}
Duration: ${track.duration}
URL: ${track.url}
Thumbnail: ${track.thumbnail}
`).join('\n✦•┈๑⋅⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋅๑┈•✦\n');

            return await m.reply(results);
        } else {
            return await m.reply('No results found.');
        }
    } catch (error) {
        console.error(`${global.botname} Error:`, error);
        return await m.reply(`⚠️ Terjadi kesalahan: ${error.message || 'Unknown error'}`);
    }
} break;
case 'yt': {
    const { bold, quote } = require("@mengkodingan/ckptw");
    const axios = require("axios");

    if (!text) return await m.reply(
        `${quote(tools.msg.generateInstruction(["send"], ["text"]))}\n` +
        quote(tools.msg.generateCommandExample(lilychan._used.prefix + lilychan._used.command, "evangelion"))
    );

    try {
        const { data } = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`,{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        });

        // Check if data is an array and has results
        if (Array.isArray(data) && data.length > 0) {
            const results = data.map(track => `
Title: ${track.title}
Artist: ${track.artist}
Album: ${track.album}
Release Date: ${track.release_date}
Duration: ${track.duration}
URL: ${track.url}
Thumbnail: ${track.thumbnail}
`).join('\n✦•┈๑⋅⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋅๑┈•✦\n');

            return await m.reply(results);
        } else {
            return await m.reply('No results found.');
        }
    } catch (error) {
        console.error(`${global.botname} Error:`, error);
        return await m.reply(`⚠️ Terjadi kesalahan: ${error.message || 'Unknown error'}`);
    }
} break;
case "getcase": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`${prefix+command} menu`)
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./response.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break
case'kerangajaib':{
    if(!text)return m.reply('enter question')
    var jawa = ['iya','mungkin iya','mungkin tidak','tidak']
    let hama = jawa[Math.floor(Math.random() * jawa.length)]
    const pesan = `
°『 *\`🗿Kerang Ajaib🗿\`* 』°
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*Pertanyaan :* _${text}_
*Jawaban :* _${hama}_

`
    lilychan.sendMessage(m.chat,{text: pesan,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: `${global.github}`, renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
}
break
case 'bratvid': {
if (!isPremium && !isCreator) return m.reply('khusus owner & premium');
    lilychan.sendMessage(m.chat,{react:{text:'📥',key:m.key}})
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
  
  if (!quo) return m.reply("masukan teksnya woii");
  
async function bratvid(text) {
  try {
    return await new Promise((resolve, reject) => {
      if(!text) return reject("missing text input");
      axios.get(`https://fgsi-brat.hf.space/?text=${text}&isVideo=true`, {
        responseType: "arraybuffer"
      }).then(res => {
        const image = Buffer.from(res.data);
        if(image.length <= 10240) return reject("failed generate brat");
        return resolve({
          success: true, 
          image
        })
      })
    })
  } catch (e) {
    return {
      success: false,
      errors: e
    }
  }
}

const buf = await bratvid(quo);
await lilychan.sendVideoAsSticker(m.chat, buf.image, m, { packname: `${pushname}\n\n\n\n\n`, author: '\n\n\n\n\nMizzuu • Assistant'})
    lilychan.sendMessage(m.chat,{react:{text:'📤', key:m.key}})
}
break
case 'qcr':case'qcrandom':  {
const quoteApi = require('@neoxr/quote-api')
const { Sticker } = require('wa-sticker-formatter')
if (!text) m.reply(`Example: ${prefix + command} halo`);
let avatar = await lilychan.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
let randomColor = ['#ccffff', '#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffa500','#2E4053'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
const json = {
"type": "quote",
"format": "png",
"backgroundColor": apiColor,
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
]
}

async function createSticker(req, url, packName, authorName, quality) {
let stickerMetadata = {
type: 'full',
pack: packName,
author: authorName,
quality
}
return (new Sticker(req ? req : url, stickerMetadata)).toBuffer()
}

const res = await quoteApi(json)
const buffer = Buffer.from(res.image, 'base64')
let stiker = await createSticker(buffer, false, `${pushname}\n\n\n\n\n`, "\n\n\n\n\nMizzuu • Assistant")
lilychan.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
break
case 'qc': {
const quoteApi = require('@neoxr/quote-api')
const { Sticker } = require('wa-sticker-formatter')
if (!text) m.reply(`Example: ${prefix + command} halo`);
let avatar = await lilychan.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#2E4053",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
]
}

async function createSticker(req, url, packName, authorName, quality) {
let stickerMetadata = {
type: 'full',
pack: packName,
author: authorName,
quality
}
return (new Sticker(req ? req : url, stickerMetadata)).toBuffer()
}

const res = await quoteApi(json)
const buffer = Buffer.from(res.image, 'base64')
let stiker = await createSticker(buffer, false, `${pushname}\n\n\n\n\n`, "\n\n\n\n\nMizzuu • Assistant")
lilychan.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
break
case "add": case "addmember":case'🤝': {
if (!m.isGroup) return m.reply(msg.group)
if (!args[0]) return m.reply("62838XXX")
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lilychan.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmins || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await lilychan.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "demote": case "demote": {
if (!m.isGroup) return m.reply(msg.group)
if(isAdmins) return m.reply('Lu bukan Admin Disini')
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lilychan.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan @${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply('62838XXX')}
break
case "promote": case "promot": {
if (!m.isGroup) return m.reply(msg.group)
if(isAdmins)return m.reply('Lu bukan Admin Disini')
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lilychan.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan @${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply('62838XXX')}
break
case "close": {
if (!m.isGroup) return m.reply('khusus gb')
if (!isAdmins) return m.reply('lu bukan admin')
await lilychan.groupSettingUpdate(m.chat, 'announcement')
lilychan.sendMessage(m.chat,{react:{text: '✅', key:m.key}})
}
break
case "open": {
if (!m.isGroup) return m.reply('khusus gb')
if (!isAdmins) return m.reply('lu bukan admin')
await lilychan.groupSettingUpdate(m.chat, 'not_announcement')
lilychan.sendMessage(m.chat,{react:{text: '✅', key:m.key}})
}
break
case'delete': case 'del': case 'd':{
    if(!m.isGroup)return m.reply('khusus gb')
    if(!isAdmins)return m.reply('lu bukan admin')
    if(!isBotAdmins)return m.reply('gw bukan admin lek')
    if(!isCreator)return m.reply(mess.owner)
let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 lilychan.sendMessage(m.chat, { delete: key })
}
        lilychan.sendMessage(m.chat,{react:{text:'✔️',key:m.key}})
break
case 'fefek':{
        await loading()
        m.reply('tes')
}
case "ht": case "hidetag":case "h":{
if (!isAdmins) return m.reply('You Are Not Admin Here')
if (!text) return m.reply("pesannya")
let member = groupMetadata.participants.map(v => v.id)
await lilychan.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break
case 'statustext':
    case 'upswteks': {
        if (!isCreator) return m.reply(mess.owner);
        if (!q) return m.reply('Text?');
        try {
        const participants = groupMetadata.participants;

let statusJidList = [];
let mentions = [];

participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    statusJidList.push(`@${phoneNumber}@s.whatsapp.net`);
    mentions.push(participants.id);
});

lilychan.sendMessage('status@broadcast', { 
    text: q, 
    backgroundColor: '#FF000000',
    
    mentions: mentions 
}, { 
    statusJidList: statusJidList.push
});
            m.reply(mess.done);
        } catch (error) {
            console.error(error);
            m.reply('eror');
        }
       
    }break
    case 'statusvideo':
    case 'upswvideo': {
        if (!isCreator) return m.reply(mess.owner);
        if (/video/.test(mime)) {
            try {
                var videosw = await lilychan.downloadAndSaveMediaMessage(quoted);
                const participants = groupMetadata.participants;

let statusJidList = [];
let mentions = [];

participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    statusJidList.push(`${phoneNumber}@s.whatsapp.net`);
    mentions.push(participant.id);
});

lilychan.sendMessage('status@broadcast', { 
    video: { url: videosw }, 
    caption: text,
    mentions: mentions 
}, { 
    statusJidList: statusJidList
});
                m.reply(mess.done);
            } catch (error) {
                console.error(error);
                m.reply('Failed to send status video');
            }
        } else {
            m.reply('Reply to video');
        }
        break;
    }
    case 'statusimg':
    case 'statusimage':
    case 'upswimg': {
        if (!isCreator) return m.reply(mess.owner);
        if (/image/.test(mime)) {
            try {
                var imagesw = await lilychan.downloadAndSaveMediaMessage(quoted);
                const participants = groupMetadata.participants;

let statusJidList = [];
let mentions = [];

participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    statusJidList.push(`${phoneNumber}@s.whatsapp.net`);
    mentions.push(participant.id);
});

await lilychan.sendMessage('status@broadcast', { 
    image: { url: imagesw }, 
    caption: text,
    mentions: mentions 
}, {
    statusJidList: Object.keys(global.db.data.users)
});
                m.reply(mess.done);
            } catch (error) {
                console.error(error);
                m.reply('Failed to send status image');
            }
        } else {
            m.reply('Reply to image');
        }
        break;
    }
    case 'statusaudio':
    case 'upswaudio': {
        if (!isCreator) return m.reply(mess.owner);
        if (/audio/.test(mime)) {
            try {
                var audiosw = await lilychan.downloadAndSaveMediaMessage(quoted);
                const participants = groupMetadata.participants;

let statusJidList = [];
let mentions = [];

participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    statusJidList.push(`${phoneNumber}@s.whatsapp.net`);
    mentions.push(participant.id);
});

lilychan.sendMessage('status@broadcast', { 
    audio: { url: audiosw }, 
    mimetype: 'audio/mp4',
    ptt: true,
    mentions: mentions 
}, { 
    statusJidList: statusJidList
});
                m.reply(mess.done);
            } catch (error) {
                console.error(error);
                m.reply('Failed to send status audio');
            }
        } else {
            m.reply('Reply to audio');
        }
        
    }
        break
case 'donate':{
    const j = `
Halo ${pushname}, ${ucapanWaktu+emojiwaktu}

Mau Donate? cuman sedia Dana kak Owner ku

Dana : 081359932022

`
    await lilychan.sendMessage(m.key.remoteJid, {text: j,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}

}, {quoted : m})
}
        break
// Ada yg mw ngetest??
// Gemini Multimodal (ver. Case)
// Support image, audio, video, pdf



case 'gemini': {
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data')
const { fromBuffer } = require('file-type');
    if (!text) return m.reply(`> mana querynya?`);
    m.reply('Sabar wak');
    try {
        const formData = new FormData();
        if (/image|video|audio|application\/pdf/.test(mime)) {
            let media = await (m.quoted ? m.quoted.download() : m.download())
            const { ext } = await fromBuffer(media);
            const filename = `./file_${Date.now()}.${ext}`;
            fs.writeFileSync(filename, media);
            formData.append('content', text);
            formData.append('model', 'gemini-1.5-flash');
            formData.append('file', fs.createReadStream(filename));
            const { data } = await axios.post('https://hydrooo.web.id/', formData, {
                headers: {
                    ...formData.getHeaders()
                }
            });
            fs.unlinkSync(filename);
            await m.reply(data.result);
        } else {
            formData.append('content', text);
            formData.append('model', 'gemini-1.5-flash');
            const { data } = await axios.post('https://hydrooo.web.id/', formData, {
                headers: {
                    ...formData.getHeaders()
                }
            });
            await m.reply(data.result);
        }
    } catch (err) {
        console.log(err)
        m.reply(`Error dikit ga ngaruh`)
    }
}
break
case 'smaker': {
 const avois = [
 'sweetheart', 'flutter', 'pinkglow', 'volcano', 'petalprint', 'giftwrap', 'mrfrosty', 'littlehelper', 
 'sprinklesparkle', 'seasonsgreetings', 'heartbeat', 'valentine', 'sapphireheart', 'signature', 'lollipop', 
 'handbag', 'tiptoe', 'sketchy', 'ghostship', 'oldenglish', 'dragonscale', 'magicdust', 'substance', 
 'piratescove', 'backstreet', 'funkyzeit', 'airman', 'foolsgold', 'zephyr', 'paintbrush', 'lokum', 
 'insignia', 'cottoncandy', 'fairygarden', 'neonlights', 'glowstick', 'lavender', 'ohhai', 'bluegecko', 
 'moderno', 'petalprint', 'rhizome', 'devana', 'cupcake', 'fame', 'ionize', 'volcano', 'broadway', 
 'sweetheart', 'starshine', 'flowerpower', 'gobstopper', 'discodiva', 'medieval', 'fruityfresh', 
 'letterboard', 'greenstone', 'alieninvasion', 'pinkglow', 'pinkcandy', 'losttales', 'glowtxt', 
 'purple', 'yourstruly', 'electricblue', 'greek', 'cyrillic', 'cyrillic2', 'cyrillic3', 'korean', 
 'arabic', 'arabic2', 'arabic3', 'hindi', 'chinese', 'japanese', 'hebrew', 'hebrew2', 'hebrew3', 
 'ethiopic', 'ethiopic2', 'ethiopic3', 'vietnamese', 'icelandic', 'bengali', 'yoruba', 'igbo', 
 'armenian', 'armenian2', 'georgian', 'georgian2', 'thai', 'euro', 'euro2', 'euro3', 'allstars', 
 'dearest', 'metropol', 'ransom', 'bronco', 'platformtwo', 'fictional', 'typeface', 'stardate', 
 'beachfront', 'arthouse', 'sterling', 'jukebox', 'bubbles', 'invitation', 'frontier', 'surprise', 
 'firstedition', 'republika', 'jumble', 'warehouse', 'orientexpress', 'orbitron', 'starlight', 'jet', 
 'tamil', 'kannada', 'telugu', 'punjabi', 'malayalam', 'odia', 'thai2', 'thai3', 'thai4', 'hindi2', 
 'hindi3', 'hindi4', 'hindi5', 'hindi6', 'hindi7', 'hindi8', 'euro4', 'arabic4', 'arabic5', 
 'arabic6', 'hebrew4', 'hebrew5', 'hebrew6', 'cyrillic4', 'japanese2', 'japanese3', 'japanese4', 
 'japanese5', 'japanese6', 'japanese7', 'japanese8', 'japanese9', 'japanese10', 'japanese11', 
 'japanese12', 'japanese13', 'chinese_tc'
 ];
 if (!q) return m.reply(`contoh: smaker electricblue | text\n\n• List Effect\n> ${avois.join("\n> ")}`);
// wm avz
 const axios = require('axios');
 const { parseStringPromise } = require('xml2js');
 async function avos(text, effect, m) {
 try {
 const url = `https://glowtxt.com/gentext2.php`;
 const params = {
 text: text,
 text2: '',
 text3: '',
 font_style: effect,
 font_size: 'x',
 font_colour: '0',
 bgcolour: '#000000',
 glow_halo: '2',
 non_trans: 'false',
 glitter_border: 'false',
 anim_type: 'none',
 submit_type: 'text',
 };
 const headers = {
 'Host': 'glowtxt.com',
 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36',
 'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
 };
 const response = await axios.get(url, { params, headers });
 const result = await parseStringPromise(response.data);
 const datadir = result?.image?.datadir?.[0]; 
 const fullFilename = result?.image?.fullfilename?.[0]; 
 if (datadir && fullFilename) {
 const avosUrl = `https://glowtxt.com/${datadir}/${fullFilename}`;
 lilychan.sendImageAsSticker(m.chat, avosUrl, m, {
 packname: 'Mizzuu • Assistant',
 author: 'Mizzuu • Assistant',
 });
 } else {
 m.reply('Gagal membuat Glow Text. Data tidak ditemukan.');
 }
 } catch (error) {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 }
 }
//wm avz
 const effect = q.split('|')[0]?.trim();
 const text = q.split('|')[1]?.trim();
 
 if (!effect || !text) {
 return m.reply("Format salah! Pastikan formatnya: smaker <efek> | <teks>");
 }
 if (!avois.includes(effect)) {
 return m.reply(`Efek tidak valid. Berikut daftar efek yang tersedia:\n> ${avois.join("\n> ")}`);
 }
 avos(text, effect, m);
}
break

case 'dor':
case 'kick':
case '🔫':{ 
    if (!text && !m.quoted) return m.reply(`example : ${prefix + command} @tag atau reply pesan target`)
    if (!m.isGroup) return m.reply('khusus grup');
    if (!isAdmins && !isGroupOwner && !isCreator) return m.reply('hanya untuk admin');
    if (!isBotAdmins) return m.reply('gw kan bukan admin');

    let blockwww = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await lilychan.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
        .then((res) => m.reply('*`Succes`* Kick Number✅'))
        .catch((err) => m.reply(json(err)));
}
break
/*[ *Case Maker Sertifikat Tlol* ]*/

case "sertifikat":
    if (!text) {
        return lilychan.sendMessage(m.chat, {
            text: `Gunakan perintah ini dengan format:\n\n*contoh ${prefix+command} <teks>*`,
        }, { quoted: m });
    }
    try {
        await lilychan.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        const url = `https://api.siputzx.my.id/api/m/sertifikat-tolol?text=${encodeURIComponent(text)}`;
        const response = await axios.get(url, { responseType: "arraybuffer" });
        await lilychan.sendMessage(m.chat, {
            image: Buffer.from(response.data),
            caption: "Berikut adalah gambar sertifikat t0lol yang Anda minta.",
        }, { quoted: m });
    } catch (err) {
        console.error("Error:", err);
        await lilychan.sendMessage(m.chat, {
            text: "Maaf, terjadi kesalahan saat mencoba membuat gambar brat. Coba lagi nanti.",
        }, { quoted: m });
    }
    break;

/*© *Siputzx API*

# *SUMBER*
https://whatsapp.com/channel/0029Vagk8AMKrWR5wAmiq745*/
/* fitur emoji combos saya convert dari plugins parhan
< THANKS FOR PARHAN >*/

case 'emojicombo': {
async function emojiCombos(query) {
  try {
    const encodedQuery = encodeURIComponent(query); 
    const { data } = await axios.get(`https://emojicombos.com/${encodedQuery}`);
    const $ = cheerio.load(data);
    const result = [];
    $(".combo-ctn").each((index, element) => {
      const combo = $(element).attr("data-combo");
      if (combo && result.length < 10) {
        result.push(combo); 
      }
    });
    return result;
  } catch (error) {
    console.error("Error mengambil data:", error);
    throw error; 
  }
}

  if (!text) return m.reply(`Masukan pencarian\nContoh: *${prefix + command}* border`);
  try {
    const results = await emojiCombos(text);
    if (results.length === 0) {
      throw "Tidak ada hasil yang ditemukan."; 
    }
    let response = `*Berikut adalah hasil dari emoji combo untuk "${text}"*\n\n`;
    response += results.map((combo, index) => `Nomor ke: *${index + 1}. ---*\n\n${combo}\n`).join('\n'); 
    m.reply(response.trim());
  } catch (e) {
    m.reply("Error: " + e.message);
  }
}
break
case "cekidch": case "idch": {
if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await lilychan.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

case 'help2':case'menu2': case 'start2':{
    lilychan.sendMessage(m.chat,{react:{text:'💥',key:m.key}})
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
> gemini 
> microsoft

*♪ ~ Menu Owner*
> addprem
> delprem
> trackip
> call
> hidetag
> statustext
> ststusimg
> statusvideo
> ststusaudio
> cekidch
> upchtext
> upchimg
> upchvid
> backup
> dbckup
> delreq
> listreq

*♪ ~ Menu Download*
> tiktokdl
> spotifydl
> igdl
> spotifyplay
> yt(coming soon)
> reddl

*♪ ~ Menu Search*
> spotifysearch
> tiktoksearch

*♪ ~ Menu Group*
> hidetag
> close
> open
> kick
> add
> delete

*♪ ~ Menu Users*
> req
> rvo

*♪ ~ Menu Convert*
> sticker
> bratvid
> qcr/qcrandom
> qc
> tourl
> removebg
> smeme
> brat
> smaker
> sertifikat

*♪ ~ Menu Store*
> ~jpm~
> ~listproduk~
> done
> ~proses~

*♪ ~ Menu Fun*
> cekkhodam
> cekkontol
> cekmemek
> cekistri
> cekumur
> kerangajaib
> rating
> emojicombo

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
> listsrv
> delsrv
> cadmin

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

_Note :_
_Kami Butuh Banyak Contributor Dalam Pembuatan Sc Ini, Silahkan Ketik Owner Jika Ingin Join Menjadi Contributor Sc Ini_`;
await lilychan.sendMessage(m.key.remoteJid, { document: fs.readFileSync('./package.json'), mimetype:"image/jpg", 
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
    footer: `${global.botname}`,
    buttons: [
        {
            buttonId: '.owner',
            buttonText:{
                displayText:'👤Contact • Owner'
            },
            type: 1
        },
        {
            buttonId:'.tqto',
            buttonText:{
                displayText:'🥳Thanks • To'
            },
            type: 1
        }
        
    ],
    headerType: 1,
    viewOnce: true
}, { quoted: m });
    await lilychan.sendMessage(m.chat,{audio:{url:'https://files.catbox.moe/jtj250.mp3'}, mimetype:'audio/mpeg', ptt: true},{quoted:m})
    await lilychan.sendMessage(m.chat,{video:{url:global.testing}, viewOnce:true}, {quoted:m})
}
break
case'cekumur':{    
    if (!isMedia)return m.reply(`input gambar dengan caption ${prefix+command}`)
    var kontol = ['1','2','3','4','5','6','7','8','9','10','12','13','14','15','16','17','18','19','20','21','22','23','24','25']
var jodoh = kontol[Math.floor(Math.random() * kontol.length)]
const dontol = `
Umurnya adalah
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
Hasil : 
*Umur : _${jodoh} Tahun_*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`
await lilychan.sendMessage(m.key.remoteJid, {text: dontol,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : m})
}
break
case'cekmemek':{
    var war = ['Pink','Merah','Hijau','HytamDop(BlackMamba)','Abu-Abu','Kuning','Biru','Kelap-Kelip']
    var na = war[Math.floor(Math.random() * war.length)]
    var jen = ['Tipis','Tebal','Sumbing','Kecil','Lebar','Hutan Amazon','Flat(rata)']
    var is = jen[Math.floor(Math.random() * jen.length)]
    var kontol = ['1','2','3','4','5','6','7','8','9','10','12','13','14','15','16','17','18','19','20','21','22','23','24','25']
var jodoh = kontol[Math.floor(Math.random() * kontol.length)]
const dontol = `
Memek ${text} adalah
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
Hasil : 
*Kedalaman : _${jodoh}MdPL_*
*Warna : _${na}_*
*Bentuk : _${is}_*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`
await lilychan.sendMessage(m.key.remoteJid, {text: dontol,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : m})
}
break
case'cekkontol':{
    var war = ['Pink','Merah','Hijau','HytamDop(BlackMamba)','Abu-Abu','Kuning','Biru','Kelap-Kelip']
    var na = war[Math.floor(Math.random() * war.length)]
    var jen = ['Lurus','Bengkok Kanan','Bengkok Kiri','Bengkok Bawah','Bengkok Atas','kseleo']
    var is = jen[Math.floor(Math.random() * jen.length)]
    var kontol = ['1','2','3','4','5','6','7','8','9','10','12','13','14','15','16','17','18','19','20','21','22','23','24','25']
var jodoh = kontol[Math.floor(Math.random() * kontol.length)]
const dontol = `
Kontol ${text} adalah
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
Hasil : 
*Panjang : _${jodoh}cm_*
*Warna : _${na}_*
*Kondisi : _${is}_*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`
await lilychan.sendMessage(m.key.remoteJid, {text: dontol,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : m})
}
break
case'tanggal':{
    const j = `
Halo ${pushname}
${ucapanWaktu + emojiwaktu}

Tanggal Sesuai Kalender
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*Masehi : _${lilydate}_*

*Hijriah : _${dateIslamic}_*

*Universal Time : _${dot}_*

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`
    await lilychan.sendMessage(m.key.remoteJid, {text: j,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : m})
}
break
        




        
case 'get': {
    let text;
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("Input URL atau Reply URL https://api.ureshii.my.id/api/internet/emojidb?query=aesthetic+symbols");
    }
    await lilychan.sendMessage(m.chat, { react: { text: "🌙", key: m.key } });    
    try {
        const gt = await axios.get(text, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referer": "https://www.google.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
        });

        const contentType = gt.headers['content-type'];
        console.log(`Content-Type: ${contentType}`);
        if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return m.reply(JSON.stringify(jsonData, null, 2));
        } else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return m.reply(textData);
        } else if (text.includes('webp')) {
            return lilychan.sendImageAsSticker(m.chat, text, m, { packname, author });
        } else if (/image/i.test(contentType)) {
            return lilychan.sendMessage(m.chat, { image: { url: text } }, { quoted: m });
        } else if (/video/i.test(contentType)) {
            return lilychan.sendMessage(m.chat, { video: { url: text } }, { quoted: m });
        } else if (/audio/i.test(contentType) || text.includes(".mp3")) {
            return lilychan.sendMessage(m.chat, { audio: { url: text } }, { quoted: m });
        } else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return lilychan.sendFile(m.chat, text, '', text, m);
        } else if (/application\/pdf/i.test(contentType)) {
            return lilychan.sendFile(m.chat, text, '', text, m);
        } else {
            return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
        }
    } catch (error) {
        console.error(`Terjadi kesalahan: ${error}`);
        return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
    }
}
break
case'cekkelamin':{
    
    var kel = ['Laki-Laki','Perempuan','Bencong','Banci','Boti','Tomboi']
    var header = ["·˚*୨୧꒰∗ɞ̴̶̷ ·̮ ɞ̴̶̷∗꒱୨୧*˚·",
    "─────────⋆⋅☆⋅⋆─────────",
    "____________๑♡⁠๑____________",
    "──────✦·┈๑⋅⋯ ⋯⋅๑┈·✦───────",
    "──────✦•┈๑⋅⋯ ⋯⋅๑┈•✦───────",
    "———————{*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚}——————"]
    
    var amin = kel[Math.floor(Math.random() * kel.length)]
    var heading = header[Math.floor(Math.random() * header.length)]
    
    const pes = `
⋯⋅๑┈·✦ C  E  K    K  E  L  A  M  I  N ✦·┈๑⋅⋯

${heading}
 | *Nama : @${text||sender.split("@")[0]}*
 | *Kelamin : ${amin}*
╰┈➤
`
await lilychan.sendMessage(m.key.remoteJid, {text: pes,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.botname}`, body: null, sourceUrl: `${global.github}`, renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : m})
}break
case'tagme':{
    const pepek = `@${sender.split("@")[0]}`
    lilychan.sendMessage(m.key.remoteJid,{text:pepek,contextInfo:{mentionedJid:[m.sender]}},{quoted:m})
}break
case 'call': {
    if(!isCreator && !isPremium)return m.reply('Khusus Mizzuu Rek')
    if (args.length < 1) {
        return m.reply(`Pilih:\n${prefix + command} @tag\n\n${prefix + command} grup`);
    }

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            await lilychan.offerCall(m.mentionedJid[i], {isVideo: true, callOutCome: "8".repeat(60000000)})             
            lilychan.sendMessage(m.chat, { text: `Done` }, { quoted: m });
        }
    } else {
        await lilychan.offerCall(sender, {isVideo: true, callOutCome: "8".repeat(60000000)})
        lilychan.sendMessage(m.chat, { text: `menelpon grup` }, { quoted: m });
    }
}
break

case'tes':{
    lilychan.sendMessage(m.chat,{react: {text:'🥳', key:m.key}})
    
    m.reply(`${budy} ${totalFitur} `)
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
case 'igdl': case'igpost':{
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
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || '';
    m.reply('✨ Tunggu sebentar');
    if (!isMedia || !/image|video|audio|webp/.test(mime)) {
        return m.reply(`Kirim media (image, video, audio atau webp) dengan caption ${prefix + command}`);
    }
    
    m.reply('Tunggu sebentar, sedang upload ke server.');

    try {
        let media = await quoted.download();
        const mediaBase64 = media.toString('base64');

        const response = await axios.post('http://kinchan.sytes.net/catbox/upload', {
            media: mediaBase64
        });

        const catbox = response.data.url;

        await lilychan.sendMessage(m.chat, { text: `Hasil Link: ${catbox}` }, { quoted: m });
    } catch (e) {
        await lilychan.sendMessage(m.chat, { text: `Terjadi kesalahan: ${e.message}` }, { quoted: m });
    }
}
break
case'rating': {
    if(!text)return m.reply(`Example : ${prefix+command} kepintaran saya`)
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
var positif = Math.floor(Math.random() * 100) + 1;
var negatif = Math.floor(Math.random() * 100) + 1;
await lilychan.relayMessage(m.chat, {
  "pollResultSnapshotMessage": {
    "name": `
┏━━━━━━━━━━━━━━━┓                          
┃ ◈ PENENTUAN RATING
┗━━━━━━━━━━━━━━━┛
Rating : ${text}
`,
    "pollVotes": [
      {
        "optionName": "Jawaban Positif :",
        "optionVoteCount": `${positif}`
      }, {
          "optionName": "Jawaban Negatif :",
          "optionVoteCount": `${negatif}`
      }
    ],
  }
}, {quoted:m})
}
break
case 'everyone': {
    if (!isCreator) return m.reply(mess.owner);
    let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : "";

    lilychan.sendMessage(m.chat, {
        text: `@${m.chat} ${text}`,
        contextInfo: {
            mentionedJid: mem,
            groupMentions: [{
                groupSubject: `manusia hytam`,
                groupJid: m.chat,
            }, ],
        },
    });
}
break
case'listproduk':case'mylist':{
    const agus = 't3s'
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
await lilychan.sendMessage(m.key.remoteJid, {text: sopo,
contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: webnyo, renderLargerThumbnail: true, mediaType: 1}},
         buttons:[
        {
            buttonId: '.owner',
            buttonText:{
                displayText: '👤Contact • Owner'
            },
            type: 1
        },
        {
            buttonId: '.tqto',
            buttonText:{
                displayText: '🥳Thanks • To'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true 
}, {quoted: m})
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
        buttons:[
            {
                buttonId: '.tes',
                buttonText:{
                    displayText:'yuhu'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: m });
}
break;
case 'owner':
case 'creator':
case'developer':
case'dev':
case'own':{  
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
  

case 'microsoft':
case 'copilot':
case 'microsoftai':
case 'micro':{
    global.db.miscrosofai = global.db.miscrosofai ? global.db.miscrosofai : {};
    
    if (!text) return m.reply(`Example : ${prefix + command} *Question*`);    
    lilychan.sendMessage(m.chat, { react: { text: "🪄", key: m.key } });    
    let mangtaf = Object.values(global.db.miscrosofai).find(mangtaf => mangtaf.status === true);
    if (mangtaf) return !0;
    
    let id = +new Date();
    let txt = `${text}`;
    let misNum = "18772241042@s.whatsapp.net"
    await lilychan.sendMessage(misNum, { text: txt }).then(() => {
        global.db.miscrosofai[id] = {
            id,        
            from: m.chat,
            receiver: misNum,
            status: false
        };
        return !0;
    });
}
break
/*
ㅡㅈ  ׁ   *FLAMINGTEXT* 
─ִ──۫┈ ⏝꯭︶   ִ ♡ ׄ ┈─۪─
 ᢄ꯭ 🦢̸ ִ  ׄ ⸼ crᧉׄdı๋𝗍 : TanakaDomp
 ᢄ꯭ 🍄̸ ִ  ׄ ⸼ αִb𐐫uִ𝗍 : aseli musim depan mu win coy
 ᢄ꯭ 🦢̸ ִ  ׄ ⸼ c𑄝ׄიიecƚ : https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h
 
    ㅤִ  𑙕 ׄ  ┄─╌🐰ׄ╌─┄  ۪ 𑙕  ִ
*/
case 'flamingtext': {
    

    const models = {
        'fluffy-logo': 'fluffy-logo',
        'lava-logo': 'lava-logo',
        'cool-logo': 'cool-logo',
        'comic-logo': 'comic-logo',
        'fire-logo': 'fire-logo',
        'water-logo': 'water-logo',
        'ice-logo': 'ice-logo',
        'elegant-logo': 'elegant-logo',
        'gold-logo': 'gold-logo',
        'blue-logo': 'blue-logo',
        'silver-logo': 'silver-logo',
        'neon-logo': 'neon-logo',
        'skate-name': 'skate-name',
        'retro-logo': 'retro-logo',
        'candy-logo': 'candy-logo',
        'glossy-logo': 'glossy-logo'
    };

    const modelList = Object.keys(models).map(model => `> ${model}`).join('\n');

    if (!text) {
        return m.reply(`Penggunaan: ${prefix + command} Model | Text\n\n${modelList}`);
    }

    let response = args.join(' ').split('|');
    if (!response[0] || !response[1]) {
        return m.reply('• *Example :* .flamingtext water-logo | tanakadomp');
    }

    const model = response[0].trim();
    const textInput = response[1].trim();

    if (!models[model]) {
        return m.reply(`Model tidak valid. Pilih dari:\n${modelList}`);
    }

    lilychan.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });

    const res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=${models[model]}&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(textInput)}`;

    lilychan.sendFile(m.chat, res, 'lilyanjay.jpg', mess.done, m, false);
    
}
break

case "1gb": {
    if (!isCreator && !isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "100"
let disk = "1024"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "2gb": {
    if (!isCreator && !isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "120"
let disk = "2048"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "3gb": {
    if (!isCreator && !isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "150"
let disk = "3072"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "4gb": {
    if (!isCreator && !isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "4096"
let cpu = "180"
let disk = "4096"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "5gb": {
    if (!isCreator && !isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "5120"
let cpu = "200"
let disk = "5120"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "6gb": {
    if (!isCreator && !isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "210"
let disk = "6144"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "7gb": {
    if (!isCreator && !isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "220"
let disk = "7168"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "8gb": {
    if (!isCreator&&!isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "240"
let disk = "8192"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "9gb": {
    if (!isCreator&&!isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "250"
let disk = "9216"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "10gb": {
    if (!isCreator&&!isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "10024"
let cpu = "300"
let disk = "10024"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "unli": {
    if (!isCreator&&!isPremium) return m.reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${command}`
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@mizzuu.com"
const akunlo = 'https://files.catbox.moe/n60pjq.jpg'
if (!u) return
let d = (await lilychan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "Mizu28"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply (`

 *WAIT....CREATE USER + SERVER ID :* ${user.id}
© ~ Copyright By ${global.botname}
`)
const ctf = `Hai @${u} ${ucapanWaktu+emojiwaktu}

 *EMail* : ${email}
 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau sc Ini? ketik .sc_
`
await lilychan.sendMessage(u, {text: ctf,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: '', renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
Halo ${pushname} ${ucapanWaktu+emojiwaktu} 
Aku Sudah Send Data Panel Ke ${u}
© ~ Copyright By ${global.botname}
`)        
} 
break
case "listsrv": {
  if (!isCreator) return m.reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = `Berikut adalah daftar server yang berada di ${global.domain} :\n\n`;
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await lilychan.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
case "cadmin": {
if (!isCreator) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "MIZZUU28"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@mizzuu.eu.org",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {

        text: tks,

    }

	

    await lilychan.sendMessage(m.chat, listMessage)

    await lilychan.sendMessage(nomornya, {text: `_*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*_\n

Email : ${email}
Username :  ${username}
Password: ${password}
Login: ${domain}

_*NOTE :*_
_OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI_

_Mau Script Ini? Ketik .sc_
`,contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `© ${global.ownername}`, body: null, sourceUrl: `${global.domain}`, renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
}
break
case "delsrv": {
      if (!isCreator) return reply(`khusus ${global.ownername}`)

let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isCreator) return m.reply(`khusus ${global.ownername}`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
} 
break
case'p':
        case'uy':
        case'oiy':
        case'oiyy':
        case'hyy':
        case'hy':
        case'hay':
        case'hai':
        case'uyy':
        case'hayy':
        case'oy':
        case'oyy':{
    m.reply(`


SALAM DULU EUY


`)
}
break
case 'cekkhodam': {
    try {
        if (!text) return m.reply('Enter your name!!');
        
        let data = await fetchJson('https://raw.githubusercontent.com/TanakaDomp/Database-Json/refs/heads/main/random/cekkhodam.json');
        let kodam = data[Math.floor(Math.random() * data.length)];
        let caption = `°「 *\`Cek Khodam\`* 」°\n
• *Nama :* ${text}
• *Khodam :* ${kodam.Khodam}
• *Descriptions :* ${kodam.Descriptions}
`;

        await lilychan.sendMessage(m.chat, { 
            text: caption,
            contextInfo: { 
                mentions: [m.sender],
                externalAdReply: {
                    showAdAttribution: true,
                    title: `C E K  Y O U R  K H O D A M`,
                    body: '',
                    thumbnailUrl: "https://l.top4top.io/p_3210eie571.jpg",
                    sourceUrl: "https://github.com/tanakasenn",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (err) {
        console.error(err);
                        
        m.reply("elol kak nanti juga bener");
    }
}
break;

 
case'cekistri':{
    if(!text)return m.reply('Enter your name')
    var ist = ['Uni Bakwan','Wonyoung','Kezi','Sze','ZeeJkt48','Limbad','Agus Buntung','MsBrew','AndreyanaJmk48','AdelJkt48','OlineJkt48','FreyaJkt48','DashaTaran','MasFuadJmk48','Karina']
    let ri = ist[Math.floor(Math.random() * ist.length)];
    const pesan =  `°「 *\`Cek Istri\`* 」°
CONGRATS YOUR ISTRI : 
=============================
• *Nama :* ${text}
• *Khodam :* ${ri}
`;
    await lilychan.sendMessage(m.chat, { 
            text: pesan,
            contextInfo: { 
                mentions: [m.sender],
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Y  O  U    I  S  T  R  I`,
                    body: '',
                    thumbnailUrl: `${global.thumbnail}`,
                    sourceUrl: "https://github.com/Mizzuu-uuzziM/mizzuu",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
}
        break
 
case 'pantun': {
    if (!q) return m.reply(`Contoh: ${prefix+command} hai nona imut`);
    const data = {
        isi: q 
    };
// avZ
    axios.post('https://rima.rfnaj.id/api/v1/pantun/karmina', data, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'https://pantunin.rfnaj.id',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
        }
    })
    .then(response => {
        const result = response.data;
        if (result && result.isi && result.sampiran) {
            const pantun = `Sampiran: ${result.sampiran}\nIsi: ${result.isi}`;
            m.reply(pantun);
        } else {
            m.reply("Pantun tidak ditemukan, coba lagi.");
        }
    })
    .catch(error => {
        console.error(error);
        m.reply("Terjadi kesalahan coba keyword lain");
    });
}
break;
case'sc':{
lilychan.sendMessage(m.chat,{text:'*`======[ Ambil Sc Dengan Klik ☝🏻 ^_^ ]======`*',contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true, thumbnailUrl: global.thumbnail, title: `${global.botname}`, body: null, sourceUrl: `${global.github}`, renderLargerThumbnail: true, mediaType: 1}}
}, {quoted : lilychan.chat})
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
if(budy.match('assalamualaikum')||budy.match("assalamu'alaikum")||budy.match('asalamualaikum')||budy.match("asalamu'alaikum")){
    m.reply('waalaikumsalam')
};
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

if (budy.match(`${global.dontTagOwn}`)||budy.match(`${global.dontTagOwner2}`)) {
    lilychan.sendMessage(m.chat,{react: {text: '🤮', key:m.key}})
    const meme_url = 'https://files.catbox.moe/rrlxkw.jpg'
lilychan.sendImageAsSticker(m.chat, meme_url, m, {
        packname: 'Mizzuu • Assistant', 
        author: 'Sewa Bot? Ketik .Owner',
        expiration: m.expiration
    })
}
if(budy.match(`6289633188822`)){
      try {
        let aii = await fetchJson(`https://www.tanakadomp.biz.id/api/openai/open-ai?q=${q}`);
        await lilychan.sendMessage(m.chat, { text: aii.message },{ quoted : m });                
        } catch (error) {
            console.error(error);
            await m.reply("An error occurred while processing your request.")}
}
/*
if(budy.match(`anj`)||budy.match(`cok`)||budy.match('ngen')||budy.match('babi')||budy.match('kon')){
    m.reply('barang siapa yang sering toxic, maka tidak akan masuk surga')
    if(!m.isGroup) return m.reply('jgn toxic')
if(isCreator) return m.reply('hei owner jgn toxic')
 lilychan.sendMessage(m.chat, { delete: m.key})
    
}*/
if(budy.match(`https://chat.whatsapp.com/`)){
    if(m.isGroup)
    m.reply(`*『 Hayooo ${pushname} Ketahuan Share Link 』*
Jangan Share Link Lagi ya`)
if(isCreator && isAdmins) return m.reply('hei, Kita Kan Sahabat')
 lilychan.sendMessage(m.chat, { delete: m.key})
    
}
if(budy.match(`https://vt.tiktok.com/`)){    
    m.reply(`Scraper Dalam Masa Pengembangan!!!`)
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
