# tpde-js
The purpose of this package is just to fetch the site https://thispersondoesnotexist.com and return the image as Buffer().
Example of use:

```js
const { writeFileSync } = require("fs")
const tpde = require("./index.js")

;(async () => {
  writeFileSync("test.png", await tpde())
})()
```
