const http = require("https")

const tpde = async () => {
  try {
    const res = await new Promise((resolve, reject) => {
      const options = {
        method: "GET",
        hostname: "thispersondoesnotexist.com",
        path: "/image",
      }

      const req = http.request(options, (res) => {
        const chunks = []

        res.on("data", (chunk) => {
          chunks.push(chunk)
        })

        res.on("end", () => {
          const body = Buffer.concat(chunks)
          resolve(body)
        })
        res.on("error", (err) => {
          reject(err)
        })
      })

      req.end()
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

module.exports = tpde
