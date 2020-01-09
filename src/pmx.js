const pmx = require("pmx");

pmx.action("log", async function(param, reply) {
  console.log(param, reply);
});

module.exports = pmx;
