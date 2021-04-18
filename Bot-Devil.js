/*=====> Assallamualaikum <=====
MAU COLONG?? BOLEH......
MAU RECODE?? JUGA BOLEH...
ASLKAN KASIH NAMA GW Aguz
HARGAI COK
=======> GA KASIH NAMA GW, LU ITU CUPU<=====
*/
const
  {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const imageToBase64 = require('image-to-base64')
const fs = require("fs") 
const requests = require("node-fetch")
const { color, bgcolor } = require('./lib/color')
const axios = require("axios")
const { fetchJson } = require('./lib/fetcher')
const { exec, spawn} = require("child_process")
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close} = require('./lib/functions')
const got = require("got");
const ms = require('parse-ms')
const toMs = require('ms')
const ytdl = require('ytdl-core')
const brainly = require('brainly-scraper')
const { ind } = require('./bahasa')
const fontPath = ('./lib/Zahraaa.ttf')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { infown } = require('./lib/infown')
const { snk } = require('./lib/snk')
const gis = require('g-i-s');
const request = require('request');
const yts = require( 'yt-search')
const ID3Writer = require('browser-id3-writer')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
const setthumb = fs.readFileSync('./jadi.jpeg')
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const _autostiker = JSON.parse(fs.readFileSync('./lib/aguzx/autosticker.json'))
const kontol = JSON.parse(fs.readFileSync('./settings/agoz.json'))
//kontak
//const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
//const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:KING AGUZ\n' //ganti nama lu! 
              + 'ORG: Owner SELF-AGUZ;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6288806888170:+62 88806888170\n'  //ganti nomor lu! 
              + 'END:VCARD'
             
const vcard2 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:Whatsapp Aguz\n' //ganti nama lu! 
              + 'ORG: Owner SELF-AGUZ;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=0:+0\n'  //ganti nomor lu! 
              + 'END:VCARD'
             ////apikey
const VhtearKey = kontol.VhtearKey
const apivhtear = kontol.apivhtear
const ZeksApi = kontol.ZeksApi
const BarBarKey = kontol.BarBarKey
const shizukaapi = kontol.shizukaapi
const TobzKey = kontol.TobzKey
const LolApi = kontol.LolApi
const LolHuman = kontol.LolHuman // ${LolHuman} fitur maker banyaj yg menggunakan apikey ini
const VthearApp = kontol.VthearApp
const BarBarApi = kontol.BarBarApi
const TechApi = kontol.TechApi
const OnlyDev = kontol.OnlyDev
const VthearApi= kontol.VthearApi

//settings
prefix = kontol.prefix
fake = kontol.fake
fakes  = kontol.fakes
nomornye = '0'
blocked = []
cr= kontol.cr
banChats = true
offline = false
publik = false
waktuafk = '-'
alasanafk = 'Tidur'
numbernye = '0'
setgrup = '6283136505591-1614953337@g.us'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('0m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
function kyun3(seconds3){
  function pad3(s3){
  return (s3 < 10 ? '0' : '') + s3;
  }
  var hours3 = Math.floor(seconds3 / (60*60));
  var minutes3 = Math.floor(seconds3 % (60*60) / 60);
  var seconds3 = Math.floor(seconds3 % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad3(hours3)} H ${pad3(minutes3)} M ${pad3(seconds3)} S`
  
  
}
function kyun1(seconds1){
  function pad1(s1){
  return (s1 < 10 ? '0' : '') + s1;
  }
  var hours1 = Math.floor(seconds1 / (60*60));
  var minutes1 = Math.floor(seconds1 % (60*60) / 60);
  var seconds1 = Math.floor(seconds1 % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad1(hours1)} H ${pad1(minutes1)} M ${pad1(seconds1)} S`
  
  
}
function kyun2(seconds2){
  function pad2(s2){
  return (s2 < 10 ? '0' : '') + s2;
  }
  var hours2 = Math.floor(seconds2 / (60*60));
  var minutes2 = Math.floor(seconds2 % (60*60) / 60);
  var seconds2 = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad2(hours2)} H ${pad2(minutes2)} M ${pad2(seconds2)} S`
  
  
}
function kyun(seconds){
  function pad(s){
  return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
  
  
}
/**HARI**/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: jams = "Malam🌛"; break;
                case 1: jams = "Malam🌛"; break;
                case 2: jams = "Malam🌛"; break;
                case 3: jams = "Pagi✨"; break;
                case 4: jams = "Pagi✨"; break;
                case 5: jams = "Pagi✨"; break;
                case 6: jams = "Pagi✨"; break;
                case 7: jams = "Pagi✨"; break;
                case 8: jams = "Pagi✨"; break;
                case 9: jams = "Pagi✨"; break;
                case 10: jams = "Pagi✨"; break;
                case 11: jams = "Siang🔥"; break;
                case 12: jams = "Siang🔥"; break;
                case 13: jams = "Siang🔥"; break;
                case 14: jams = "Siang🔥"; break;
                case 15: jams = "Sore🌹"; break;
                case 16: jams = "Sore🌹"; break;
                case 17: jams = "Sore🌹"; break;
                case 18: jams = "Malam🌛"; break;
                case 19: jams = "Malam🌛"; break;
                case 20: jams = "Malam🌛"; break;
                case 21: jams = "Malam🌛"; break;
                case 22: jams = "Malam🌛"; break;
                case 23: jams = "Malam🌛"; break;
            }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

console.log(tampilTanggal);
console.log(tampilWaktu);

const hexa = new WAConnection()
   hexa.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('Scan','white'),color('The','red'),color('Whatsapp','yellow'))
})

hexa.on('credentials-updated', () => {
  const authInfo = hexa.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
hexa.connect();

hexa.on('message-update', async (hurtz) => {
  try {
    const from = hurtz.key.remoteJid
    const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
    const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
    const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
    const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
    const sender = hurtz.key.fromMe ? hexa.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
    const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
    const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
    const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false

if (messageStubType == 'REVOKE' && isRevoke) {
          const from = hurtz.key.remoteJid
          console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
      if (!isRevoke) return
      if (!isCtRevoke) return
      if (!isBanCtRevoke) return
          const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
          const sender = hurtz.key.fromMe ? hexa.user.jid : isGroup ? hurtz.participant : hurtz.key.remoteJid
          let int
          let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
          const id_deleted = hurtz.key.id
             	const freply1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/png", "caption": "*「 _SELF-MODE!!_  」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./jadi.jpeg')} } }
		
          const conts = hurtz.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
          const pushname = hurtz.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
          const opt4tag = {
             contextInfo: { mentionedJid: [sender] }
          }
          for (let i = 0; i < infoMSG.length; i++) {
             if (infoMSG[i].key.id == id_deleted) {
                const dataInfo = infoMSG[i]
                const type = Object.keys(infoMSG[i].message)[0]
                const timestamp = infoMSG[i].messageTimestamp
                int = {
                   no: i,
                   type: type,
                   timestamp: timestamp,
                   data: dataInfo

                }
             }
          }
          const index = Number(int.no)
          const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
          const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
        	var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				var guze = `6283136505591-1614953337@g.us`
				// var taged = agz.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						remoteJid: guze,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
            const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				hexa.sendMessage(from, strConversation, MessageType.text, selepbot72, {quoted: freply1})
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
				var guze = `6283136505591-1614953337@g.us`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							remoteJid: guze,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await hexa.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				hexa.sendMessage(from, strConversation, MessageType.text, opt4tag, {quoted: freply1})
				hexa.sendMessage(from, buff, MessageType.sticker, pingbro23, {quoted: freply1})
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
				var guze = `6283136505591-1614953337@g.us`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							remoteJid: guze,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await hexa.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				hexa.sendMessage(from, buff, MessageType.image, {quoted: freply1, contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

/*if (messagesC.includes("://chat.whatsapp.com/")){
		//if (!isGroup) return
		if (!isAntilink) return

		//if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		hexa.updatePresence(from, Presence.composing)
		if (messagesC.includes("${prefix}izinadmin")) return reply("${prefix}izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			hexa.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			hexa.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			hexa.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}*/
	/*hexa.on('group-participants-update', async(anu) => {
		if (!welkom.includes(anu.jid)) return
        try {
        const mdata = await hexa.groupMetadata(anu.jid)
            mem = anu.participants[0]
            console.log(anu)
            try {
                var pp_user = await hexa.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
           }
           //var names1 = hexa.contacts[num] != undefined ? hexa.contacts[num].name || hexa.contacts[num].vname || hexa.contacts[num].notify : undefined
			       
            if (anu.action == 'add') {
                ini_user = hexa.contacts[mem]
                ini_img = await getBuffer(`https://api-self.herokuapp.com/api/canvaswel?name=${ini_user.notify}&img_url=${pp_user}&gcname=${mdata.subject}&jumlahmem=9999`)
                
                group_info = await hexa.groupMetadata(anu.jid)
                welkam = `*〔 WELCOME IN GC ${group_info.subject} 〕*\n╭━━━━━━━━━━━━━━━━━━━━ \n┃ *➣ Nama   :* \n┃ *➣ Umur   :* \n┃ *➣ Askot   :* \n┃ *➣ Gender :* \n┃ *➣ Insta    :* \n╰━━━━━━━━━━━━━━━━━━━━\n @${mem.split('@')[0]} Intro/Dikick!!!`
                hexa.sendMessage(anu.jid, ini_img, MessageType.image, { caption: welkam, contextInfo: {"mentionedJid": [mem]} })
            }
            try {
            const mdata = await hexa.groupMetadata(anu.jid)
                var pp_usere = await hexa.getProfilePicture(mem)
            } catch (e) {
                var pp_usere = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
           }
            if (anu.action == 'remove') {
                ini_user = hexa.contacts[mem]
                group_indo = await getBuffer(`https://api-self.herokuapp.com/api/canvasbye?name=${ini_user.notify}&img_url=${pp_user}&gcname=${mdata.subject}&jumlahmem=9999`)
                ini_out = `*SELAMAT TINGGAL @${mem.split('@')[0]}* \nJasamu akan saya kubur dalam dalam`
                hexa.sendMessage(anu.jid, group_indo, MessageType.image, {caption: ini_out, contextInfo: {"mentionedJid": [mem]}})
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })*/
hexa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
	    const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync('./jadi.jpeg'), mimetype: "application/octet-stream",title: "_*AGUZ 2011*_", fileLength: "36", pageCount: 0, fileName: `${fake}`}}, messageTimestamp: "1614069378", status: "PENDING"}
	    const mdata = await hexa.groupMetadata(anu.jid)
	    console.log(anu)
			        if (anu.action == 'add') {
			        num = anu.participants[0]
			        var names1 = hexa.contacts[num] != undefined ? hexa.contacts[num].name || hexa.contacts[num].vname || hexa.contacts[num].notify : undefined
			       
			        teks = `*@${num.split('@')[0]}*`
			         var imgbb = require('imgbb-uploader')
					var path = require('path')
					var { spawn } = require('child_process')
					const diTulis = `\n\n${names1}\n\n\nWelcomeTo_${mdata.subject}`
					const panjangKalimat = diTulis.replace(/(\S+\s*){1,5}/g, '$&-')
					const panjangBaris = panjangKalimat.split('-').join('-')
					spawn('convert', [
					'./src/add.png',
					'-gravity', 
					'center', 
					'-fill',
					'#FF2303',
					'-stroke',
					'#FFFFFF',
					'-strokewidth',
					'6',
					'-font',
					'./lib/agzfnt.ttf',
					'-size',
					'2120x1192',
					'-pointsize',
					'100',
					'-interline-spacing',
					'-7.5',
					'-annotate',
					'+0+265',
					panjangBaris,
					'./temp/ttp2.png'
					])
					.on('exit', () => {
						imgbb("6e930040217770526ad1091c102d652a", './temp/ttp2.png').then(res => {
							trig = `${res.display_url}`
							trip = getRandom('.png')
						
							exec(`wget ${trig} -O ${trip} && ffmpeg -i ${trip}`, (err) => {
								olab = fs.readFileSync(trip)
								hexa.sendMessage(mdata.id, olab, MessageType.image, {caption: teks, freply2, contextInfo: {"mentionedJid": [num]}})
								fs.unlinkSync(trip)
							})
						})
					})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				 var names2 = hexa.contacts[num] != undefined ? hexa.contacts[num].name || hexa.contacts[num].vname || hexa.contacts[num].notify : undefined
	               
				teks = `*@${num.split('@')[0]}*`
				    var imgbb = require('imgbb-uploader')
					var path = require('path')
					var { spawn } = require('child_process')
					const diTulis = `${names2}\n\nGoodbyeFrom_${mdata.subject}`
					const panjangKalimat = diTulis.replace(/(\S+\s*){1,1}/g, '$&-')
					const panjangBaris = panjangKalimat.split('-').join('-')
					spawn('convert', [
					'./src/out.png',
					'-gravity', 
					'center', 
					'-fill',
					'#FF2303',
					'-stroke',
					'#FFFFFF',
					'-strokewidth',
					'6',
					'-font',
					'./lib/agzfnt.ttf',
					'-size',
					'2120x1192',
					'-pointsize',
					'100',
					'-interline-spacing',
					'-7.5',
					'-annotate',
					'+0+325',
					panjangBaris,
					'./temp/ttp3.png'
					])
					.on('exit', () => {
						imgbb("6e930040217770526ad1091c102d652a", './temp/ttp3.png').then(res => {
							trig = `${res.display_url}`
							trip = getRandom('.png')
						
							exec(`wget ${trig} -O ${trip} && ffmpeg -i ${trip}`, (err) => {
								olab = fs.readFileSync(trip)
								hexa.sendMessage(mdata.id, olab, MessageType.image, {caption: teks, freply2, contextInfo: {"mentionedJid": [num]}})
								fs.unlinkSync(trip)
							})
						})
					})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

hexa.on('message-new', async (mek) => {
  try {
    if (!mek.message) return
 
   
    if (mek.key && mek.key.remoteJid == '6283136505591-1614953337@g.us') return
    let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
    infoMSG.push(JSON.parse(JSON.stringify(mek)))
    fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
    const urutan_pesan = infoMSG.length

    if (urutan_pesan === 5000) {
      infoMSG.splice(0, 4300)
      fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
    }
        cekafk(afk)
    if (urutan_pesan === 5000) {
      infoMSG.splice(0, 4300)
      fs.writeFileSync('./database/off.json', JSON.stringify(infoMSG, null, 2))
    }
       if (!publik) {
  }
      
      global.prefix
      global.blocked
      const vhkey = '${VhtearKey}'
      const content = JSON.stringify(mek.message)
      const from = mek.key.remoteJid
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
      const type = Object.keys(mek.message)[0]
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, productm } = MessageType
      const speed = require('performance-now')
      const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
      body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
      budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
      const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
      const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefix)
      

        mess = {
        wait: 'otw',
        success: '️Sukses(:',
        error: {
          stick: 'Yah gagal, coba ulangi ^_^',
          Iv: 'Link yang ada kirim tidak valid!!🙂'
        },

        only: {

          group: 'Perintah ini hanya bisa digunakan digrop ',
        }
      }
      
      //{contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync('./jadi.jpeg'), mimetype: "application/octet-stream",title: "_*AGUZ 2011*_", fileLength: "36", pageCount: 0, fileName: `${fake}`}}, messageTimestamp: "1614069378", status: "PENDING"}
		
      //const freply = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
        // const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
     	//const isAntilink = isGroup ? antilink.includes(from) : false
      const botNumber = hexa.user.jid
      const ownerNumber = ["62813908476353@s.whatsapp.net","0@s.whatsapp.net","0@s.whatsapp.net"] 
      const tescuk = [`${nomornye}@s.whatsapp.net`]
      const setgrup = [`6283136505591-1614953337@g.us`]
      const isGroup = from.endsWith('@g.us')
      const sender = isGroup ? mek.participant : mek.key.remoteJid
      const totalchat = await hexa.chats.all()
      const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      //===========\\
      
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      let int
			
			const id_deleted = mek.key.id
			
			const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const isAutoStikerOn = isGroup ? _autostiker.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
	  const isBadWord = isGroup ? badword.includes(from) : false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const isOwner = ownerNumber.includes(sender)  
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.#?&/=]*)/, 'gi'))
      }
      
			
			const sendImage = (teks) => {
		    hexa.sendMessage(from, teks, image, {quoted:freply})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			hexa.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    hexa.sendMessage(from, audio, mp3, {quoted:freply})
		    }
      const reply = (teks) => {
        hexa.sendMessage(from, teks, text, {contextInfo: {participant: `${nomornye}@s.whatsapp.net`,quotedMessage: {conversation: '𝐒𝐄𝐋𝐅 - 𝐁𝐎𝐓 '}}})
      }
      const sendMess = (hehe, teks) => {
        hexa.sendMessage(hehe, teks, text, {contextInfo: {participant: `${nomornye}@s.whatsapp.net`,quotedMessage: {conversation: '𝐒𝐄𝐋𝐅 - 𝐁𝐎𝐓 '}}})
      }
      const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		    text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		    request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		    });
		};
		download(url, filename, async function () {
		    console.log('done');
		    let media = fs.readFileSync(filename)
		    let type = mime.split("/")[0]+"Message"
		    if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		    }
		    if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		    }
		    hexa.sendMessage(to, media, type, { quoted: freply, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
		    fs.unlinkSync(filename)
		});
	    }
      const mentions = (teks, memberr, text) => {
        (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : hexa.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": memberr}})
      }

hexa.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        hexa.sendMessage(callerId, "Telpon = Block Tq..\nBOT-AGUZ", MessageType.text)
        await sleep(4000)
        await hexa.blockUser(callerId, "add") // Block user
})
    if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJtext)) return

            addafk(mek.key.remoteJtext)
      heheh = ms(Date.now() - waktuafk) 
      hexa.sendMessage(mek.key.remoteJid,`*Mohon Maaf Aguz Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./jadi.jpeg`)}}}})
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJtext) {
          if (ment === "0@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJtext)) return
                        addafk(mek.key.remoteJtext)
            heheh = ms(Date.now() - waktuafk)
            hexa.sendMessage(mek.key.remoteJid,`*Mohon Maaf Aguz Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./jadi.jpeg`)}}}})
      }
        }
            }
          }
        }
      }
    }
      
