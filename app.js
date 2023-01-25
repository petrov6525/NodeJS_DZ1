const http=require("http");





http.createServer((req,res)=>{
    var adr = 'http://localhost:{your port}/default.htm?year=2017&month=february';

    const url=require("url");
    let MyUrl=url.parse(req.url,true);
    if(req.url=="/"){
        res.end("Write in search string some URL. For example ' "+adr+" '");
        
    }
    else{
        //res.end(MyUrl.host+"\n"+MyUrl.path+"\n"+MyUrl.query);
        let line="Host: "+req.headers.host+"\n"
        +"Path: "+MyUrl.href+"\n"
        +"Query: "+MyUrl.search;


        res.end(line);
    }
    
}).listen(3000,"localhost",()=>{
    console.log("Server is listening...");
});