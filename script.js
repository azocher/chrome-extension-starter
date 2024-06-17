document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    generateRandomEmoji();
  });

function generateRandomEmoji() {
  const emojiCodes = [
    "&#x1F600;", // 😀 Grinning Face
    "&#x1F604;", // 😄 Grinning Face With Smiling Eyes
    "&#x1F609;", // 😉 Winking Face
    "&#x1F60A;", // 😊 Smiling Face With Smiling Eyes
    "&#x1F60D;", // 💙 Smiling Face With Heart-Eyes
    "&#x1F923;", // 🤣 Rolling on the Floor Laughing
    "&#x1F60E;", // 😎 Smiling Face With Sunglasses
    "&#x1F618;", // 😘 Face Blowing a Kiss
    "&#x1F970;", // 🥰 Smiling Face With Hearts
    "&#x1F62D;", // 😭 Loudly Crying Face
    "&#x1F631;", // 😱 Face Screaming in Fear
    "&#x1F621;", // 😡 Pouting Face
    "&#x1F92F;", // 🤯 Exploding Head
    "&#x1F914;", // 🤔 Thinking Face
    "&#x1F602;", // 😂 Face With Tears of Joy
  ];

  const randomEmoji = emojiCodes[Math.floor(Math.random() * emojiCodes.length)];

  // add random emoji to doc
  const emojiHolder = document.getElementById("emojiHolder");
  emojiHolder.innerHTML = randomEmoji;
}
