const os = require('os');

console.log("CPU Architecture" + os.arch());

console.log("Free memory" + os.freemem());

console.log("total memory" + os.totalmem());

// console.log("Network interfaces" + JSON.stringify(os.networkInterfaces()));

console.log("OS default temp dir" + os.tmpdir());

console.log("Endianess" + os.endianness())

console.log("Host Name" + os.hostname())

console.log("OS type" + os.type());

console.log("OS release" + os.release());