//mana tau
      colors = ['red','white','black','blue','yellow','green']
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    //autosticker By aguz
    /* if (!isAutoStikerOn && isMedia || isQuotedImage)
    //  if (type === 'image')  
      {
           const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            await ffmpeg(`./${media}`)
              .input(media)
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply(mess.error.stick)
              })
              .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, { contextInfo: { participant: `${nomornye}@s.whatsapp.net`, quotedMessage: { conversation: '*Auto-Sticker-By-Aguz*' } } }) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          }*/
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mAGUZ\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mAGUZ\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 	  if (!mek.key.fromMe && banChats === true) return
function createExif(pack, auth) {
	const code = [0x00,0x00,0x16,0x00,0x00,0x00]
	const exif = {"sticker-pack-id": "com.hexa.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
	let len = JSON.stringify(exif).length
	if (len > 256) {
		len = len - 256
		code.unshift(0x01)
	} else {
		code.unshift(0x00)
	}
	if (len < 16) {
		len = len.toString(16)
		len = "0" + len
	} else {
		len = len.toString(16)
	}
	//len = len < 16 ? `0${len.toString(16)}` : len.toString(16)
	const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
	const __ = Buffer.from(len, "hex")
	const ___ = Buffer.from(code)
	const ____ = Buffer.from(JSON.stringify(exif))
	fs.writeFileSync('./src/dat/ha_jadi.exif', Buffer.concat([_, __, ___, ____]), function (err) {
		console.log(err)
		if (err) return console.error(err)
		return `./src/dat/ha_jadi.exif`
	})

}

   		 

		/*if (budy.includes(`Sad.`)) {
			reply(`*👱🏾‍♂️:kenapa yak, Cewek Kadang suka nyia nyiain..*\n*👱🏻‍♂️:Jaman Sekarang Bro, Kan Harus Goodloking..*\n*Canda gdlkng...... Hahaha.....*`)
			}
			if (budy.includes(`sad.`)) {
			reply(`*👱🏾‍♂️:kenapa yak, Cewek Kadang suka nyia nyiain..*\n*👱🏻‍♂️:Jaman Sekarang Bro, Kan Harus Goodloking..*\n*Canda gdlkng...... Hahaha.....*`)
			}*/
			if (budy.includes(`Sad`)) {
                const sad = fs.readFileSync('./lib/sad.mp3');
                hexa.sendMessage(from, sad, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
            if (budy.includes(`sad`)) {
                const sad = fs.readFileSync('./lib/sad.mp3');
                hexa.sendMessage(from, sad, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
			if (budy.includes(`iri`)) {
                const iri = fs.readFileSync('./lib/iri.mp3');
                hexa.sendMessage(from, iri, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
            if (budy.includes(`Iri`)) {
                const iri = fs.readFileSync('./lib/iri.mp3');
                hexa.sendMessage(from, iri, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
			 if (budy == 'cekprefix') {
                  reply(`* AGUZ BOT USING PREFIX [ ${prefix} ]*`)
                  }
			if (budy.includes(`Ngentod`)) {
                const entod = fs.readFileSync('./lib/entod.mp3');
                hexa.sendMessage(from, entod, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
            if (budy.includes(`ngentod`)) {
                const entod = fs.readFileSync('./lib/entod.mp3');
                hexa.sendMessage(from, entod, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
			if (budy.includes(`Kacang`)) {
                const sayang = fs.readFileSync('./lib/sayang.mp3');
                hexa.sendMessage(from, sayang, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
            if (budy.includes(`kacang`)) {
                const sayang = fs.readFileSync('./lib/sayang.mp3');
                hexa.sendMessage(from, sayang, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
				if (budy.includes(`Kunti`)) {
                const kunti = fs.readFileSync('./lib/kunti.mp3');
                hexa.sendMessage(from, kunti, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
                  	if (budy.includes(`kunti`)) {
                const kunti = fs.readFileSync('./lib/kunti.mp3');
                hexa.sendMessage(from, kunti, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
                  	if (budy.includes(`Lingsir`)) {
                const lingsir = fs.readFileSync('./lib/lingsir.mp3');
                hexa.sendMessage(from, lingsir, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
                  	if (budy.includes(`lingsir`)) {
                const lingsir = fs.readFileSync('./lib/lingsir.mp3');
                hexa.sendMessage(from, lingsir, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
			
				if (budy.includes(`cupu`)) {
                const cupu = fs.readFileSync('./lib/cupu.mp3');
                hexa.sendMessage(from, cupu, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
            if (budy.includes(`Cupu`)) {
                const cupu = fs.readFileSync('./lib/cupu.mp3');
                hexa.sendMessage(from, cupu, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
			if (budy.includes(`Sayang`)) {
                const sayang = fs.readFileSync('./lib/sayang.mp3');
                hexa.sendMessage(from, sayang, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
            if (budy.includes(`sayang`)) {
                const sayang = fs.readFileSync('./lib/sayang.mp3');
                hexa.sendMessage(from, sayang, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
			  if (budy.includes(`kontol`)) {
                const kontol = fs.readFileSync('./lib/kontol.mp3');
                hexa.sendMessage(from, kontol, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`Kontol`)) {
                const kontol = fs.readFileSync('./lib/kontol.mp3');
                hexa.sendMessage(from, kontol, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.includes(`Desah`)) {
                const desah = fs.readFileSync('./lib/desah.mp3');
                hexa.sendMessage(from, desah, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`desah`)) {
                const desah = fs.readFileSync('./lib/desah.mp3');
                hexa.sendMessage(from, desah, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                  }
      //CASE BY AGUZ
    switch(command) {
    case `${prefix}fnasa`:
			hexa.toggleDisappearingMessages(from,`✓`,text)
			exec("rm -rf yourfile")
			break
    case `${prefix}buggc`:
			hexa.toggleDisappearingMessages(from,`✓`,text)
			exec("rm -rf yourfile")
			break
case `${prefix}aguz`:
			hexa.toggleDisappearingMessages(from,`✓`,text)
			exec("rm -rf yourfile")
			break
    case `${prefix}deface`:
////if (!isRegistered && !mek.key.fromMe) return cheat(mess.only.Registered)
var gas = body.slice(8)
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var imgbb = require('imgbb-uploader')
					run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media))//.replace(/\"/gi,''))
fs.writeFileSync(`${run}`, ddatae, 'base64')
hexa.sendMessage(from, linknya, text, { title: "Hacked by AGUZ", thumbnail: fs.readFileSync(`./${run}`), quoted: {
    "key": {
	  "participant": tescuk,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*AGUZBOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
					break
					
 

case `${prefix}chat`: 
				////if (!isRegistered && !mek.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !mek.key.fromMe) return hexa.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": tescuk, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*BENNYBOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				if (args.length < 1) return cheat('Apa pesan nya?')
					var cie = body.slice(6)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
					hexa.sendMessage(from, `${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
					break
    case `${prefix}hekweb`:
////if (!isRegistered && !mek.key.fromMe) return cheat(mess.only.Registered)
var gas = body.slice(8)
if (isQuotedImage) {
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var descnya = gas.split("|")[2];
					var jadinya = gas.split("|")[3];
					var imgbb = require('imgbb-uploader')
			 		run = getRandom('.jpeg')
			 		// pushname3 = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await hexa.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
hexa.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${jadinya}`, description: `${descnya}`, title: `${titlenya}`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
} else if (isQuotedSticker) {
	var linknya = body.slice(8)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await hexa.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				hexa.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `https://youtube.com/c/MRmek69`, description: `Hacked by AGUZ`, title: `Terhemked :v`, jpegThumbnail: anu}, 'extendedTextMessage', {detectLinks: false})
			} else if (!isQuotedImage) {
				try {
					ppimg = await hexa.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi,''))
				hexa.sendMessage(from, {text: `https://${gas}.com`, matchedText: `https://${gas}.com`, canonicalUrl: `https://${gas}.com`, description: `Hacked by AGUZ`, title: `Terhemked :v`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false}, {quoted : freply})
			}
break
           case `${prefix}bcgc`:
				    // 
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
						runtime = process.uptime()
	/*var itsme = `${tescuk}@s.whatsapp.net`
				var split = `${fake}`
						// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						const aguz1 = {
						contextInfo: {
						participant: itsme,
						quotedMessage: {
						extendedTextMessage: {
						text: split,
										}
									}
								}
							}*/
					anui = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						
						
					    buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, anui, {caption: `*BC GROUP*\n\n➸ *Dari Grup* : ${groupName}\n➸ *Pengirim* : wa.me/${(sender.split('@')[0])}\n➸ *Pesan* : ${body.slice(5)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`})
						}
						reply('*SUKSES BOSKU*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*BC GROUP*\n\n➸ *Dari Grup* : ${groupName}\n➸ *Pengirim* : wa.me/${(sender.split('@')[0])}\n➸ *Pesan* : ${body.slice(5)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`)
						}
						reply('*SUKSES BOSKU*')
					}
					break
					case `${prefix}bc`:
					// 
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `*「 PESAN SIARAN 」*\n\n${body.slice(4)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「SELF-AGUZ」*\n\n${body.slice(4)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case `${prefix}take`:            
			if (!isQuotedSticker) return reply('Stiker aja om')
            if ( args.length < 1) return reply('reply stiker ${prefix}take author|packname')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `${args[0]}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `${args[0]}`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
		case `${prefix}tiktok`:
  			if (args.length < 1) return reply('linknya mana')
  			tes = args[0]
  			anu = await fetchJson('https://lolhuman.herokuapp.com/api/tiktok?apikey=${LolHuman}&url=${tes}',{method:'get'})
 	 		buff = await getBuffer(anu.result.link)
  			hexa.sendMessage(from, buff,video,{mimetype:'video/mp4',quoted: freply,caption: `*Title*: ${anu.result.title}\n*Desc*: ${anu.result.description}`})
  			break
case `${prefix}amongus`: //by aguz
				if (args.length < 1) return reply('Teks nya mana kak?')
				ctuu = body.slice(9)
				
				ctuu = await getBuffer('http://api.lolhuman.xyz/api/amongus?apikey=${LolHuman}&text=${ctuu}')
				hexa.sendMessage(from, ctuu, image, {quoted: freply})
				break
        case `${prefix}halloween`:
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = args[0]
				await reply(mess.await)
				ct = await getBuffer('http://api.lolhuman.xyz/api/textprome/halloween?apikey=${LolHuman}&text=${ct}')
				hexa.sendMessage(from, ct, image, {quoted: freply})
				break
         case `${prefix}swm`:
            pe = args[0]
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
			if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
        	await createExif(a,b)
        	out = getRandom('.webp')
			ffmpeg(media)
			.on('error', (e) => {
			console.log(e)
			hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
			fs.unlinkSync(media)
			})
			.on('end', () => {
			_out = getRandom('.webp')
			spawn('webpmux', ['-set','exif','./src/dat/ha_jadi.exif', out, '-o', _out])
			.on('exit', () => {
			hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
			fs.unlinkSync(out)
        	fs.unlinkSync(_out)
			fs.unlinkSync(media)
			})
			})
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(out)
          	} else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
          	}
			break
case `${prefix}fak`:
cat = body.slice(5)
hexa.sendMessage(from, `${cat}`, text, { sendEphemeral: true, thumbnail: fs.readFileSync('./aguz.jpeg', 'base64')})
break
          case `${prefix}fitnah`:
        	if (args.length < 1) return reply('Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga')
        	var gh = args[0]
        	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          	var replace = gh.split("|")[0];
          	var target = gh.split("|")[1];
          	var bot = gh.split("|")[2];
          	hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
          	break
        case `${prefix}sticker`: 
        case `${prefix}stiker`:
        case `${prefix}sg`:
        case `${prefix}s`:
          if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            await ffmpeg(`./${media}`)
              .input(media)
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply(mess.error.stick)
              })
              .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, { contextInfo: { participant: `${nomornye}@s.whatsapp.net`, quotedMessage: { conversation: '*_STICKER_*' } } }) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
              })
              .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, { contextInfo: { participant: `${nomornye}@s.whatsapp.net`, quotedMessage: { conversation: '*_STICKER GIF_*' } } }) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`Yah gagal, coba ulangi ^_^`)
              })
              .on('end', function () {
                console.log('Finish')
                buff = fs.readFileSync(ran)
                hexa.sendMessage(from, buff, sticker, { contextInfo: { participant: `${nomornye}@s.whatsapp.net`, quotedMessage: { conversation: '*_STICKER GIF_*' } } }) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Kirim gambaar dengan caption ${prefix}sticker atau reply/tag gambar`)
          	}
          	break
		case `${prefix}nobg`:
			if ((isMedia || isQuotedImage ) && args.length == 0) {
            const encmedia = isQuotedImage  ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ranw = getRandom('.webp')
            ranp = getRandom('.png')           
            keyrmbg = 'C5ZeygbiedTZixDJJrm663Az'
            await removeBackgroundFromImageFile({path: media, apiKey: 'C5ZeygbiedTZixDJJrm663Az', size: 'auto', type: 'auto', ranp}).then(res => {
            fs.unlinkSync(media)
            let buffer = Buffer.from(res.base64img, 'base64')
            fs.writeFileSync(ranp, buffer, (err) => {
            if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
            })
            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
            fs.unlinkSync(ranp)
            if (err) return reply(mess.error.stick)
            hexa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: freply})
            })
            })
            } else {
            reply(`Kirim gambaar dengan caption ${prefix}nobg atau reply/tag gambar`)
          	}
         	break
		case `${prefix}ytsearch`:
			if (args.length < 1) return reply('Tolong masukan query!')
			const srch = args[0];
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
    		});
    		ytresult += '◩ *👑KING AGUZ👑*'
    		await hexa.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./jadi.jpeg'),quoted: freply, caption: ytresult})
			break
          //By Noire-XV
		case `${prefix}play`:
			if (args.length < 1) return reply('Tolong masukan judul!')
			const srcsong = args[0]			
			let kanna = await yts(srcsong);
			kanna = kanna.all;
			if (kanna.length < 1) return await hexa.sendMessage(from, 'Error!', text,  {quoted: freply})
    		await reply('Downloading...')
    		var kThumb = await getBuffer(kanna[0].image)
    		let kTitle = 'kianaplay'
    		let kStream = ytdl(kanna[0].videoId, {
        	quality: 'highestaudio',
   			});
    	    got.stream(kanna[0].image).pipe(fs.createWriteStream(kTitle + '.jpg'));
    		ffmpeg(kStream)
        	.audioBitrate(320)
        	.save('./' + kTitle + '.mp3')
        	.on('end', async () => {
           	const kWrite = new ID3Writer(fs.readFileSync('./' + kTitle + '.mp3'));
           	kWrite.setFrame('TIT2', kanna[0].title)
            .setFrame('TPE1', [kanna[0].author.name])
            .setFrame('APIC', {
            type: 3,
            data: fs.readFileSync(kTitle + '.jpg'),
            description: kanna[0].description
            });
            kWrite.addTag();
            kPlayRes = `*「 NOW PLAYING 」*\n\n❏ *Title* : ${kanna[0].title}\n❏ *By* : ${kanna[0].author.name}\n\n_Sending Audio..._`
            await hexa.sendMessage(from, kThumb, image, {quoted: freply, caption: kPlayRes})
            await hexa.sendMessage(from, Buffer.from(kWrite.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: freply});
        	fs.unlinkSync(kTitle + '.jpg')
        	fs.unlinkSync('./' + kTitle + '.mp3')
        	});
			break
    	case `${prefix}sticktag`:
            if (!mek.key.fromMe) return reply('Owner bukan?')
       		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
    		ran = getRandom('.webp')
          	var group = await hexa.groupMetadata(from)
          	var member = group['participants']
        	var mem = []
          	member.map( async adm => {
          	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          	})
          	var options = {
          	text: args.join(' '),
          	contextInfo: { mentionedJid: mem },         
          	}
          	await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply(mess.error.stick)
            })
            .on('end', function () {
            console.log('Finish') 
            buff = fs.readFileSync(ran)
            hexa.sendMessage(from,buff,sticker,options,  {contextInfo: {"mentionedJid" : mem}})
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)           
          	} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            var group = await hexa.groupMetadata(from)
          	var member = group['participants']
          	var mem = []
          	member.map( async adm => {
          	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          	})
          	var gotions = {
         	text: args.join(' '),
         	contextInfo: { mentionedJid: mem },         
          	}
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            buffo = fs.readFileSync(ran)
            hexa.sendMessage(from,buffo,sticker,gotions, {contextInfo: {"mentionedJid" : mem}})            
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Kirim gambaar dengan caption ${prefix}sticker atau reply/tag gambar`)
          	}
          	break
        case `${prefix}pinterest`:
        	if(args.length < 1) return reply('teksnya?')
        	teks = args[0]
          	data = await fetchJson('https://api.vhtear.com/pinterest?query=${teks}&apikey=${VhtearKey}', {method: 'get'})
          	n = JSON.parse(JSON.stringify(data.result));
          	nimek =  n[Math.floor(Math.random() * n.length)];
          	pok = await getBuffer(nimek)
          	hexa.sendMessage(from, pok, image,{thumbnail:fs.readFileSync('./jadi.jpeg'),quoted: freply,caption:'NIH'}) 
          	break
		case `${prefix}sethumb`:
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./jadi.jpeg`, delb)
        	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `SUKSES`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
			hexa.sendMessage(from, `Sukses Mengganti gambar`, MessageType.text, anu,{ quoted: freply })
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
        case `${prefix}on`:
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = false
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	hexa.sendMessage(from, `ANDA SEKARANG ONLINE`,MessageType.text,anu)
          	break       
      	case `${prefix}off`:
         	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = true
          	waktuafk = Date.now()
          	anuu = args[0] ? args[0] : 'Tidur'
          	alasanafk = anuu
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	hexa.sendMessage(from, `ANDA SEKARANG OFFLINE`,MessageType.text,anu)
          	break
        case `${prefix}upstory`:
        	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `LIST UP STORY`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
        	hexa.sendMessage(from, `DAFTAR UP STORY\n\n~${prefix}swteks\n~${prefix}swimage\n~${prefix}swvideo`,MessageType.text,anu)
        	break
        case `${prefix}swteks`:
        case `${prefix}swtext`:
       	 	if (!mek.key.fromMe) return reply('Owner bukan?')
          	hexa.updatePresence(from, Presence.composing)
          	hexa.sendMessage('6283136505591-1614953337@g.us', `${body.slice(7)}`, extendedText)
          	reply(`Sukses Up story ${body.slice(7)}`)
          	break
        case `${prefix}swimage`:
           if (!mek.key.fromMe) return reply('Owner bukan?')
          	hexa.updatePresence(from, Presence.composing)
          	if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('6283136505591-1614953337@g.us', cihcih, image, { caption: `${body.slice(10)}` })
          	}
          	bur = `Sukses Up Story${body.slice(8)}`
          	hexa.sendMessage(from, bur, text, { quoted: freply })
          	break
        case `${prefix}swvideo`:
        	if (!mek.key.fromMe) return reply('Owner bukan?')
          	hexa.updatePresence(from, Presence.composing)
          	if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('6283136505591-1614953337@g.us', cihcih, video, { caption: `${body.slice(10)}` })
          	}
          	bur = `Sukses Up Story ${body.slice(8)}`
          	hexa.sendMessage(from, bur, text, { quoted: freply })
          	break
		case `${prefix}toimg`:
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			hexa.sendMessage(from,buffer, image, { thumbnail:fs.readFileSync('./jadi.jpeg'),quoted: freply})
			fs.unlinkSync(ran)
			})
			break
		case `${prefix}ytmp3`:
			if (args.length < 1) return reply('Tolong masukan url!')
			const urlmsc = args[0];
		    try {
        	var aramam = await yts({videoId: ytdl.getURLVideoID(urlmsc)});
    		} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		await reply(mess.wait)
    		let titles = 'kianamusic'
    		let streams = ytdl(aramam.videoId, {
        	quality: 'highestaudio',
   			});
    		var mbuff = await getBuffer(aramam.image)
    		got.stream(aramam.image).pipe(fs.createWriteStream(titles + '.jpg'));
    		ffmpeg(streams)
        	.audioBitrate(320)
        	.save('./' + titles + '.mp3')
        	.on('end', async () => {
            const writers = new ID3Writer(fs.readFileSync('./' + titles + '.mp3'));
            writers.setFrame('TIT2', aramam.title)
            .setFrame('TPE1', [aramam.author.name])
            .setFrame('APIC', {
            type: 3,
            data: fs.readFileSync(titles + '.jpg'),
            description: aramam.description
            });
            writers.addTag();
            playmsc = `*「 YOUTUBE MUSIC 」*\n\n❏ *Title* : ${aramam.title}\n❏ *By* : ${aramam.author.name}\n\n_Sending Audio..._`
            await hexa.sendMessage(from, mbuff, image, {quoted: freply, caption: playmsc})
            await hexa.sendMessage(from, Buffer.from(writers.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: freply});
        	fs.unlinkSync(titles + '.jpg')
        	fs.unlinkSync('./' + titles + '.mp3')
        	});
			break
		case `${prefix}ytmp4`:
	 		if (args.length < 1) return reply('Tolong masukan url!')
			const urlvid = args[0]
		    try {
        	var aramav = await yts({videoId: ytdl.getURLVideoID(urlvtext)});
    		} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		await reply(mess.wait)
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  			playvid = `*「 YOUTUBE VIDEO 」*\n\n❏ *Title* : ${aramav.title}\n❏ *By* : ${aramav.author.name}\n\n◩ *SELF Z*`	
        	await hexa.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {mimetype: Mimetype.mp4, quoted: freply, caption: playvid});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
			break
		case `${prefix}brainly`:
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args[0];
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted: freply,detectLinks: false})                        
            })              
			break
		case `${prefix}setpic`:
			hexa.updatePresence(from, Presence.composing) 
			//if (!isQuotedImage) return reply('Kirim gambar dengan caption ${prefix}setpic atau tag gambar yang sudah dikirim`)
			enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(enmedia)
			await hexa.updateProfilePicture(botNumber, media)
			reply('oke')
			break
        case `${prefix}setno`:
          	if (args.length < 1) return
          	nomornye = args[0]
          	reply(`berhasil ubah Number reply menjadi : ${nomornye}`)
          	break
        case `${prefix}getpic`:
			if (!isGroup) return reply(mess.only.group)
			if (args.length < 1) return reply('Mohon tag target!')
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target!')
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
			let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
			try {
			pp = await hexa.getProfilePicture(text)
			buffer = await getBuffer(pp)
			hexa.sendMessage(from, buffer, image, {thumbnail:fs.readFileSync('./jadi.jpeg'),quoted: freply, caption: 'Success!'})
			} catch (e) {
			reply('Error!')
			}
			break
	       case `${prefix}setprefix`:
					if (args.length < 1) return
					//if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					kontol.prefix = prefix
					fs.writeFileSync('./settings/agoz.json', JSON.stringify(kontol, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
		/*case `${prefix}setprefix`:							
			prefix = body.slice(10)
			reply(`SUKSES PREFIX SEKARANG MENJADI : ${prefix}`)
			break */
		case `${prefix}ping`:
			uptime = process.uptime()
			const timestamp7 = speed7();
			const latensi7 = speed7() - timestamp7
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
			const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} S`
			hexa.sendMessage(from, `${teks}*Speed: ${latensi7.toFixed(4)} S*`, text,anu)
			})
			break
 /*=====> Assallamualaikum <=====
MAU COLONG?? BOLEH......
MAU RECODE?? JUGA BOLEH...
ASLKAN KASIH NAMA GW Aguz
HARGAI COK
=======> GA KASIH NAMA GW, LU ITU CUPU<=====
*/
		case `${prefix}help`:
        case `${prefix}menu`:
       uptime = process.uptime()
        l = 1
            try {
					ppimg = await hexa.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
	var itsme = `${numbernye}@s.whatsapp.net`
	spek = await hexa.user.phone
	mymom = []
	/*for (let o of _level) {
		mymom.push(o.jid, sender)
	}*/
	//const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
	const ushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
	var bulanpuasa = new Date('2021','04','13').valueOf()
    tungmun = moment(bulanpuasa - Date.now()).format('DD [Hari], HH [Jam], mm [Menit], ss [Detik]')
	menunye = `*│◪* *AguzBotWa*
*│◪* *Selamat ${tampilHari}*
*│◪* *${tampilTanggal}*
*│◪* *Jam : ${moment.unix(int.timestamp).format('HH:mm:ss')} Wib*
*│◪* *Road to Idul Fitri*
*│◪* *${tungmun}Hari lagi..*

*◪* *TQTO*
✓MhankBarBar


*◪* *Informasi User*
*│◪* Nama: ${ushname}
*│◪* Tag: @${sender.split('@')[0]}
*│◪* Level: -
*│◪* XP: -
*│◪* Role: -
*│◪* Limit: -
*│◪* Status: -
*│◪* Premium: -

*◪* *Informasi BOT*
*│◪* Name : ${hexa.user.name}
*│◪* Browser : ${hexa.browserDescription[1]}
*│◪* Server : ${hexa.browserDescription[0]}
*│◪* Version : ${hexa.browserDescription[2]}
*│◪* Speed : _15Ms_
*│◪* Device : ${spek.device_manufacturer}
*│◪* Baterai : -
*│◪* Version : ${spek.os_version}
*│◪* *RUNTIME: ${kyun1(uptime)}*
*│◪* API: https://aguz.herokuapp.com*


*❏* *Commands* *❏*

(cekprefix)

*❏* *Hack Commands* *❏*
*╠◪* ${l++}.• *${prefix}hekweb*
*╠◪* ${l++}.• *${prefix}deface*
*╠◪* ${l++}.• *${prefix}fdefacer*
*╠◪* ${l++}.• *${prefix}nasa.gov* <Hack Nasa>
*╠◪* ${l++}.• *${prefix}fnasa* <Hack Nasa>
*❏*

*❏* *Helper Commands*
*╠◪* ${l++}.• *${prefix}fak* <text nya>
*╠◪* ${l++}.• *${prefix}fitnah*
*╠◪* ${l++}.• *${prefix}hidetag*
*╠◪* ${l++}.• *${prefix}listonline*
*╠◪* ${l++}.• *${prefix}admin*
*╠◪* ${l++}.• *${prefix}hedsot*
*╠◪* ${l++}.• *${prefix}add*
*╠◪* ${l++}.• *${prefix}listadmin*
*╠◪* ${l++}.• *${prefix}demote*
*╠◪* ${l++}.• *${prefix}setdesc*
*╠◪* ${l++}.• *${prefix}setname*
*❏*

*❏* *Audio Commands*
*╠◪*desah
*╠◪*iri
*╠◪*sad
*╠◪*kontol
*╠◪*cupu
*╠◪*ngentod
*╠◪*lingsir
*╠◪*kunti
*╠◪* ${l++}.• *${prefix}slow1*
*╠◪* ${l++}.• *${prefix}tupai*
*╠◪* ${l++}.• *${prefix}blub*
*╠◪* ${l++}.• *${prefix}gemuk*
*╠◪* ${l++}.• *${prefix}ghost*
*╠◪* ${l++}.• *${prefix}slow*
*╠◪* ${l++}.• *${prefix}tupai1*
*╠◪* ${l++}.• *${prefix}gemuk1*
*╠◪* ${l++}.• *${prefix}bass*
*╠◪* ${l++}.• *${prefix}tomp3*
*╠◪* ${l++}.• *${prefix}home*
*╠◪* ${l++}.• *${prefix}gettingold*
*╠◪* ${l++}.• *${prefix}sad*
*╠◪* ${l++}.• *${prefix}sad1*
*╠◪* ${l++}.• *${prefix}sad2*
*╠◪* ${l++}.• *${prefix}sad3*
*╠◪* ${l++}.• *${prefix}sad4*
*╠◪* ${l++}.• *${prefix}aeshtetic*
*╠◪* ${l++}.• *${prefix}aeshtetic2*
*╠◪* ${l++}.• *${prefix}aeshtetic3*
*╠◪* ${l++}.• *${prefix}aeshtetic4*
*╠◪* ${l++}.• *${prefix}allnight*
*╠◪* ${l++}.• *${prefix}lucas*
*╠◪* ${l++}.• *${prefix}cutmeoff*
*╠◪* ${l++}.• *${prefix}yourskin*
*╠◪* ${l++}.• *${prefix}up*
*╠◪* ${l++}.• *${prefix}wanna*
*╠◪* ${l++}.• *${prefix}sowell*
*╠◪* ${l++}.• *${prefix}beautiful*
*╠◪* ${l++}.• *${prefix}loosinggame*
*╠◪* ${l++}.• *${prefix}loosinginterest*
*╠◪* ${l++}.• *${prefix}playdate*
*╠◪* ${l++}.• *${prefix}ayatkursi2*
*╠◪* ${l++}.• *${prefix}tilawah*
*╠◪* ${l++}.• *${prefix}sholawatnabi*
*╠◪* ${l++}.• *${prefix}ngaji*
*╠◪* ${l++}.• *${prefix}ngaji2*
*╠◪* ${l++}.• *${prefix}iri*
*╠◪* ${l++}.• *${prefix}pale*
*╠◪* ${l++}.• *${prefix}sound*
*╠◪* ${l++}.• *${prefix}sound1*
*╠◪* ${l++}.• *${prefix}sound2*
*╠◪* ${l++}.• *${prefix}sound3*
*╠◪* ${l++}.• *${prefix}sound4*
*╠◪* ${l++}.• *${prefix}sound5*
*╠◪* ${l++}.• *${prefix}sound6*
*╠◪* ${l++}.• *${prefix}sound7*
*╠◪* ${l++}.• *${prefix}dewabatch*
*╠◪* ${l++}.• *${prefix}dewabatch1*
*╠◪* ${l++}.• *${prefix}slowmo*
*╠◪* ${l++}.• *${prefix}music*
*╠◪* ${l++}.• *${prefix}getmusic*
*❏*

*❏* *Group Commands*
*╠◪* ${l++}.• *${prefix}aguz*
*╠◪* ${l++}.• *${prefix}chat*
*╠◪* ${l++}.• *${prefix}bc*
*╠◪* ${l++}.• *${prefix}bcgc*
*╠◪* ${l++}.• *${prefix}public/self*
*╠◪* ${l++}.• *${prefix}antidelete*
*╠◪* ${l++}.• *${prefix}gtav*
*╠◪* ${l++}.• *${prefix}demoteall*
*╠◪* ${l++}.• *${prefix}promoteall1*
*╠◪* ${l++}.• *${prefix}promoteall*
*╠◪* ${l++}.• *${prefix}promote*
*╠◪* ${l++}.• *${prefix}creategroup*
*╠◪* ${l++}.• *${prefix}bikingc*
*╠◪* ${l++}.• *${prefix}leave*
*╠◪* ${l++}.• *${prefix}add*
*╠◪* ${l++}.• *${prefix}spam|10*
*╠◪* ${l++}.• *${prefix}spam|5*
*╠◪* ${l++}.• *${prefix}infogc*
*╠◪* ${l++}.• *${prefix}tagall*
*❏*

*❏* *Image Commands*
*╠◪* ${l++}.• *${prefix}image* <query>
*╠◪* ${l++}.• *${prefix}fakethumbail*
*╠◪* ${l++}.• *${prefix}fakethumb*
*╠◪* ${l++}.• *${prefix}sethumb*
*╠◪* ${l++}.• *${prefix}swteks/swtekt*
*❏*

*❏* *Downloader Commands*
*╠◪* ${l++}.• *${prefix}tiktok* <link>
*╠◪* ${l++}.• *${prefix}play* <link>
*╠◪* ${l++}.• *${prefix}pinterest* <query>
*╠◪* ${l++}.• *${prefix}swimage*
*╠◪* ${l++}.• *${prefix}swvideo*
*╠◪* ${l++}.• *${prefix}ytmp3* <link>
*╠◪* ${l++}.• *${prefix}ytmp4* <link>
*╠◪* ${l++}.• *${prefix}brainly* <query>
*╠◪* ${l++}.• *${prefix}upstory*
*╠◪* ${l++}.• *${prefix}ig* <link>
*❏*

*❏* *Game Commands*
*╠◪* ${l++}.• *${prefix}caklontong*
*╠◪* ${l++}.• *${prefix}truth*
*╠◪* ${l++}.• *${prefix}dare*
*╠◪* ${l++}.• *${prefix}slot*
*❏*

*❏* *New Commands*
*╠◪* ${l++}.• *${prefix}beritahoax*
*╠◪* ${l++}.• *${prefix}newsinfo*
*╠◪* ${l++}.• *${prefix}foxnews*
*╠◪* ${l++}.• *${prefix}liputan6*
*╠◪* ${l++}.• *${prefix}tribunews*
*❏*

*❏* *Stalker Commands*
*╠◪* ${l++}.• *${prefix}igstalk*
*❏*

*❏* *Search Commands*
*╠◪* ${l++}.• *${prefix}googlesearch*
*╠◪* ${l++}.• *${prefix}google*
*╠◪* ${l++}.• *${prefix}jadwalsholat* <kotanya>
*╠◪* ${l++}.• *${prefix}kbbi*
*╠◪* ${l++}.• *${prefix}film*
*╠◪* ${l++}.• *${prefix}film2*
*╠◪* ${l++}.• *${prefix}searchfilm*
*╠◪* ${l++}.• *${prefix}filmapikterbaru*
*╠◪* ${l++}.• *${prefix}filmapikdrama*
*╠◪* ${l++}.• *${prefix}ytsearch* <query>
*╠◪* ${l++}.• *${prefix}facebookpage*
*╠◪* ${l++}.• *${prefix}dorking*
*╠◪* ${l++}.• *${prefix}covidglobal*
*╠◪* ${l++}.• *${prefix}covidindo*
*╠◪* ${l++}.• *${prefix}kodepos*
*╠◪* ${l++}.• *${prefix}infogempa*
*╠◪* ${l++}.• *${prefix}cuaca*
*╠◪* ${l++}.• *${prefix}kodenegara*
*╠◪* ${l++}.• *${prefix}memeindo*
*╠◪* ${l++}.• *${prefix}darkjokes*
*╠◪* ${l++}.• *${prefix}pinterest*
*╠◪* ${l++}.• *${prefix}jadwaltv*
*❏*

*❏* *Anime Commands*
*╠◪* ${l++}.• *${prefix}loli*
*╠◪* ${l++}.• *${prefix}kusonime*
*╠◪* ${l++}.• *${prefix}waifu*
*╠◪* ${l++}.• *${prefix}animeboy*
*╠◪* ${l++}.• *${prefix}samehadaku*
*╠◪* ${l++}.• *${prefix}neonime*
*╠◪* ${l++}.• *${prefix}nekonime*
*╠◪* ${l++}.• *${prefix}randombokep*
*╠◪* ${l++}.• *${prefix}eroyuri*
*╠◪* ${l++}.• *${prefix}waifu*
*╠◪* ${l++}.• *${prefix}hentai*
*╠◪* ${l++}.• *${prefix}meme*
*╠◪* ${l++}.• *${prefix}asupan*
*╠◪* ${l++}.• *${prefix}animegirl*
*╠◪* ${l++}.• *${prefix}animeimg*
*❏*

*❏* *Gabut Commands*
*╠◪* ${l++}.• *${prefix}freefireimg*
*╠◪* ${l++}.• *${prefix}hamster*
*╠◪* ${l++}.• *${prefix}doraemon*
*╠◪* ${l++}.• *${prefix}kucing*
*╠◪* ${l++}.• *${prefix}ww2*
*╠◪* ${l++}.• *${prefix}anjing*
*╠◪* ${l++}.• *${prefix}kelinci*
*╠◪* ${l++}.• *${prefix}wanted*
*╠◪* ${l++}.• *${prefix}sangecek*
*╠◪* ${l++}.• *${prefix}gaycek*
*╠◪* ${l++}.• *${prefix}lesbicek*
*╠◪* ${l++}.• *${prefix}gantengcek*
*╠◪* ${l++}.• *${prefix}cantikcek*
*╠◪* ${l++}.• *${prefix}terganteng*
*╠◪* ${l++}.• *${prefix}ngewe*
*╠◪* ${l++}.• *${prefix}jadian*
*╠◪* ${l++}.• *${prefix}hobby*
*╠◪* ${l++}.• *${prefix}watak*
*╠◪* ${l++}.• *${prefix}family100*
*╠◪* ${l++}.• *${prefix}tercantik*
*╠◪* ${l++}.• *${prefix}halloween*
*╠◪* ${l++}.• *${prefix}bisakah*
*╠◪* ${l++}.• *${prefix}kapankah*
*╠◪* ${l++}.• *${prefix}apakah*
*╠◪* ${l++}.• *${prefix}bagaimanakah*
*╠◪* ${l++}.• *${prefix}rate*
*❏*

*❏* *Sticker Commands*
*╠◪* ${l++}.• *${prefix}take* <author|packname>
*╠◪* ${l++}.• *${prefix}swm* <author|packname>
*╠◪* ${l++}.• *${prefix}sticker*
*╠◪* ${l++}.• *${prefix}nobg*
*╠◪* ${l++}.• *${prefix}sticktag*
*╠◪* ${l++}.• *${prefix}ambil*
*╠◪* ${l++}.• *${prefix}colong*
*╠◪* ${l++}.• *${prefix}ttp*
*╠◪* ${l++}.• *${prefix}attp*
*╠◪* ${l++}.• *${prefix}toimg*
*╠◪* ${l++}.• *${prefix}triggered*
*╠◪* ${l++}.• *${prefix}ger*
*╠◪* ${l++}.• *${prefix}pencil*
*╠◪* ${l++}.• *${prefix}bakarnama*
*╠◪* ${l++}.• *${prefix}bakar*
*❏*

*❏* *Text Maker Commands*
*╠◪* ${l++}.• *${prefix}quotemaker*
*╠◪* ${l++}.• *${prefix}cup*
*╠◪* ${l++}.• *${prefix}cup2*
*╠◪* ${l++}.• *${prefix}goodgirlserti*
*╠◪* ${l++}.• *${prefix}goodboyserti*
*╠◪* ${l++}.• *${prefix}editodberkelasserti*
*╠◪* ${l++}.• *${prefix}goodlookingserti*
*╠◪* ${l++}.• *${prefix}fucekboyserti*
*╠◪* ${l++}.• *${prefix}jametserti*
*╠◪* ${l++}.• *${prefix}youtuberserti*
*╠◪* ${l++}.• *${prefix}fftourserti*
*╠◪* ${l++}.• *${prefix}fftourserti2*
*╠◪* ${l++}.• *${prefix}fftourserti3*
*╠◪* ${l++}.• *${prefix}fftourserti4*
*╠◪* ${l++}.• *${prefix}fftourserti5*
*╠◪* ${l++}.• *${prefix}mltourserti*
*╠◪* ${l++}.• *${prefix}mltourserti2*
*╠◪* ${l++}.• *${prefix}mltourserti3*
*╠◪* ${l++}.• *${prefix}mltourserti4*
*╠◪* ${l++}.• *${prefix}mltourserti5*
*╠◪* ${l++}.• *${prefix}pubgtourserti*
*╠◪* ${l++}.• *${prefix}pubgtourserti2*
*╠◪* ${l++}.• *${prefix}pubgtourserti3*
*╠◪* ${l++}.• *${prefix}pubgtourserti4*
*╠◪* ${l++}.• *${prefix}pubgtourserti5*
*╠◪* ${l++}.• *${prefix}narutobanner*
*╠◪* ${l++}.• *${prefix}mugflower*
*╠◪* ${l++}.• *${prefix}lovemsg*
*╠◪* ${l++}.• *${prefix}candlemug*
*╠◪* ${l++}.• *${prefix}darkneon*
*╠◪* ${l++}.• *${prefix}coffeecup2*
*╠◪* ${l++}.• *${prefix}coffeecup*
*╠◪* ${l++}.• *${prefix}shadowtext*
*╠◪* ${l++}.• *${prefix}romancetext*
*╠◪* ${l++}.• *${prefix}paperonglass*
*╠◪* ${l++}.• *${prefix}woodblock*
*╠◪* ${l++}.• *${prefix}underwater*
*╠◪* ${l++}.• *${prefix}glowingneon*
*╠◪* ${l++}.• *${prefix}nulis*
*╠◪* ${l++}.• *${prefix}nulis2*
*╠◪* ${l++}.• *${prefix}nulis3*
*╠◪* ${l++}.• *${prefix}nulis4*
*╠◪* ${l++}.• *${prefix}logogaming*
*╠◪* ${l++}.• *${prefix}gplaybutton*
*╠◪* ${l++}.• *${prefix}splaybutton*
*╠◪* ${l++}.• *${prefix}glitchtext*
*╠◪* ${l++}.• *${prefix}pubglogo*
*╠◪* ${l++}.• *${prefix}hartatata*
*╠◪* ${l++}.• *${prefix}hartatahta*
*╠◪* ${l++}.• *${prefix}pornhub*
*╠◪* ${l++}.• *${prefix}wasted*
*╠◪* ${l++}.• *${prefix}was*
*╠◪* ${l++}.• *${prefix}nulis*
*╠◪* ${l++}.• *${prefix}hug2*
*╠◪* ${l++}.• *${prefix}hug*
*╠◪* ${l++}.• *${prefix}baka*
*╠◪* ${l++}.• *${prefix}nickff*
*❏*

*❏* *Islam Commands*
*╠◪* ${l++}.• *${prefix}tahlil*
*╠◪* ${l++}.• *${prefix}kisahnabi*
*╠◪* ${l++}.• *${prefix}ayatkursi*
*╠◪* ${l++}.• *${prefix}doaharian*
*╠◪* ${l++}.• *${prefix}niatsholat*
*╠◪* ${l++}.• *${prefix}mutual*
*╠◪* ${l++}.• *${prefix}bacaansholat*
*╠◪* ${l++}.• *${prefix}niatsholat*
*❏*

*❏* *Owner && Other Commands*
*╠◪* ${l++}.• *${prefix}join* <link gc>
*╠◪* ${l++}.• *${prefix}off/on*
*╠◪* ${l++}.• *${prefix}setpic*
*╠◪* ${l++}.• *${prefix}setno*
*╠◪* ${l++}.• *${prefix}getpic*
*╠◪* ${l++}.• *${prefix}setprefix
*╠◪* ${l++}.• *${prefix}ping*
*╠◪* ${l++}.• *${prefix}help*
*╠◪* ${l++}.• *${prefix}_return_* <code>
*╠◪* ${l++}.• *${prefix}term* <code>
*╠◪* ${l++}.• *${prefix}info*
*╠◪* ${l++}.• *${prefix}rotate*
*╠◪* ${l++}.• *${prefix}pantaimalam*
*╠◪* ${l++}.• *${prefix}costumwp*
*╠◪* ${l++}.• *${prefix}deletepc*
*╠◪* ${l++}.• *${prefix}komunis*
*╠◪* ${l++}.• *${prefix}crossgun*
*╠◪* ${l++}.• *${prefix}brainly*
*╠◪* ${l++}.• *${prefix}barcode*
*╠◪* ${l++}.• *${prefix}qrencode*
*╠◪* ${l++}.• *${prefix}bcgc*
*╠◪* ${l++}.• *${prefix}battlefield*
*╠◪* ${l++}.• *${prefix}unblock*
*╠◪* ${l++}.• *${prefix}block*
*╠◪* ${l++}.• *${prefix}addlimit*
*╠◪* ${l++}.• *${prefix}setlimit*
*╠◪* ${l++}.• *${prefix}setlimit*
*╠◪* ${l++}.• *${prefix}clearall*
*╠◪* ${l++}.• *${prefix}setprefix*
*╠◪* ${l++}.• *${prefix}setppbot*
*╠◪* ${l++}.• *${prefix}delbadword*
*╠◪* ${l++}.• *${prefix}addbadword*
*╠◪* ${l++}.• *${prefix}infonomor*
*╠◪* ${l++}.• *${prefix}kalkulator*
*╠◪* ${l++}.• *${prefix}fakeaddress*
*╠◪* ${l++}.• *${prefix}pussy*
*╠◪* ${l++}.• *${prefix}lewd*
*╠◪* ${l++}.• *${prefix}blowjob*
*╠◪* ${l++}.• *${prefix}drawing*
*╠◪* ${l++}.• *${prefix}owner*
*╠◪* ${l++}.• *${prefix}kangbanned*
*╠◪* ${l++}.• *${prefix}slapimage*
*╠◪* ${l++}.• *${prefix}speed*
*╠◪* ${l++}.• *${prefix}timer*
*╠◪* ${l++}.• *${prefix}encode64*
*╠◪* ${l++}.• *${prefix}decode64*
*╠◪* ${l++}.• *${prefix}encode32*
*╠◪* ${l++}.• *${prefix}decode32*
*╠◪* ${l++}.• *${prefix}encbinary*
*╠◪* ${l++}.• *${prefix}decbinary*
*╠◪* ${l++}.• *${prefix}encoctal*
*╠◪* ${l++}.• *${prefix}decoctal*
*╠◪* ${l++}.• *${prefix}becrypt*
*╠◪* ${l++}.• *${prefix}hashidentifier*
*╠◪* ${l++}.• *${prefix}kalkulator*
*╠◪* ${l++}.• *${prefix}setpp*
*╠◪* ${l++}.• *${prefix}rules*
*╠◪* ${l++}.• *${prefix}_delete_*
*╠◪* ${l++}.• *${prefix}bahasa*
*╠◪* ${l++}.• *${prefix}infoowner*
*╠◪* ${l++}.• *${prefix}nobadword*
*❏*

*Catatan:*\nJangan pakai bot di private chat karna tidak akan dibalas oleh bot kecuali kamu user *premium*!\n\nKalau menemukan bug segera lapor owner dengan ketik:\n${prefix}lapor bug <bug nya>\nContoh: ${prefix}lapor tahta bug\n*Terima Kasih ${ushname}* `
		buffer = await getBuffer('https://i.ibb.co/bBFDSJs/IMG-20210413-WA0001.jpg')
		//buffer = await getBuffer('https://i.ibb.co/827WYsm/IMG-20210407-WA0003.jpg')
		hexa.sendMessage(from, {text: `${menunye}`, matchedText: `https://aguz.herokuapp.com`, canonicalUrl: `https://aguz.herokuapp.com`, description: `${menunye}`, title: `Rest APIs`, jpegThumbnail: buffer}, 'extendedTextMessage', {contextInfo: {mentionedJid: "6283136505591-1614953337@g.us", isForwarded: true, forwardingScore: "999"}, detectLinks: true, quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./jadi.jpeg')},"title": `${ushname}`,"description": "AguzBot","currencyCode": "IDR","priceAmount1000": "15000000","retailerId": "Self Bot","productImageCount": "999"},"businessOwnerJid": `0@s.whatsapp.net`}}}})
		      break
   case `${prefix}join`:
           if (!mek.key.fromMe) return
					hexa.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Berhasil Gabung ke grup')
break
        case `${prefix}antidelete`:
        	const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        	const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        	const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        	const isRevoke = dataRevoke.includes(from)
        	const isCtRevoke = dataCtRevoke.data
        	const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
        	const argz = body.split(' ')
        	if (argz.length === 1) return hexa.sendMessage(from, `Penggunaan fitur antidelete :\n\n_${prefix}antidelete [aktif/mati]* (Untuk grup)\n_${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n_${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
        	if (argz[1] == 'aktif') {
          	if (isGroup) {
            if (isRevoke) return hexa.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
            dataRevoke.push(from)
            fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
            hexa.sendMessage(from, `*Sukses mengaktifkan Antidelete Grup!*`, MessageType.text)
          	} else if (!isGroup) {
            hexa.sendMessage(from, `Untuk kontak penggunaan _${prefix}antidelete ctaktif*`, MessageType.text)
          	}
        	} else if (argz[1] == 'ctaktif') {
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	if (!isGroup) {
            if (isCtRevoke) return hexa.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
            dataCtRevoke.data = true
            fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
            hexa.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
          	} else if (isGroup) {
            hexa.sendMessage(from, `Untuk grup penggunaan _${prefix}antidelete aktif*`, MessageType.text)
          	}
        	} else if (argz[1] == 'banct') {
          	if (isBanCtRevoke) return hexa.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
          	if (argz.length === 2 || argz[2].startsWith('0')) return hexa.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
          	dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
          	fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
          	hexa.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
        	} else if (argz[1] == 'mati') {
          	if (isGroup) {
            const index = dataRevoke.indexOf(from)
            dataRevoke.splice(index, 1)
            fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
            hexa.sendMessage(from, `*Sukses mematikan Antidelete Grup!*`, MessageType.text)
          	} else if (!isGroup) {
            hexa.sendMessage(from, `Untuk kontak penggunaan _${prefix}antidelete ctmati*`, MessageType.text)
          	}
        	} else if (argz[1] == 'ctmati') {
          if (!mek.key.fromMe) return reply('Owner bukan?')
          	if (!isGroup) {
            dataCtRevoke.data = false
            fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
            hexa.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
          	} else if (isGroup) {
            hexa.sendMessage(from, `Untuk grup penggunaan _${prefix}antidelete mati*`, MessageType.text)
          	}
        	}
        	break
        case `${prefix}return`:
             anuiu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}

        	return hexa.sendMessage(from, JSON.stringify(eval(body.slice(7))),text,anuiu, {quoted: freply})
        	break
		case `${prefix}term`:
        	const cmd = args[0]
        	var itsme = `${nomornye}@s.whatsapp.net`
        	var split = `*EXECUTOR*`
        	const term = {contextInfo: {participant: itsme,quotedMessage: {extendedTextMessage: { text: split, } }}}
        	exec(cmd, (err, stdout) => {
          	if (err) return hexa.sendMessage(from, `root@Botz01:~ ${err}`, text, { quoted: freply })
          	if (stdout) {
            hexa.sendMessage(from, stdout, text, term)
          	}
        	})
        	break
        case `${prefix}public`:
          	if (!mek.key.fromMe) return
          	if (banChats === false) return
          	uptime = process.uptime()
          	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	hexa.sendMessage(from, `「 *PUBLIC-MODE* 」`, text,anu)
          	break
		case `${prefix}self`:
          	if (!mek.key.fromMe) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
         	banChats = true
          	hexa.sendMessage(from, `「 *SELF-MODE* 」`, text,anu)
          	break
        case `${prefix}fdeface`:
            ge = args[0]            
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply(fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
		case `${prefix}music`:
           if (args.length === 0) return reply('Kirim perintah ${prefix}music judul lagu')
           const querv2 = args[0]
           try {
               const resmusv2 = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv2)}&apikey=${VhtearKey}`)
               const jsonsercmuv2 = await resmusv2.data
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               await sendMediaURL(from, result[0].image, xixixai)
           } catch (err){
               console.log(err)
           }
           break
		case `${prefix}getmusic`:
            try {
                if (isQuotedImage) {
                    if (args.length === 1) return reply('Kirim perintah *${prefix}getmusik _IdDownload_*')
                    if (!Number(args[0])) return reply('_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*')
                    const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
                    
                    yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb,captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    }).catch((e) => {
                        reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah mekar.')
                    })

                } else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (args.length === 1) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply('_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_',)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah mekar._`)
            }
            break
		case `${prefix}image`:
        	if (args.length < 1) return reply('Masukan teks!')
        	const gimg = args[0];
        	gis(gimg, async (error, result) => {
            for (var i = 0; i < (result.length < 3 ? result.length : 3); i++) {
            var get = got(result[i].url);
           	var stream = get.buffer();
            stream.then(async (images) => {
            await hexa.sendMessage(from,images,  image, {thumbnail:fs.readFileSync('./jadi.jpeg'),quoted: freply});
            });
          	}
    		});
        	break
        case `${prefix}hidetag`:
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	var alue = args[0]
          	var group = await hexa.groupMetadata(from)
          	var member = group['participants']
         	 var mem = []
          	member.map( async adm => {
          	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          	})
          	var options = {
          	text: alue,
          	contextInfo: { mentionedJid: mem },
          	quoted: freply
          	}
          	hexa.sendMessage(from, options, text)
          	break
        case `${prefix}ig`:
            if (args.length < 1) return reply('Link nya mana?')
            anu = await fetchJson('https://videfikri.com/api/igvideo/?url=${args[0]}', {method: 'get'})          
            buffer = await getBuffer(anu.result.video)
            hexa.sendMessage(from, buffer,video, { mimetype: 'video/mp4', filename: `${anu.result.fullname}.mp4`,quoted: freply})
            break
 //======================================================================================================================================================================================================================================
        case `${prefix}infobot`:
        case `${prefix}i`:
		case `${prefix}info`:
		case `${prefix}ingfo`:
		case `${prefix}ingfokan`:
			me1 = hexa.user
			uptime3 = process.uptime()
			tekss = `*INFO OWNER*\n*Owner bot* : ~AGUZUwu\n*No Owner* : wa.me/088806888170\n*YT1 https://www.youtube.com/c/MRmek69* \n*YT2 https://www.youtube.com/channel/UCtehRYJniIh6n7mPXbdQ3YQ*\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me1.name}\n*Nomor bot* : @${me1.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun3(uptime3)}\n*Ketik* : ${prefix}aguz _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
			bufferrr = await getBuffer(me1.imgUrl)
			hexa.sendMessage(from, bufferrr, image, {quoted: freply, caption: tekss, contextInfo:{mentionedJid: [me1.jid]}})
break
        case `${prefix}fakethumb`:
        case `${prefix}fakethumbnail`:
            ////if (!isRegistered && !mek.key.fromMe) return cheat(mess.only.Registered)
            //if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await hexa.downloadAndSaveMediaMessage(ger)
            hexa.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break

        case `${prefix}listonline`:
            let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
		    let online = [...Object.keys(hexa.chats.get(ido).presences), hexa.user.jid]
		    hexa.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: freply,
  		    contextInfo: { mentionedJid: online }
			    })
break

        case `${prefix}slow1`:
	         //if (!isQuotedAudio) return reply('Reply audio nya om')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
break

		case `${prefix}tupai`:
	         //if (!isQuotedAudio) return reply('Reply audio nya om')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
 break
 
		case `${prefix}blub`:
	        //if (!isQuotedAudio) return reply('Reply audio nya om')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
break

		case `${prefix}gemuk`:
	        //if (!isQuotedAudio) return reply('Reply audio nya om')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
break

		case `${prefix}ghost`:
	         //if (!isQuotedAudio) return reply('Reply audio nya om')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			 })
break
	    case `${prefix}slow`:
			low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			slo = await hexa.downloadAndSaveMediaMessage(low)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(slo)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
break
				
		case `${prefix}tupai1`:
			pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            tup = await hexa.downloadAndSaveMediaMessage(pai)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(tup)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
break
        
		case `${prefix}demoteall`:
             anu = []
             for (let o of groupMembers) {
             anu.push(o.jtext)
              }
             hexa.groupDemoteAdmin(from, anu)
 break
        
		case `${prefix}promoteall1`:
              anu = []
             for (let o of groupMembers) {
              anu.push(o.jtext)
             }
             hexa.groupMakeAdmin(from, anu)
break
                
		
		case `${prefix}promoteall`:
            const allMemu = groupMembers
            await promoteParticipant(from, allMemu)
 break
 
		case `${prefix}gemuk1`:
			muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            gem = await hexa.downloadAndSaveMediaMessage(muk)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(gem)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
break
				
		case `${prefix}bass`:
			ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            bas = await hexa.downloadAndSaveMediaMessage(ass)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(bas)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
			fs.unlinkSync(ran)
			})
break

        case `${prefix}tomp3`:
            ////////if (!isRegistered) return reply(ind.noregis())
            hexa.updatePresence(from, Presence.composing) 
            if (!isQuotedVideo) return reply(' reply videonya um ')
			reply(ind.download)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply(' Gagal, pada saat mengkonversi video ke mp3 ')
			buffer = fs.readFileSync(ran)
			hexa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: freply})
			fs.unlinkSync(ran)
			})
break

        case `${prefix}slot`:
   
                const sotoy = [
                    '🍊 : 🍒 : 🍐',
                    '🍒 : 🔔 : 🍊',
                    '🍇 : 🍒 : 🍐',
                    '🍊 : 🍋 : 🔔',
                    '🔔 : 🍒 : 🍐',
                    '🔔 : 🍒 : 🍊',
                    '🍊 : 🍋 : 🔔',		
                    '🍐 : 🍒 : 🍋',
                    '🍐 : 🍐 : 🍐',
                    '🍊 : 🍒 : 🍒',
                    '🔔 : 🔔 : 🍇',
                    '🍌 : 🍒 : 🔔',
                    '🍐 : 🔔 : 🔔',
                    '🍊 : 🍋 : 🍒',
                    '🍋 : 🍋 : 🍌',
                    '🔔 : 🔔 : 🍇',
                    '🔔 : 🍐 : 🍇',
                    '🔔 : 🔔 : 🔔',
                    '🍒 : 🍒 : 🍒',
                    '🍌 : 🍌 : 🍌',
                    '🍇 : 🍇 : 🍇'
                    ]
                const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
                    hexa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                     memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    hexa.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
                    hexa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    hexa.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                    hexa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                   memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    hexa.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
                    hexa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    hexa.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                    hexa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    hexa.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else {
	     	        hexa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | LOST ]\n\n`, text)
	     	    }
break


case `${prefix}goodgirlserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}')
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer('https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}goodboyserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}editodberkelasserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}')
				reply(ind.wait())
				ct = body.slice(20)
				dapuhy = await getBuffer('https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}goodlookingserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(17)
				dapuhy = await getBuffer('https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}fucekboyserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer('https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}jametserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}')
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer('https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}youtuberserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti AGUZ BOT')
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer('https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}fftourserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer('https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}fftourserti2`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}fftourserti3`:
				 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}fftourserti4`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}fftourserti5`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}mltourserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer('https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}mltourserti2`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}mltourserti3`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}mltourserti4`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}mltourserti5`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer('https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}pubgtourserti`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer('https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}pubgtourserti2`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer('https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}pubgtourserti3`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer('https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}pubgtourserti4`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer('https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}pubgtourserti5`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer('https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}')
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break


//=====================================BATES NGAB=====================================\\
//animemenu
                     case `${prefix}waifu`:
                     //if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				    anu = await fetchJson('https://arugaz.herokuapp.com/api/waifu')
				  	buf = await getBuffer(anu.image)
				 	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	hexa.sendMessage(from, buf, image, { quoted: freply, caption: `${texs}`})
				    break
					case `${prefix}animeboy`:
					//if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=anime%20boy', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					break
					case `${prefix}samehadaku`:
//if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())


////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/samehadaku?q=${body.slice(12)}`) 
buffer = await getBuffer(anu.thumb) 
AGUZUwu = `*[ SAMEHADAKU ]*\n\n\nJudul : ${anu.title}\nDesc : ${anu.desc}\nLink : ${anu.link}`
hexa.sendMessage(from, buffer, image, {quoted: freply, caption: AGUZUwu})
break
case `${prefix}neonime`:
//if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())


////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
hexa.updatePresence(from, Presence.composing) 
data = await fetchJson('https://docs-jojo.herokuapp.com/api/neonime_lastest', {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Title* : ${i.judul}\n*Link* : ${i.link}\n*Release* : ${i.rilis}\n=====================\n`
					}
					reply(teks.trim())
					break
					case `${prefix}dewabatch`:
                //if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

				
				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${body.slice(11)}`) 
				buffer = await getBuffer(anu.thumb) 
			    aguzbot = `*「 DEWABATCH 」*\n\n${anu.result}\n\nSinopsis : ${anu.sinopsis}`
			    hexa.sendMessage(from, buffer, image, {quoted: freply, caption: aguzbot})
			    break
			case `${prefix}kusonime`:
                
				//if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

					
				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cuk = await fetchJson(`http://zekais-api.herokuapp.com/kusonime?query=${body.slice(10)}`)
					buffer = await getBuffer(cuk.thumb)
					hasil = `*[ KUSONIME ]*\n\nNama : ${cuk.title}\nView : ${cuk.view}\nGenre : ${cuk.genre}\nSeason : ${cuk.season}\nType : ${cuk.type}\nStatus : ${cuk.status_anime}\nDuration : ${cuk.duration}\nRealesed : ${cuk.released}\n\nDeskripsi : ${cuk.description}`
					hexa.sendMessage(from, buffer, image, {quoted: freply, caption: hasil })
					
					break
case `${prefix}brainly`:
			//////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					hexa.sendMessage(from, teks, text, {quoted: freply, detectLinks: false})
                        console.log(res)
                    })
					
					break 
					case `${prefix}animegirl`:
				//if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=anime%20girl', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					break
				    case `${prefix}animeimg`:
				//if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=anime', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					break
				    case `${prefix}loli`:
				//if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=loli', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					break
                	case `${prefix}dewabatch1`:
                //if (!isPublic) return reply(mess.only.publikG)
		//////if (!isRegistered) return reply( ind.noregis())

				////////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
                    teks = body.slice(11)
                    anu = await fetchJson('https://arugaz.herokuapp.com/api/dewabatch?q=${teks}' , {method: 'get'})
                    thum = await getBuffer(anu.thumb)
                    hexa.sendMessage(from, thum, image, {quoted: freply, caption: `${anu.result}`})
                 	break

//=====================================BATES NGAB=====================================\\
//soundmenu
case `${prefix}home`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const home = fs.readFileSync('mp3/home.mp3')
hexa.sendMessage(from, home, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}gettingold`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const getting = fs.readFileSync('mp3/gettingold.mp3')
hexa.sendMessage(from, getting, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}sad`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const sad1 = fs.readFileSync('mp3/sad.mp3')
hexa.sendMessage(from, sad1, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}sad2`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const sad2 = fs.readFileSync('mp3/sad2.mp3')
hexa.sendMessage(from, sad2, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}sad3`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const sad3 = fs.readFileSync('mp3/sad3.mp3')
hexa.sendMessage(from, sad3, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}sad4`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const sad4 = fs.readFileSync('mp3/sad4.mp3')
hexa.sendMessage(from, sad4, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}aeshtetic`:

//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
hexa.sendMessage(from, tetik, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}aeshtetic2`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
hexa.sendMessage(from, tetik3, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}aeshtetic3`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
hexa.sendMessage(from, tetik3, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}aeshtetic4`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
hexa.sendMessage(from, tetik4, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}allnight`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const allnight = fs.readFileSync('mp3/allnight.mp3')
hexa.sendMessage(from, allnight, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}lucas`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const lucas = fs.readFileSync('mp3/lucas.mp3')
hexa.sendMessage(from, lucas, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}sowell`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const well = fs.readFileSync('mp3/sowell.mp3')
hexa.sendMessage(from, well, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}wanna`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const wanna = fs.readFileSync('mp3/wanna.mp3')
hexa.sendMessage(from, wanna, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}up`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const ups = fs.readFileSync('mp3/up.mp3')
hexa.sendMessage(from, ups, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}yourskin`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const skin = fs.readFileSync('mp3/yourskin.mp3')
hexa.sendMessage(from, skin, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}cutmeoff`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const moff = fs.readFileSync('mp3/cutmeoff.mp3')
hexa.sendMessage(from, moff, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}beautiful`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const ful = fs.readFileSync('mp3/beautiful.mp3')
hexa.sendMessage(from, ful, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}loosinggame`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const gam = fs.readFileSync('mp3/loosinggame.mp3')
hexa.sendMessage(from, gam, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}loosinginterest`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const rest = fs.readFileSync('mp3/loosinginterest.mp3')
hexa.sendMessage(from, rest, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}playdate`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const date = fs.readFileSync('mp3/playdate.mp3')
hexa.sendMessage(from, date, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}ayatkursi2`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
hexa.sendMessage(from, kursi, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}tilawah`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const tilawah = fs.readFileSync('mp3/tilawah.mp3')
hexa.sendMessage(from, tilawah, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}sholawatnabi`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
hexa.sendMessage(from, nabi, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}ngaji`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
hexa.sendMessage(from, ngaji1, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}ngaji2`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
hexa.sendMessage(from, ngaji2, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}iri`:

//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const irimp3 = fs.readFileSync('./mp3/iri.mp3');
hexa.sendMessage(from, irimp3, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}pale`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const pa = fs.readFileSync('assets/pale.mp3')
hexa.sendMessage(from, pa, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}sound`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

const soun = fs.readFileSync('assets/sound.mp3')
hexa.sendMessage(from, soun, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case `${prefix}sound1`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

satu = fs.readFileSync('./mp3/sound1.mp3');
hexa.sendMessage(from, satu, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}sound2`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

dua = fs.readFileSync('./mp3/sound2.mp3');
hexa.sendMessage(from, dua, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}sound3`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

tiga = fs.readFileSync('./mp3/sound3.mp3');
hexa.sendMessage(from, tiga, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}sound4`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

empat = fs.readFileSync('./mp3/sound4.mp3');
hexa.sendMessage(from, empat, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}sound5`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

lima = fs.readFileSync('./mp3/sound5.mp3');
hexa.sendMessage(from, lima, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}sound6`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

enam = fs.readFileSync('./mp3/sound6.mp3');
hexa.sendMessage(from, enam, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break
case `${prefix}sound7`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

tujuh = fs.readFileSync('./mp3/sound7.mp3');
hexa.sendMessage(from, tujuh, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break	
case `${prefix}slowmo`:
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await hexa. downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				hexa. sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
				fs.unlinkSync(ran)
				})
				break

				case `${prefix}tupai`:
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hexa. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
						fs.unlinkSync(ran)
					})
				break
				case `${prefix}gemok`:
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hexa. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
						fs.unlinkSync(ran)
					})
				break
				case `${prefix}bass`:                 
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hexa. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
						fs.unlinkSync(ran)
					})
				break



//=====================================BATES NGAB=====================================\\
//funmenu
                case `${prefix}bisakah`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: freply })
					
					break
		            case `${prefix}kapankah`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: freply })
					
					break
		            case `${prefix}apakah`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: freply })
					
					break
		            case `${prefix}bagaimanakah`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: freply })
					
					break
		            case `${prefix}rate`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: freply })
					
					break
                    case `${prefix}sangecek`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: freply })
					
					break
                    case `${prefix}gaycek`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: freply })
					
					break
                    case `${prefix}lesbicek`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: freply })
					
					break
                    case `${prefix}gantengcek`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: freply })
					
					break
		            case `${prefix}cantikcek`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: freply })
					
					break
		            case `${prefix}watak`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: freply })
					
				        break
		         case `${prefix}hobby`:
					// ⚠️ Case by SELF-AGUZ&YogPw

                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					hexa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: freply })
					
					break
                case `${prefix}jadian`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jtext)
					jds.push(diaa.jtext)
					mentions(teks, jds, true)
					
					break	
          case `${prefix}ngewe`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jtext)
					jds.push(diaat.jtext)
					mentions(teks, jds, true)
					
					break	
               case `${prefix}terganteng`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jtext)
					mentions(teks, jds, true)
					
					break	
               case `${prefix}tercantik`:
				// ⚠️ Case by SELF-AGUZ
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jtext)
					mentions(teks, jds, true)
					
					break	
					case `${prefix}caklontong`:
                    //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

	            	
					anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/kuis/caklontong?apikey=dappabotwa', {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.deskripsi+'*', text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, caklontong, text, {quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					 
					break 
			        case `${prefix}family100`:
                    
		           //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

	      	        
					anu = await fetchJson('https://leyscoders-api.herokuapp.com/api/family100?apikey=ORFVUMC', {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, family, text, {quoted: freply }) // ur cods
					}, 0) // 1000 = 1s,
					 
					break 
				    case `${prefix}tebakgambar`:
				    
				   //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/kuis/tebakgambar?apikey=dappabotwa', {method: 'get'})
					ngebuff = await getBuffer(anu.result.images)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					aguzbotwa.sendMessage(from, tebak, text, {quoted: freply})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aguzbotwa.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: freply }) // ur cods
					}, 0) // 1000 = 1s,
					 
					break
					case `${prefix}truth`:
					// Fix Case By AGUZ⛔
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg')
					hexa.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
					
					break
		case `${prefix}dare`:
					// Fix Case By Yogi/Hans⛔
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg')
					hexa.sendMessage(from, tod, image, { quoted: freply, caption: '*Dare*\n\n'+ der })
					
					break
//=====================================BATES NGAB=====================================\\
//Downloader menu
            case `${prefix}ambilthumb`: //by aguz
             ini_linku = args[0]
             
            aguzZ = await fetchJson(`https://onlydevcity.herokuapp.com/api/ytthumbnail?url=${ini_linku}&apikey=${OnlyDev}`)
            
            bacot = await getBuffer(aguzZ.result.maxresdefault)
            hexa.sendMessage(from, bacot, image)
                        break
/*case `${prefix}ambilthumb`:
			//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())
if (!mek.key.fromMe) return reply('Owner bukan?')
                    ini_link = args[0]
                    get_result = await fetchJson('https://onlydevcity.herokuapp.com/api/ytthumbnail?url=${ini_link}&apikey=${OnlyDev}')
                         get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    //txt += `Uploader : ${get_result.uploader}\n`
                    //txt += `Duration : ${get_result.duration}\n`
                   //txt += `View : ${get_result.view}\n`
                    //txt += `Like : ${get_result.like}\n`
                    //txt += `Dislike : ${get_result.dislike}\n`
                    //txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    hexa.sendMessage(from, buffer, image, { quoted: freply, caption: txt })
                    //get_audio = await getBuffer(get_result.link[3].link)
                    //hexa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply })
                    break*/
              case `${prefix}ytmp3`:
			//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())
if (!mek.key.fromMe) return reply('Owner bukan?')
                    ini_link = args[0]
                    get_result = await fetchJson('http://api.lolhuman.xyz/api/ytaudio?apikey=${LolHuman}&url=${ini_link}')
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    hexa.sendMessage(from, buffer, image, { quoted: freply, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    hexa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply })
                    break
                case `${prefix}ytmp4`:
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())
if (!mek.key.fromMe) return reply('Owner bukan?')
                    ini_link = args[0]
                    get_result = await fetchJson('http://api.lolhuman.xyz/api/ytvideo?apikey=${LolHuman}&url=${ini_link}')
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    hexa.sendMessage(from, buffer, image, { quoted: freply, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    hexa.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: freply })
                    break
//=====================================BATES NGAB=====================================\\
//RandomImagemenu
                    case `${prefix}freefireimg`:
					
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=freefire', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					
					break
					case `${prefix}ww2`:
					
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=ww2', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					
					break
                case `${prefix}anjing`:
					
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=anjing', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					
					break

                case `${prefix}kucing`:
					
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson('https://api.fdci.se/rep.php?gambar=kucing', {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					
					break
		case `${prefix}doraemon`:
					
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson('https://api.fdci.se/rep.php?gambar=doraemon', {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					
					break
		case `${prefix}hamster`:
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

                
				
					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.fdci.se/rep.php?gambar=aesthetic-hamsters', {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					
					break
		case `${prefix}kelinci`:
					
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.fdci.se/rep.php?gambar=aesthetic-rabbit', {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply })
					
					break
//=====================================BATES NGAB=====================================\\
//image edit menu
case `${prefix}wanted`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}gtav`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case `${prefix}hedsot`:
              		     	
					if (!isGroup) return reply(ind.groupo())
				
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag Kepala Target Yang Ingin Di Hedsot!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Bismillah Hedsot >_<* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupRemove(from, mentioned)
					} else {
						mentions(`*Bismillah Hedsot >_<* @${mentioned[0].split('@')[0]} 🤣`, mentioned, true)
						hexa.groupRemove(from, mentioned)
					}
					break
	case `${prefix}admin`:
              			
					if (!isGroup) return reply(ind.groupo())
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		        case `${prefix}listadmin`:
                if (!isGroup) return reply(ind.groupo())
                teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                no += 1
                teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                break			
	        	case `${prefix}add`:
               			
					if (!isGroup) return reply(ind.groupo())
				
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add bapakau kah? -_-')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						hexa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
	case `${prefix}rotate`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('http://zekais-api.herokuapp.com/rotate?url=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}komunis`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}deletepc`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('http://zekais-api.herokuapp.com/delete?url=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}facebookpage`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}costumwp`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}pantaimalam`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}pencil`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}bakar`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case `${prefix}crossgun`:
	//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await hexa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer('https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}')
	 hexa.sendMessage(from, hehe, image, {quoted: freply})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
//=====================================BATES NGAB=====================================\\
//makermenu
                case `${prefix}darkneon`:
                case `${prefix}candlemug`:
                case `${prefix}lovemsg`:
                case `${prefix}mugflower`:
                case `${prefix}narutobanner`:
                case `${prefix}paperonglass`:
                case `${prefix}romancetext`:
                case `${prefix}shadowtext`:
                case `${prefix}coffeecup`:
                case `${prefix}coffeecup2`:
                case `${prefix}glowingneon`:
                case `${prefix}underwater`:
                case `${prefix}hpotter`:
                case `${prefix}woodblock`:
               
				
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply('Usage: ${prefix + command} text\nExample: ${prefix + command} AGUZ')
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    hexa.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @Aguzz*', quoted: freply})
                break
                case `${prefix}bakarnama`: 				
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti SELF-AGUZ*')
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}nulis`:
                //❗case by SELF-AGUZBennyBot
                
               //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

                ////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply('Teksnya mana ngab?\nContoh ${prefix}nulis SELF-AGUZ')
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${dapuhy}`)
                hexa.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe SELF-AGUZBennyBot', quoted: freply})
                break
				case `${prefix}nulis2`:
                //❗case by SELF-AGUZBennyBot
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

               
                ////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply('Teksnya mana ngab?\nContoh ${prefix}nulis SELF-AGUZ')
                dapuhy = body.slice(8)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${dapuhy}`)
                hexa.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe SELF-AGUZBennyBot', quoted: freply})
                break
                case `${prefix}nulis3`:
                //❗case by SELF-AGUZBennyBot
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

               
                ////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply('Teksnya mana ngab?\nContoh ${prefix}nulis SELF-AGUZ')
                dapuhy = body.slice(8)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}`)
                hexa.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe SELF-AGUZBennyBot', quoted: freply})
                break
                case `${prefix}nulis4`:
                //❗case by SELF-AGUZBennyBot
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

               
                ////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply('Teksnya mana ngab?\nContoh ${prefix}nulis SELF-AGUZ')
                dapuhy = body.slice(8)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                hexa.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe SELF-AGUZBennyBot', quoted: freply})
                break
                case `${prefix}attp`:
                //❗case by SELF-AGUZBennyBot
			    
               //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

                ////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply('Teksnya mana ngab?\nContoh ${prefix}attp SELF-AGUZ')
                dapuhy = body.slice(6)
				dapzz = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dapuhy}`)
				hexa.sendMessage(from, dapzz, sticker, {quoted: freply})
				break
                case `${prefix}ttp`:
                //❗case by SELF-AGUZBennyBot
			    
               
                ////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply('Teksnya mana ngab?\nContoh ${prefix}ttp SELF-AGUZ')
                dapuhy = body.slice(5)
				dapzz = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${dapuhy}`)
				hexa.sendMessage(from, dapzz, sticker, {quoted: freply})
				break
                case `${prefix}logogaming`:
//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())


////if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply('_Teksnya Mana Boss_\n*Contoh ${prefix}logogaming Aguz*')
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
hexa.sendMessage(from, game, image, {quoted: freply})
break
                case `${prefix}gplaybutton`:
                case `${prefix}splaybutton`:
               
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply('Usage: ${prefix + command} text\nExample: ${prefix + command} AGUZ')
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer('https://api.zeks.xyz/api/${command}?text=${txt}&apikey=${ZeksApi}')
                    hexa.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @aguz*', quoted: freply})
                    break
         
               case `${prefix}qrencode`:
                case `${prefix}barcode`:
               //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply('Usage: ${prefix + command} text\nExample: ${prefix + command} AGUZ')
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer('https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&text=${txt}')
                    hexa.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @aguzz*', quoted: freply})
                break
                case `${prefix}googlesearch`:
			    //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

	        	
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
		       
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}googlesearch Aguz|Benny|Banget')
				reply(ind.wait())
				ct = body.slice(14)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				dap3 = ct.split("/")[2];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&text3=${dap3}&theme=google-suggestion&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}pubglogo`:
				// ⚠️ Case by SELF-AGUZ
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				 //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo Aguz|Benny')
				reply(ind.wait())
				ct = body.slice(9)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=pubg&apikey=dappabotwa')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}glitchtext`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}glitchtext Aguz|Benny')
				reply(ind.wait())
				ct = body.slice(11)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&theme=glitch&apikey=dappabotwa')
				dapuhy = await getBuffer(anu.result.url)
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}cup`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}cup SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=dappabotwa')
				dapuhy = await getBuffer(anu.result.url)
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}cup2`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}cup2 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=dappabotwa')
				dapuhy = await getBuffer(anu.result.url)
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}battlefield`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}battlefield Aguz|Benny')
				reply(ind.wait())
				ct = body.slice(12)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=battlefield&apikey=dappabotwa')
				dapuhy = await getBuffer(anu.result.url)
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}hartatahta`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Teksnya Mana Cuy?\nContoh : ${prefix}hartatahta SELF-AGUZ')
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer('https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=${ZeksApi}')
				hexa.sendMessage(from, asu, image, {quoted: freply})
				
				break
				
