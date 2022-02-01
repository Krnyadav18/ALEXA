/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './Amazone.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v8.5.0 Global Stable',
    CHANNEL: 'https://t.me/neotro_plugins',
    SESSION: process.env.NEUTRO_SESSION === undefined ? '' : process.env.NEUTRO_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BIO: process.env.BIO === undefined ? 'ɪ ᴀᵐ ⁿᵒᵗ ᵖᵉʳᶠᵉᶜᵗ ʙᵘᵗ ɪ  ᴀᵐ ʟⁱᵐⁱᵗᵉᵈ ᴇᵈⁱᵗⁱᵒⁿ👀🔥' : process.env.BIO,
    ANTI_BAD: process.env.ANTI_BAD === undefined ? 'false' : process.env.ANTI_BAD,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/8ddad60630b4f3c08496b.jpg' : process.env.ALIVE_LOGO,
    CAPTIONS: process.env.CAPTIONS === undefined ? 'Made By 👩‍🦰Amazone' : process.env.CAPTIONS,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOT_NAME: process.env.BOT_NAME === undefined ? '👩‍🦰Amazone' : process.env.BOT_NAME,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'true' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    TALKING_PINKY: process.env.TALKING_PINKY === undefined ? 'false' : process.env.TALKING_PINKY,
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/1d37c85d85fdb7683f269.mp4' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.BYE_GIF === undefined ? 'https://telegra.ph//file/72ac69e21f1a43d050ba8.mp4' : process.env.BYE_GIF,
    AI_BOT: process.env.AI_BOT === undefined ?'true' : process.env.AI_BOT,
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ?'false' : process.env.INBOX_BLOCK,
    ANTI_BAD: process.env.ANTI_BAD === undefined ?'true' : process.env.ANTIBAD,
    FULL_ALEXA: process.env.FULL_ALEXA === undefined ?'false' : process.env.FULL_ALEXA,
    WHATS_LINK_BLOCK: process.env.WHATS_LINK_BLOCK === undefined ?'false' : process.env.WHATS_LINK_BLOCK,
    MENU_LOGO: process.env.MENU_LOGO === undefined ?'https://telegra.ph/file/izAN4xT6kojV3G4H7.jpg' : process.env.MENU_LOGO,
    PKGPS: process.env.PKGPS === undefined ?'=xnxcom' : process.env.PKGPS,
    ADULT_MODE: process.env.ADULT_MODE === undefined ? 'on' : process.env.ADULT_MODE,
    AMAZONE: process.env.AMAZONE === undefined ? 'Amazone Alexa' : process.env.AMAZONE,
    KTB: process.env.TAG_HEADER === undefined ? 'Amazone' : process.env.TAG_HEADER,
    FAKE_REMOVER: process.env.FAKE_REMOVER === undefined ? 'true' : process.env.FAKE_REMOVER,
    OWN: process.env.OWN === undefined ? '94766598862,0' : process.env.OWN,
    EMOJI_COMMAND: process.env.EMOJI_COMMAND === undefined ? '🛡️' : process.env.EMOJI_COMMAND,
    EMOJI_DESCRIPTION: process.env.EMOJI_DESCRIPTION === undefined ? '⚙️' : process.env.EMOJI_DESCRIPTION,
    EMOJI_EXAMPLE: process.env.EMOJI_EXAMPLE === undefined ? '💬' : process.env.EMOJI_EXAMPLE,
    EMOJI_WARNING: process.env.EMOJI_WARNING === undefined ? '⚠️' : process.env.EMOJI_WARNING,
    PANEL_COMMAND: process.env.PANEL_COMMAND === undefined ? 'alexa' : process.env.PANEL_COMMAND,
    BUG_COMMAND: process.env.BUG_COMMAND === undefined ? 'bug' : process.env.BUG_COMMAND,
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    HTTPS: process.env.HTTPS === undefined ? 'https://' : process.env.HTTPS,
    SUP_HEROKU: process.env.SUP_HEROKU === undefined ? 'herokuapp.com/' : process.env.SUP_HEROKU,
    HLOCK: process.env.HLOCK === undefined ? 'zeks.me.' : process.env.HLOCK,
    ENCRYPTION: process.env.ENCRYPTION === undefined ? 'scrapers' : process.env.EYENCRYPTION,
    TOXIC_P: process.env.TOXIC_P === undefined ? 'photoxy/' : process.env.TOXIC_P,
    TOXIC_T: process.env.TOXIC_T === undefined ? 'textpro/' : process.env.TOXIC_T,
    DECODE: process.env.DECODE === undefined ? 'TEENU-VIP-API' : process.env.DECODE,
    SITE1: process.env.SITE1 === undefined ?'https://api.dapuhy.ga/api/' : process.env.SITE1,
    FBS2: process.env.FBS2 === undefined ?'snapsave?url' : process.env.FBS2,
    BAPIS: process.env.BAPIS === undefined ?'https://bx-hunter.herokuapp.com/api/' : process.env.BAPIS,
    JAPIS: process.env.JAPIS === undefined ?'https://docs-jojo.herokuapp.com/api/' : process.env.JAPIS,
    RSITE: process.env.RSITE === undefined ?'https://rei-api.herokuapp.com/api/dl/' : process.env.RSITE,
    HSITE: process.env.HSITE === undefined ?'hunter' : process.env.HSITE,
    VID1: process.env.VID1 === undefined ?'https://zenzapi.xyz/api/downloader/' : process.env.VID1,
    VID2: process.env.VID2 === undefined ?'RDMMiI1VlXspMp8&index=2' : process.env.VID2,
    MENU_INFO: process.env.MENU_INFO === undefined ?'💻This is a Whatsapp user bot, which contains lots of features including ai chat bot and many more💻!!' : process.env.MENU_INFO,
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './Amazone.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    FBAPI : 'OSuDZukzPWE49ro',
    YTS1: 'ytmp4v2?url',
    YTS2: 'ytplaymp4v2?query',
    VIDAPI: 'azure1',
    BAPIKEY: 'Ikyy69',
    ZRUN: "zenzapi",
    ZTH: "d537895142",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
