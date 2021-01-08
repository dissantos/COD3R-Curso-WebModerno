const schedule = require("node-schedule")

const test = schedule.scheduleJob("*/5 * * * * 2",function(){
    console.log("teste",new Date().getSeconds())
})