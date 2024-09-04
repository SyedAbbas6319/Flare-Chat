import { randomInt } from "crypto";

function generateSecret(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  const charactersLength = characters.length;
  let secret = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = randomInt(0, charactersLength);
    secret += characters[randomIndex];
  }

  return secret;
}

// Generate a 64-character secret
const jwtSecret = generateSecret(64);
console.log(jwtSecret);
