  const http = require('http');

 const server = http.createServer( (req,res)=> {
if(req.url == '/'){
    res.write('<h1>Hello,Node.js!</h>');
}
else if(req.url == '/about'){
    res.write('<h1> About page!<h/>');
}
res.end();

  });

  server.listen(5001);
  console.log("server is running on port 5000")
