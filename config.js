const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "SUHAIL_05_33_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzQmlGL0J2WjZGVFdielorMGp6WFdHbU5EOHRpTzFCTGRqVGpjUGtVSnB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtTXhmN0pJWlR5S3c2RVBkSER1b3dnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjNDk1ZjQ0LWZjYTItNGQ3Ny1iNjZjLTFlODBiZjUyOTdjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxNDIsXG4gICAgICA5NixcbiAgICAgIDE4OCxcbiAgICAgIDE0OSxcbiAgICAgIDExNyxcbiAgICAgIDg3LFxuICAgICAgMjMsXG4gICAgICAxMSxcbiAgICAgIDIyOSxcbiAgICAgIDEzNCxcbiAgICAgIDE1MCxcbiAgICAgIDU2LFxuICAgICAgMjUsXG4gICAgICA4NCxcbiAgICAgIDIxNCxcbiAgICAgIDEzMSxcbiAgICAgIDEwMSxcbiAgICAgIDIzNixcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjUsXG4gICAgICAxNDQsXG4gICAgICAyMSxcbiAgICAgIDE3OCxcbiAgICAgIDIwMSxcbiAgICAgIDcwLFxuICAgICAgNjUsXG4gICAgICA4NyxcbiAgICAgIDExMSxcbiAgICAgIDQzLFxuICAgICAgMTUxLFxuICAgICAgMjEyLFxuICAgICAgNSxcbiAgICAgIDE0NixcbiAgICAgIDEyNixcbiAgICAgIDE3OSxcbiAgICAgIDI5LFxuICAgICAgMTg4LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjlIM0FNSFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQwNjkyNDcxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bam4baw4bWI4a2E8J2VuPCdlonwnZadIPCdlofwnZaG8J2WifCdlofwnZaU8J2WniDvvK3vvI5EIC4gWCDvvKLvvYHvvYTvvYLvvY/vvZkg77yR772LIO+9lu+9ie+9he+9l++9kyDDl82cw5cg4bSz4bWS4bWIXCIsXG4gICAgXCJsaWRcIjogXCIxMDA3MDA0NDA3NzI2OTg6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxpMG9NREVMbksrOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnbXBOazA5MlU0Z2UrMFVFNURtRzlGcWRId3JlQXNMNlQyaFh0dzE1a3k0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImYwWGdELzRwOEJGRzAwbE9IdFh1NEhEaDBaTW9KMDFoWXR0MSt3U0tzMkZEcnliRURTMzBST3dJK2hsWWhjVFYxUnNNNjJpanRPQUkxTUcxc2Z1eUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdRSDJlNXNZR3p0SHFkYU12TnR1OUdIK25ZRE9zTStDSHJ2VzlBTEtDbThMcHFDcXE1aGEzNG45T3pFNFNTWVQyNlNiSzQ2N1RyaWdxTGxVcGc1bWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQwNjkyNDcxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0Njg1NTIzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=";
global.aitts_Voice_Id = process.env.AITTS_ID|| "50949692472";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
