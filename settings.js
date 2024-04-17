const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};
 

// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = 'SHAGEE BOY';
global.owner = ['94717518710','94717518710'];
global.premium = ['94713466375','94713466375'];
global.packname = '𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢';
global.author = 'SHAGEE MD';
global.caption = ' 👨‍💻 SHAGEE MD V1👨‍💻';
global.sessionName = 'session';
global.prefa = ['!', '.'];
global.sp = '✪';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`මෙම කණ්ඩායම විධාන භාවිතා කිරීම *තහනම්* වේ`',
    success: '`✓ Success`',
    admin: '`මෙම විශේෂාංගය කණ්ඩායම් පරිපාලකයින් සඳහා පමණි`',
    botAdmin: '`මම ඇඩ්මින් කෙනෙක් නෙවෙයි!`',
    owner: '`ඔයා මගේ අයිතිකාරයෙක් නෙවෙයි.`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
};
global.link = 'https://youtube.com/@gamingewingyt6216?si=IHmBhi2R69ao6jcG'
global.linkGroup = 'https://chat.whatsapp.com/JNAASTo0fMo3N4luk8arve'  
global.logo = process.env.LOGO || "https://telegra.ph/file/0bc5c54c51edf341a279b.jpg",        
global.ANTI_BOT = process.env.ANTI_BOT || "false",        
global.typemenu = 'v1' // 'v1' => 'v5'
global.onlygroup = false // onlygroup
global.onlypc = false
global.AUTO_ABOUT = false
global.limitawal = {
    premium: 'Infinity',
    free: 10
};

// Add anticall option
global.config = {
    options: {
        antiCall: true, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
