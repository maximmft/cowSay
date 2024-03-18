const userInformation = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Hi, my name is ${userInformation.firstname} and I'm from ${userInformation.campus}`),
    e : "xX",
    T : "U ",
}));