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
    VERSION: 'v8.1.0 Global Stable',
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
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/e8f3e419b3dafe9fe8153.jpg' : process.env.ALIVE_LOGO,
    CAPTIONS: process.env.CAPTIONS === undefined ? 'Made By 👩‍🦰Amazone' : process.env.CAPTIONS,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOT_NAME: process.env.BOT_NAME === undefined ? '👩‍🦰Amazone' : process.env.BOT_NAME,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'true' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    TALKING_PINKY: process.env.TALKING_PINKY === undefined ? 'false' : process.env.TALKING_PINKY,
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/d969f3365028c88c7719f.mp4' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.BYE_GIF === undefined ? 'https://telegra.ph/file/794ec421c157f4cb1cd27.mp4' : process.env.BYE_GIF,
    AI_BOT: process.env.AI_BOT === undefined ?'true' : process.env.AI_BOT,
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ?'false' : process.env.INBOX_BLOCK,
    ANTI_BAD: process.env.ANTI_BAD === undefined ?'true' : process.env.ANTIBAD,
    FULL_ALEXA: process.env.FULL_ALEXA === undefined ?'false' : process.env.FULL_ALEXA,
    WHATS_LINK_BLOCK: process.env.WHATS_LINK_BLOCK === undefined ?'false' : process.env.WHATS_LINK_BLOCK,
    MENU_LOGO: process.env.MENU_LOGO === undefined ?'https://telegra.ph/file/e8f3e419b3dafe9fe8153.jpg' : process.env.MENU_LOGO,
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
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
