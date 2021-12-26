const { Client } = require("eris")
const client = new Client("ODU2MjQzNzIwMjczNjU3ODU5.YM-NGw.n2xicqkLcYbCBk7ceZSr6zIh-ks", {
    allowedMentions: {
        repliedUser: true,
        roles: false,
        everyone: false
    },
    intents: [
        'all'
    ]
})

client.on("ready", () => {
    console.log('Ready!')

})
client.connect()

client.on("messageCreate", async ctx => {
    ctx.member.removeRole()
})