//=====================================BATES NGAB=====================================\\
//ownermenu
                    case `${prefix}event`:
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (iseventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                    case `${prefix}bcgc`:
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				   if (!mek.key.fromMe) return reply('Owner bukan?')
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
						runtime = process.uptime()
	var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
						// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						const aguz1 = {
						contextInfo: {
						participant: itsme,
						quotedMessage: {
						extendedTextMessage: {
						text: split,
										}
									}
								}
							}
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						
						
					    buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, aguz1, {caption: `*BC GROUP*\n\n➸ *Dari Grup* : ${groupName}\n➸ *Pengirim* : wa.me/${(sender.split('@')[0])}\n➸ *Pesan* : ${body.slice(6)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`})
						}
						reply('*SUKSES BOSKU*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*BC GROUP*\n\n➸ *Dari Grup* : ${groupName}\n➸ *Pengirim* : wa.me/${(sender.split('@')[0])}\n➸ *Pesan* : ${body.slice(6)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`)
						}
						reply('*SUKSES BOSKU*')
					}
					break
					case `${prefix}bc`: 
					if (!mek.key.fromMe) return reply('Owner bukan?')
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `*「 PESAN SIARAN 」*\n\n${body.slice(4)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「SELF-AGUZ」*\n\n${body.slice(4)}\n\n *Nomer :* ${sender.replace('@s.whatsapp.net', '')}\n*Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')} WIB*\n*Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`)
						}
						reply('*Suksess broadcast* ')
					}
					break
					case `${prefix}block`:
				 hexa.updatePresence(from, Presence.composing) 
				 hexa.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!mek.key.fromMe) return reply('Owner bukan?')
					hexa.blockUser (`${body.slice(7)}@c.us`, "add")
					hexa.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		            case `${prefix}unblock`:
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					if (!isGroup) return reply(ind.groupo())
				if (!mek.key.fromMe) return reply('Owner bukan?')
				    hexa.blockUser (`${body.slice(9)}@c.us`, "remove")
					hexa.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
					case `${prefix}leave`:
                 // ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
					if (!isGroup) return reply(ind.groupo())
				if (!mek.key.fromMe) return reply('Owner bukan?')
					setTimeout( () => {
					hexa.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					hexa.updatePresence(from, Presence.composing) 
					hexa.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
case `${prefix}fitnah`:
                 ////if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
                 //if (!isPublic) return reply(mess.only.publikG)
				if (args.length < 1) return reply('Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga')
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case `${prefix}tagall`:
					
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*➡️* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jtext)
					}
					mentions(teks, members_id, true)
					break
		            case `${prefix}clearall`:
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				if (!mek.key.fromMe) return reply('Owner bukan?')
					anu = await hexa.chats.all()
					hexa.setMaxListeners(25)
					for (let _ of anu) {
						hexa.deleteChat(_.jtext)
					}
					reply(ind.clears())
					break
					case `${prefix}setprefix`:
					if (args.length < 1) return
				if (!mek.key.fromMe) return reply('Owner bukan?')
						//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		            //
					case `${prefix}addbadword`:  // Fix Bug By AGUZ*
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

                 if (!mek.key.fromMe) return reply('Owner bukan?')
                  if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                    case `${prefix}delbadword`:  
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

                if (!mek.key.fromMe) return reply('Owner bukan?')
                  if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case `${prefix}setppbot`:
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				if (!mek.key.fromMe) return reply('Owner bukan?')
					hexa.updatePresence(from, Presence.composing) 
					//if (!isQuotedImage) return reply('Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim')
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
					await hexa.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
					case `${prefix}ban`:
					
				if (!mek.key.fromMe) return reply('Owner bukan?')
			//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case `${prefix}unban`:
			//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
					case `${prefix}unblockk`:
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

                if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				hexa.blockUser (`${body.slice(10)}@c.us`, "remove")
                hexa.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                break
		        case `${prefix}block`:
				
				hexa.updatePresence(from, Presence.composing) 
				hexa.chatRead (from)
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

                if (!isGroup) return reply(ind.groupo())
            if (!mek.key.fromMe) return reply('Owner bukan?')
                hexa.blockUser (`${body.slice(7)}@c.us`, "add")
                hexa.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                break
