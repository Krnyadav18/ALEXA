const Amazon = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('amazone');
const tk = Config.WORKTYPE == 'public' ? false : true

Amazon.addCommand({pattern: 'help', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

*╭─「ASTA BOT」*
  │Prefix "-"
 ├─────────●●►
 │🌼𝐇𝐞𝐲,  `+wish+`
 │𝐓𝐢𝐦𝐞⌚: `+time+`
 │📡𝐒𝐞𝐫𝐯𝐞𝐫: Digital Ocean
 │💻𝐅𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤: Nodejs
 │🛰️️𝐇𝐨𝐬𝐭𝐞𝐝 𝐨𝐧 𝐇𝐞𝐫𝐨𝐤𝐮
 ╰──────────●●►
 ╭──────────●●➢
❏│🤖𝘽𝙊𝙏 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎🤖❐
 │   ───────
 │➢-owner [gives owner no.]
 │➢-alive [Check bot status]
 │➢-bot [chat with bot]
 ╰───────────●●➢
 ╭───────────●●➢
 ❏│🖼️𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎🖼️❐
 │      ───────
 │➢-attp [text ]
 │➢-sticker
 │➢-toimg
 │➢-stk
 ╰────────────●●➢
 ╭────────────●●➢
 ❏│👑𝙍𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎👑❐
 │  ─────────
 │➢-anime (anime name)
 │➢-rmeme  (sends random meme)
 │➢-quote (text)
 │➢-aniquote (text)
 │➢-joke (text)
 │
 │ᵀʰᵃⁿᵏˢ ᵗᵒ ᴹᵒʰᵈ ˢᵃᵇᵃʰᵃᵗ
 ╰────────────●●➢
 ╭────────────●●➢
 ❏│✳️𝙏𝙀𝙓𝙏 𝙏𝙊 𝙄𝙈𝙂✳️❐
 │   ───────
 │➢-textimg 
 │➢-prologo [your text]
 │➢-ffpack [Free fire Logo pack]
 │➢-ttp [ text ]
 │➢-trumpsay [ text ]
 │➢-changesay [ text ]
 │➢-animesay [ text ]
 │➢-meme 
 ╰────────────●●➢
 ╭────────────●●➢
 ❏│📩𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎📩❐
 │      ────────
 │➢-video [ Yt Link]
 │➢.pvideo [video link]
 │➢-play [yt link ]
 │➢-song  [ song name ]
 │➢-psong[ song name ]
 │➢-img [name]
 │➢-twt [twitter video Link]
 ╰────────────●●➢
 ╭────────────●●➢
 ❏│🐉𝙎𝙀𝘼𝙍𝘾𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎🐉❐
 │     ──────────
 │➢-yt [ topic ]
 │➢-wiki [text ]
 │➢-movie [ movie name ]
 │➢-github [ name ]
 │➢-show [tv series ]
 │➢-weather [ city ]
 │
 ╰────────────●●➢
 ╭────────────●●➢
 ❏│🧩𝙁𝙪𝙣 𝙖𝙣𝙙 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧🧩❐
 │  ─────────
 │➢-aniwall
 │➢-wp
 │➢-bts
 │➢-blackpink
 │➢-loli
 │➢-megumin
 │➢-waifu
 │➢-cat
 │➢-car
 │➢-qr
 │➢-emoji
 │➢-compliment
 │➢-zodiac
 ╰───────────●●➢
 ╭────────────●●➢
 ❏│👑𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎👑❐
 │  ─────────
 │➢-rename [change Group name]
 │➢-setrules    [check rules]
 │➢-tagadmin 
 │➢-clear
 │➢-report
 │➢-tagall  
 │➢-ban [ for owner ]
 │➢-add [ for owner ]
 │➢-promote [ for owner ]
 │➢-demote [ for owner ]
 │➢-invite [ for owner ]
 │➢-leave [ for owner ]
 │➢-welcome 
 │➢-goodbye
 │➢-Admin [ for owner ]
 │➢-update [check Update]
 │➢-update now [get update ]
 │➢-restart
 ╰───────────●●➢
 ╭───────────●●➢
 ❏│📺𝙈𝙀𝘿𝙄𝘼 𝙏𝙊𝙊𝙇𝙎📺❐
 │      ───────
 │➢-xmedia [25+ tools]
 │➢-mp3 [Video To mp3]
 │➢-removebg
 │➢-voicy
 │➢-toimg
 │➢-unvoice [mp3 to voice]
 ╰───────────●●➢
 ╭───────────●●➢
 ❏│🕹️𝙈𝙊𝙍𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿🕹️❐
 │  ────────
 │➢-brdmore
 │➢-fakeid
 │➢-dogemenu
 │➢-tts
 │➢-ss [link ]
 │➢-short { link }
 │➢-trt { en si}
 │➢-covid  [ covid IN]
 ╰────────────●●➢
 ╭───────────●●➢
 ❏│🔨𝘽𝙊𝙏 𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝙎🔨❐
 │ ──Owner only──
 │➢-pp [set profile pic]
 │➢-autobio on/off [change bio ]
 │➢-whatsblock on [WA link Block]
 │➢-inblock on /off 
 │➢-work public /private
 │➢-setrules
 ╰───────────●●➢
*📝Note Some api based │commands are not working after latest whatsapp update* 
 

`}) 

 }));
