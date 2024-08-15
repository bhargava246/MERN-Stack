const http = require('http');
const PORT = 3021;
const HOSTNAME = 'LocalHost';
const server = http.createServer((req,res)=>{
//Home Page
//About Page
//Product Page
//Rest.....>Error

if(req.url == '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("Welcome to server made by himanshu bhargava");
} else if(req.url == '/about'){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("About Page");

} else if(req.url == '/contact'){
    res.statusCode = 500;
    res.setHeader('Content-Type','text/plain');
    res.end("Contact Page");
} else if(req.url == '/product'){
  
    const options = {
        hostname: 'fakestoreapi.com',
        path: '/products/1',
        method: 'GET'
    }
    
    const apiReq = http.request(options,(apiRes) => {
        apiRes.on("data",(data)=>{
        res.statusCode = 500;
        res.setHeader('Content-Type','application/json');
        res.end(data.toString());
     })
    });
    apiReq.on("error", (e) => {
        console.log(e);
    });
    
    apiReq.end();
    
    
} else{
    res.statusCode = 500;
    res.setHeader('Content-Type','text/plain');
    res.end("Contact Page");
} 
});

server.listen(PORT,() =>{ 
    console.log(`Server running at ${HOSTNAME}:${PORT} `);
})