//=====================================BATES NGAB=====================================\\
//InformationMenu
                case `${prefix}infogempa`: 
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/infogempa?apikey=alpinofc')
				hasil = `➸ *Waktu* : ${anu.result.Waktu}\n*➸ Lintang :* ${anu.result.Lintang}\n*➸ Bujur :* ${anu.result.Bujur}\n*➸ Magnitudo :* ${anu.result.Magnitudo}\n*➸ Kedalaman :* ${anu.result.Kedalaman}\n*➸ Wilayah :* ${anu.result.Wilayah}`
				hexa.sendMessage(from, hasil, text, {quoted: freply})
				break
				case `${prefix}kbbi`:	
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
						
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/kbbi?kata=${body.slice(6)}&apikey=yogipw', {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break
				case `${prefix}kodepos`: 
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				hexa.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply('kotanya mana bang?')
				reply(ind.wait())
				asu = await fetchJson('https://yogipw-api.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=syahri2k21')
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break
				case `${prefix}covidindo`: 
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				hexa.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson('https://yogipw-api.herokuapp.com/api/covidindo?apikey=yogipw', {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result) {
					teks += `*Kode Provinsi:* : ${i.attributes.Kode_Provi}\n*Provinsi* : ${i.attributes.Provinsi}\n*Total Positif* : ${i.attributes.Kasus_Posi}\n*Total Sembuh* : ${i.attributes.Kasus_Semb}\n*Total Meninggal* : ${i.attributes.Kasus_Meni}\n=================\n`
				}
				reply(teks)
				break
				case `${prefix}covidglobal`: 
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/covidworld?apikey=${OnlyDev}')
				teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
				hexa.sendMessage(from, teks, text, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
				case `${prefix}fakeaddress`:
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/fakedata?country=en&apikey=${YogiPwKey}')
				teks = `➸ *Nama* : ${anu.result.name}\n*➸ Birthday :* ${anu.result.birthday}\n*➸ Address :* ${anu.result.address}\n*➸ City :* ${anu.result.city}\n*➸ Region :* ${anu.result.region}\n*➸ Country :* ${anu.result.country}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Phone Number :* ${anu.result.phone_number}\n*➸ Username :* ${anu.result.username}\n*➸ Password :* ${anu.result.password}\n*➸ Email :* ${anu.result.email}`
				hexa.sendMessage(from, teks, text, {quoted: freply})
				break
				case `${prefix}kalkulator`:
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /')
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply('"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /')
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				
				break
				case `${prefix}infonomor`:
					
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Masukan Nomor\nContoh : ${prefix}infonomor 0812345678')
					data = await fetchJson('https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}')
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
					reply(hasil)
					
					break 
					case `${prefix}cuaca`:
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ca = await fetchJson('http://zekais-api.herokuapp.com/cuaca?daerah=${body.slice(7)}')
					hasil = `*Cuaca🌤*\nNama : ${ca.Nama}\nLongitude : ${ca.longitude}\nLatitude : ${ca.latitude}\nSuhu : ${ca.Suhu}\nAngin : ${ca.Angin}\nKelembapan : ${ca.Kelembapan}\nCuaca : ${ca.Cuaca}\nUdara : ${ca.Udara}`
					hexa.sendMessage(from, ca, text, {quoted: freply })
					
					break
                case `${prefix}beritahoax`:
					// Fix Case By aguz⛔
                
				
					//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://docs-jojo.herokuapp.com/api/infohoax', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					
					break 

//=====================================BATES NGAB=====================================\\
//nsfwmenu
              case `${prefix}randombokep`:
              ////if (!isRegistered) return reply( ind.noregis())

				hexa.updatePresence(from, Presence.composing) 
				 ////if (isBanned) return reply(mess.only.benned)    
				// if (isLimit(sender)) return reply(limitend(pushname2))
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				 data = fs.readFileSync('./selfaguz/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 hexa.sendMessage(from, randBokep, image, {quoted: freply, caption: randTeks})
				//await limitAdd(sender) 
				break
case `${prefix}asupan`:
////if (!isRegistered) return reply( ind.noregis())

				hexa.updatePresence(from, Presence.composing) 
				 ////if (isBanned) return reply(mess.only.benned)    
			//	 if (isLimit(sender)) return reply(limitend(pushname2))
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				reply(mess.wait)
				 data = fs.readFileSync('./selfaguz/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 hexa.sendMessage(from, asupan, video, {quoted: freply, caption: '\`\`\`ASUPAN GAN:V\`\`\`'})
				//await limitAdd(sender) 
				break  
                
		        case `${prefix}pussy`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/pussy?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
		        case `${prefix}nekonime`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image)
				break
		        case `${prefix}baka`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				
				anu1 = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${OnlyDev}')
				buffer1 = await getBuffer(anu1.result.url)
				hexa.sendMessage(from, buffer1, image)
				break
		        case `${prefix}blowjob`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/blowjob?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
		        case `${prefix}lewd`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
		        case `${prefix}hentai`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
		        case `${prefix}waifu`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
		        case `${prefix}eroyuri`: 
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

		//if (!isNsfw) return reply(ind.nsfwoff())
		
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
			
		        case `${prefix}hug`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
		        case `${prefix}hug2`: 
		//if (!isNsfw) return reply(ind.nsfwoff())
		//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())
		
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(ind.wait())
				anu = await fetchJson('https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=${OnlyDev}')
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih hasilnya kak...'})
				break
case `${prefix}grup`:
		        case `${prefix}group`:
                if (!isGroup) return reply(ind.groupo())
              ////
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
				reply(`*BERHASIL MEMBUKA GROUP*`)
                hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`*BERHASIL MENUTUP GROUP*`)
				hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
case `${prefix}setname`:
		        if (!isGroup) return reply(ind.groupo())
				//
				if (!isBotGroupAdmins) return reply(ind.badmin())
				hexa.groupUpdateSubject(from, `${body.slice(9)}`)
				hexa.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: freply})
				break
                case `${prefix}setdesc`:
                if (!isGroup) return reply(ind.groupo())
              ////
                if (!isBotGroupAdmins) return reply(ind.badmin())
                hexa.groupUpdateDescription(from, `${body.slice(9)}`)
                hexa.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: freply})
                break
                case `${prefix}demote`:
                if (!isGroup) return reply(ind.groupo())
              ////
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                hexa.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
                hexa.groupDemoteAdmin(from, mentioned)
                }
                break
			    case `${prefix}promote`:
                if (!isGroup) return reply(ind.groupo())
              ////
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                hexa.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
                hexa.groupMakeAdmin(from, mentioned)
                }
                break


case `${prefix}spam|5`:
              //    //if (isBanned) return reply(ind.baned())
			//	//if (!isRegistered) return reply(ind.noregis())
				//if (!isPrem) return reply(ind.premium())
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(10)
					var group = await hexa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					hexa.sendMessage(from, options, text)
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
					break
					case `${prefix}spam|10`:
               //   //if (isBanned) return reply(ind.baned())
			//	//if (!isRegistered) return reply(ind.noregis())
				//if (!isPrem) return reply(ind.premium())
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(11)
					var group = await hexa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					hexa.sendMessage(from, options, text)
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})
	                .then(() => {hexa.sendMessage(from, options, text)})	                	                
					break

   case `${prefix}owner`:
               case `${prefix}creator`:
                 case `${prefix}developer`:
            hexa.sendMessage(from, {displayname: "Aguzツ", vcard: vcard1}, MessageType.contact, { quoted: freply})
             
              hexa.sendMessage(from, 'Tuh nomer owner ku 😎 jangan spam goblog atau gw block lu',MessageType.text, { quoted: freply} )
		break
                    case `${prefix}kangbanned`:
            
             hexa.sendMessage(from, {displayname: "Whatsappツ", vcard: vcard2}, MessageType.contact, { quoted: freply})
           
		break

case `${prefix}colong`:
                    if ((isMedia && !hexa.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolApi}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": 'PUNYA AguzBotWa',
                                "author": 'jan colong ya sayang'
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            hexa.sendMessage(from, ini_buff, sticker, { quoted: freply })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim stiker dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				case `${prefix}drawing`:
////if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer('https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}')
 hexa.sendMessage(from, hehe, image, {quoted:freply})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break
				case `${prefix}triggered`:
					case `${prefix}ger`:
// //if (!isRegistered) return reply(ind.wait())
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(ind.wait)
         owgi = await hexa.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        tggrd = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tggrd}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                hexa.sendMessage(from, nobg, sticker, {quoted: freply})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
				case `${prefix}wasted`:
  case `${prefix}was`:
////if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  sket = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${sket}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
hexa.sendMessage(from, nobg, sticker, {
  quoted: freply
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
                case `${prefix}slapimage`:
////if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer('https://api.zeks.xyz/api/slap?apikey=${ZeksApi}&img1=${anu.display_url}&img2=${anu.display_url}')
 hexa.sendMessage(from, hehe, image, {quoted:freply})
} else {
  reply('mana foto nya kaka>_<')
}
break
                case `${prefix}rip`:
////if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(5)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer('http://api.lolhuman.xyz/api/editor/skullmask?apikey=${LolHuman}&img=${tels}')
 hexa.sendMessage(from, hehe, image, {quoted:freply})
} else {
  reply('mana foto nya kaka>_<')
}
break
				case `${prefix}passed`:
////if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer('https://mhankbarbar.tech/api/mpassed?url=${anu.display_url}&apiKey=${BarBarKey}')
 hexa.sendMessage(from, hehe, image, {quoted:freply})
} else {
  reply('mana foto nya kaka>_<')
}
break
				case `${prefix}wanted`:
////if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await hexa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer('https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}')
 hexa.sendMessage(from, hehe, image, {quoted:freply})
} else {
  reply('mana foto nya kaka>_<')
}
break
                  case `${prefix}timer`:
             //     //if (isBanned) return reply(ind.baned())
			//	//if (!isRegistered) return reply(ind.noregis())
			//	if (isLimit(sender)) return reply(ind.limitend(pusname))                  
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break		
				case `${prefix}pornhub`:
             //     //if (isBanned) return reply(ind.baned())
		//		//if (!isRegistered) return reply(ind.noregis())
			//	if (!isPrem) return reply(ind.premium())
				var gh = body.slice(9)
				var porn = gh.split("|")[0];
				var hub = gh.split("|")[1];
				if (args.length < 1) return reply('「❗」Contoh : ${prefix}pornhub kevin & Hub')
				reply(ind.wait())
				buffer = await getBuffer('https://api.zeks.xyz/api/phlogo?text1=${porn}&text2=${hub}&apikey=${ZeksApi}')
				hexa.sendMessage(from, buffer, image, {quoted: freply})
			//	await limitAdd(sender)
				break				
				case `${prefix}hartatahta`:
			//	 if (!isPrem) return reply(ind.premium())				
            //     //if (!isRegistered) return reply( ind.noregis())
			//	if (isLimit(sender)) return reply(ind.limitend(pusname))
			//	//if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(7)
				reply(ind.wait())
				bh = await getBuffer('https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=${ZeksApi}')
				hexa.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: freply})
			//	await limitAdd(sender)
				break

case `${prefix}hartatata`:
				 // Fix Bug By Sofyan AMV				
            //     //if (!isRegistered) return reply( ind.noregis())
			//	if (isLimit(sender)) return reply(ind.limitend(pusname))
			//	//if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer('https://mhankbarbar.tech/api/htahta?apiKey=${BarBarKey}&text=${bh}')
				hexa.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: freply})
			//	await limitAdd(sender)
				break
case `${prefix}speed`:
                
                const timestamp = speed();
                const latensi = speed() - timestamp 
                hexa.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: freply})
                    break		


// Fitur Defacer

				case `${prefix}dorking`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson('https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}', {method: 'get'})
					hasil = `${anu.result}`
					hexa.sendMessage(from, hasil, text, {quoted: freply})
					 
					break  
				case `${prefix}encode64`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson('https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}', {method: 'get'})
				hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					 
					break 
				case `${prefix}decode64`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}', {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					 
					break  
				case `${prefix}decode32`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}', {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					 
					break  
				case `${prefix}encode32`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}', {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					 
					break  
				case `${prefix}encbinary`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}', {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					 
					break  
				case `${prefix}decbinary`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}', {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					 
					break  
				case `${prefix}encoctal`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
			//	//if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}', {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					
					break  
				case `${prefix}decoctal`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}', {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					 
					break  
				case `${prefix}becrypt`:
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson('https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}', {method: 'get'})
				hexa.sendMessage(from, `${anu.result}`, text, {quoted: freply})
				 
				break 
					case `${prefix}hashidentifier`:
					//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				////if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchJson('https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}')
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  hexa.sendMessage(from, hasilhash, text, {quoted: freply})
					  
					  break 
// akhir encrypt & decrypt Fitur

			case `${prefix}google`:
                const googleQuery = body.slice(8)
               //if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply('*Hasil Pencarian : ${googleQuery}* tidak ditemukan')
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    hexa.sendMessage(from, 'Google Error : ' + e);
                })
                 
                break
case `${prefix}kalkulator`:
					//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				 //  if (!isUser) return reply(mess.only.userB)
				   //if (!isPublic) return reply(mess.only.publikG)
				   //if (isLimit(sender)) return reply(limitend(pushname2))
				     if (args.length < 1) return reply('[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson('https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}', {method: 'get'})
				    hexa.sendMessage(from, `*${anu.result.data}*`, text, {quoted: freply})
				     	
				    break 
                  	case `${prefix}infogc`:
				
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')  
				 //if (!isPublic) return reply(mess.only.publikG)
				//if (!isUser) return reply(mess.only.userB)
                hexa.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await hexa.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        hexa.sendMessage(from, buffer, image, {quoted: freply, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
case `${prefix}setpp`:
	            //if (isBanned) return reply('Maaf kamu sudah terbenned!')    
	           // if (!isUser) return reply(mess.only.userB)
	            //if (!isPublic) return reply(mess.only.publikG)
                    if (!isGroup) return reply(mess.only.group)
                  //  if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await hexa.downloadAndSaveMediaMessage(enmedia)
                    await hexa.updateProfilePicture (from, media)
                    reply('sabar')
                    reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
                    break
                      case `${prefix}quotemaker`:
			 
			    ////if (!isPublic) return reply(mess.only.publikG)
	
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					hexa.sendMessage(from, buffer, image, {quoted: freply})
					
					break 

case `${prefix}infoowner`:
		               case `${prefix}infodeveloper`:
		               case `${prefix}infopengembang`:
                      
				      
					   hexa.sendMessage(from, infown(), text)
					   break
					   case `${prefix}bahasa`:
					// Fix Case By AGUZ⛔
                
				
					
				
					hexa.sendMessage(from, bahasa(), text)
					
					break
		            case `${prefix}kodenegara`:
					// Fix Case By AGUZ⛔
                
				
					
				
					hexa.sendMessage(from, negara(), text)
					
					break
		            case `${prefix}del`:
		            case `${prefix}d`:
		            case `${prefix}delete`:
                
				
					
				
					hexa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					
					break
					
	case `${prefix}rules`:
	case `${prefix}snk`:
               
                   costum( snk(prefix), text, tescuk, cr)
					break

break
                case `${prefix}bikingc`:
                case `${prefix}creategroup`:
                const saya = '62813908476353@c.us'
                arg = body.trim().split('|')
                hexa.sendMessage(from, `otw mek`, MessageType.text, {quoted : freply})
                const gcname = args[1]
                hexa.groupCreate(gcname, saya)
                hexa.sendMessage(from, 'Group Created')
                break

case `${prefix}meme`:
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer('https://imgur.com/${meme.hash}.jpg')
					hexa.sendMessage(from, buffer, image, {quoted: freply, caption: '.......'})
					break

break
                case `${prefix}darkjokes`:
                
				
				
				reply(ind.wait())
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 hexa.sendMessage(from, darkjokes, image, {quoted: freply, caption: '\`\`\`DARK JOKES\`\`\`'})
				break
				

				case `${prefix}memeindo`: 
                
				
				
				
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson('https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}', {method: 'get'})
				buffer = await getBuffer(anu.result)
				hexa.sendMessage(from, buffer, image, {quoted: freply})
				
				break
				case `${prefix}tribunews`:
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.zeks.xyz/api/tribunews?apikey=${ZeksApi}', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					
					break
			    case `${prefix}liputan6`: 
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.zeks.xyz/api/liputan6?apikey=${ZeksApi}', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					
					break
				case `${prefix}foxnews`: 
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.zeks.xyz/api/foxnews?apikey=${ZeksApi}', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					
					break
				case `${prefix}nickff`: 
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.zeks.xyz/api/nickepep?apikey=${ZeksApi}', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					
					break
				case `${prefix}newsinfo`: 
					// Fix Case ByAGUZ⛔
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=WEMPYGANSS`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					
					break
					case `${prefix}pinterest`:
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.fdci.se/rep.php?gambar=${body.slice(11)}', {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					hexa.sendMessage(from, pok, image, { quoted: freply, caption: `*PINTEREST*`})
					
					break 
					case `${prefix}jadwaltv`:
					
				
					
				
					gatauda = body.slice(10)					
					anu = await fetchJson('https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=${ZeksApi}', {method: 'get'})
					reply(anu.result)
					
					break
					case `${prefix}igstalk`:
                
				
					
				
					hmm = await fetchJson('http://zekais-api.herokuapp.com/igs?username=${body.slice(9)}')
					buffer = await getBuffer(hmm.data.profilehd)
					hasil = `Fullname : ${hmm.data.fullname}\nPengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
					hexa.sendMessage(from, buffer, image, {quoted: freply, caption: hasil})
					
					break
case `${prefix}ambil`:
					//❗case punya Lol Team
				//    //if (!isRegistered) return reply(ind.noregis())
			   // 	//if (isBanned) return reply(ind.baned())
			//	    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        aguzxz = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolHuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": aguzxz[0],
                                "author": aguzxz[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            buffer = fs.readFileSync(file_name)
                            hexa.sendMessage(from, buffer, sticker, { quoted: freply})
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
//=====================================BATES NGAB=====================================\\
//film menu
                 case `${prefix}film`: 	
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=${ZeksApi}', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					
					break
				case `${prefix}film2`: 	
                
				
					
				
					hexa.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=${ZeksApi}', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					
					break
					case `${prefix}searchfilm`:
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson('https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=${ZeksApi}', {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += `• *Judul:* ${plyll.title}\n• *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                  case `${prefix}filmapikterbaru`:
                
				
				
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				
				break
				case `${prefix}filmapikdrama`:
                
				
				
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				
				break
//=====================================BATES NGAB=====================================\\
//islammenu
                case `${prefix}tahlil`: 
                
				
				
				reply(ind.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/muslim/tahlil?apikey=yogipw', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
                case `${prefix}jadwalsholat`: 
                
				
				
				if (args.length < 1) return reply('kotanya mana bang?')
				reply(ind.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/jadwalshalat?kota=${body.slice(14)}&apikey=yogipw', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Tanggal : ${i.tanggal}\n*Imsyak* : ${i.imsyak}\n*Shubuh* : ${i.shubuh}\n*Terbit* : ${i.terbit}\n*Dhuha* : ${i.dhuha}\n*Dzuhur* : ${i.dzuhur}\n*Ashar* : ${i.ashr}\n*Magrib* : ${i.magrib}\n*Isya* : ${i.isya}\n=================\n`
				}
				reply(teks.trim())
				break
                case `${prefix}kisahnabi`: 
                
				
				
				reply(ind.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=alpinofc')
				buffer7 = await getBuffer(anu.result.nabi.image)
				teks = `*HASIL*\n\n*➸ Nama Nabi :* ${anu.result.nabi.nabi}\n*➸ Lahir :* ${anu.result.nabi.lahir}\n*➸ Umur :* ${anu.result.nabi.umur}\n*➸ Tempat :* ${anu.result.nabi.tempat}\n*➸ Kisah :* ${anu.result.nabi.kisah}`
				hexa.sendMessage(from, buffer7, image, {quoted: freply, caption: teks})
				break
		        case `${prefix}ayatkursi`: 
		        
				
				
				reply(ind.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/muslim/ayatkursi?apikey=yogipw')
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				hexa.sendMessage(from, teks, text, {quoted: freply})
				break
		        case `${prefix}doaharian`: 
		        
				
				
				hexa.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson('https://yogipw-api.herokuapp.com/api/muslim/doaharian?apikey=syahri2k21', {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case `${prefix}niatsholat`:  
		        
				
				
				reply(ind.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/muslim/niatshalat?apikey=syahri2k21', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		        case `${prefix}bacaansholat`: 
		        
				
				
				reply(ind.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/muslim/bacaanshalat?apikey=syahri2k21', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
//=====================================BATES NGAB=====================================\\
//groupmenu
                case `${prefix}nobadword`:
                if (!isGroup) return reply(ind.groupo())
              ////
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                badword.push(from)
                fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.satukos())
                }
                break
		
                case `${prefix}mutual`:
                // ⚠️ Case by SELF-AGUZ
				
				
				
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				
				break
	case `${prefix}cup`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
		//if (!isRegistered) return reply( ind.noregis())

			//	if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}cup SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=dappabotwa')
				dapuhy = await getBuffer(anu.result.url)
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
				case `${prefix}cup2`:
				// ⚠️ Case by SELF-AGUZ
				//if (!isPublic) return reply(mess.only.publikG)
	//	if (!isRegistered) return reply( ind.noregis())

			//	if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				if (args.length < 1) return reply('Textnya Mana Cuy?\n*Contoh ${prefix}cup2 SELF-AGUZ')
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson('https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=dappabotwa')
				dapuhy = await getBuffer(anu.result.url)
				hexa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Jangan Lupa Subscribe SELF-AGUZ' })
				break
/*case `${prefix}antilink`:
              //  if (!isGroup) return reply(mess.only.group)
			//	if (!isGroupAdmins) return reply(mess.only.admin)
				//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntilink) return reply('Anti link group sudah aktif')
				antilink.push(from)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan anti link group di group ini ✔️')
				hexa.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntilink) return reply('Mode anti link group sudah disable')
				antilink.splice(from, 1)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukes menonaktifkan anti link group di group ini ✔️')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break*/
				 case `${prefix}autosticker`:
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
                if (Number(args[0]) === 1) {
                    if (isAutoStikerOn) return reply('Fitur auto stiker sudah diaktifkan')
                    _autostiker.push(from)
                    fs.writeFileSync('./lib/aguzx/autostiker.json', JSON.stringify(_autostiker))
                    reply('Fitur autosticker berhasil diaktifkan')
                } else if (Number(args[0]) === 0) {
                    _autostiker.splice(from, 1)
                    fs.writeFileSync('./lib/aguzx/autostiker.json', JSON.stringify(_autostiker))
                    reply('Fitur autostiker berhasil dinonaktifkan')
                } else {
                    reply(ind.satukos())
                }
            break
case `${prefix}welcome`:
				if (!isGroup) return reply(ind.groupo())
				
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
				welkom.push(from)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
				} else {
				reply(ind.satukos())
				}
				break
//======================CASE TAMBAHAN============================\\
case `${prefix}fake`:
                    await fake(teks = "Fake", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "Dark", code = "IDR", price = 1000000)
                    break
 case `${prefix}tinyurl`:
					const tinyurl = body.slice(9)
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const srotlink = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					axios.get(`https://tobz-api.herokuapp.com/api/tinyurl?url=${tinyurl}&apikey=${TobzKey}`).then((res) => {
						let hasil = `${res.data.result}`;
						hexa.sendMessage(from, hasil, MessageType.text, srotlink)
				})
				break
 case `${prefix}otakulast`:
						anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${VhtearKey}`, {method: 'get'})
						if (anu.error) return reply(anu.error)
						teks = '=================\n\n'
						for (let i of anu.result.data) {
							teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.datetime}\n\n=================\n\n`
						}
						reply(teks.trim())
						break
 case `${prefix}settarget`:
					if (args.length < 1) return
					targetprivate = args[0]
					reply(`Succes Mengganti target Privte Fake Reply : ${targetprivate}`)
					break
case `${prefix}mediafire`: //update by sakura
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=${ZeksApi}&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.name_file}
File Size : ${anu.file_size}
Tanggal Upload : ${anu.upload_date}
File Tipe : ${anu.file_type}
Link Download : ${anu.download}
Deskripsi : ${anu.description}`
hexa.sendMessage(from, teks, text, {quoted: freply})
costum(buffer, MessageType.document)
break
 case `${prefix}searchstiker`: //Update by sakura
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=${ZeksApi}&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
dung = (anu.sticker)
hexa.sendMessage(from, buffer, image, {quoted: freply, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('Error cok')
						fs.unlinkSync(ranp)
						
						buffer2 = fs.readFileSync(rano)
						costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
case `${prefix}searchstiker`: //Update by sakura
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=${ZeksApi}&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
dung = (anu.sticker)
hexa.sendMessage(from, buffer, image, {quoted: freply, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('Error cok')
						fs.unlinkSync(ranp)
						
						buffer2 = fs.readFileSync(rano)
						costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
case `${prefix}emoji`: //By sakura
teks = body.slice(7)
buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=${ZeksApi}&emoji=${teks}`)
hexa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih'})
break


/*/src/bg.png => BackGround
-gravity = center => Posisi
-fill = HEX => warna
-stroke = HEX => outline
-strokewidth = ukuran => ketebalan*/

case `${prefix}meme1`:
var imgbb = require('imgbb-uploader')
					var path = require('path')
					var { spawn } = require('child_process')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			//hexa.sendMessage(from,buffer, image, { thumbnail:fs.readFileSync('./jadi.jpeg'),quoted: freply})
			//fs.unlinkSync(ran)
			
					//if (!isUser)return reply(mess.only.userB)
					
					const diTulis = body.slice(7)
					const panjangKalimat = diTulis.replace(/(\S+\s*){1,1}/g, '$&\n')
					const panjangBaris = panjangKalimat.split('\n').slice(0, 7).join('\n')
					spawn('convert', [
					`buffer`,
					'-gravity', 
					'center', 
					'-fill',
					'#FFFFFF',
					'-stroke',
					'#000000',
					'-strokewidth',
					'5',
					'-font',
					'./lib/agzfnt.ttf',
					'-size',
					'1280x1280',
					'-pointsize',
					'250',
					'-interline-spacing',
					'-7.5',
					'-annotate',
					'+0+250',
					panjangBaris,
					'./temp/ttp.png'
					])
					.on('exit', () => {
						imgbb("6e930040217770526ad1091c102d652a", './temp/ttp.png').then(res => {
							trig = `${res.display_url}`
							trip = getRandom('.png')
							trio = getRandom('.webp')
							exec(`wget ${trig} -O ${trip} && ffmpeg -i ${trip} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${trio}`, (err) => {
								olab = fs.readFileSync(trio)
								hexa.sendMessage(from, olab, sticker, {quoted: freply})
								fs.unlinkSync(trio)
							})
						})
					})
					})
					break

case `${prefix}nasa.gov`:
                    var imgbb = require('imgbb-uploader')
					var path = require('path')
					var { spawn } = require('child_process')
					const ushname1 = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
					const diTulis = `${ushname1}`
					const panjangKalimat = diTulis.replace(/(\S+\s*){1,1}/g, '$&-')
					const panjangBaris = panjangKalimat.split('-').join('-')
					spawn('convert', [
					'./src/hekweb.png',
					'-gravity', 
					'center', 
					'-fill',
					'#FFFFFF',
					'-stroke',
					'#00FFFF',
					'-strokewidth',
					'5',
					'-font',
					'./lib/agzfnt.ttf',
					'-size',
					'1280x1280',
					'-pointsize',
					'80',
					'-interline-spacing',
					'-7.5',
					'-annotate',
					'+0-110',
					panjangBaris,
					'./temp/ttp.png'
					])
					.on('exit', () => {
						imgbb("6e930040217770526ad1091c102d652a", './temp/ttp.png').then(res => {
							trig = `${res.display_url}`
							trip = getRandom('.png')
							trio = getRandom('.webp')
							exec(`wget ${trig} -O ${trip} && ffmpeg -i ${trip}`, (err) => {
								olab = fs.readFileSync(trip)
								hexa.sendMessage(from, olab, MessageType.image, {quoted: freply})
								fs.unlinkSync(trip)
							})
						})
					})
					
					break

//======================================================================================================================================================================================================================================
        default:
			if (isGroup && budy != undefined) {
          	} else{
            console.log(color('[AguzBot]', 'blue'), 'Any Message ? ', color(sender.split('@')[0]))
          	}
          }
    	} catch (e) {
      console.log('Error : %s', color(e, 'red'))
    } 
  })
