const { writeFileSync } = require("fs")
const tpde = require("./index.js")

;(async () => {
  writeFileSync("test.png", await tpde())
})()
