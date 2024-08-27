const http=require('http');

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end("Hello world");
});

const PORT=4000;
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});