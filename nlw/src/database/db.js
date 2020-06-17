const sqlite3 = require("sqlite3").verbose()
// verbose: mais informacoes no output

const db = new sqlite3.Database("./nlw/src/database/database.db")

module.exports = db