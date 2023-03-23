require('dotenv').config();

let config = {}

config.email = process.env.EMAIL || "bhesaniyarutesh7@gmail.com"
config.password =  process.env.PASSWORD || "tiwkvbzlobrwjqiy"

module.exports = config