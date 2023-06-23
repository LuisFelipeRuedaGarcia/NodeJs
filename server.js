//importacion de módulo global http
const http = require('http');
const fs = require('fs');
function requestlistener(req, res){
//puede ser una function anonima
}

//requestlistener 

//creacion de servidor web
/* http.createServer(requestlistener); */
/* http.createServer(function (req, res){

}); */
//guardamos el server retornado por createServer() en una constante
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    /* console.log(req.url, req.method, req.headers); */
    //cerrar o salir del ciclo continuo de eventos
    /* procces.exit(); */

//routing

if(url ==="/"){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head> <title>My first response page</title> </head>');
    res.write('<Body><form action="/message" method="Post"> <input type="text" name="message"><button type="submit" >Send</button></form> </Body>');
    res.write('<html>');
    res.write('</html>');
    return res.end();
}

if(url === "/message" && method === "POST"){
    fs.writeFileSync("message.txt", "duuuuuude");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
}

    //enviando respuestas
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head> <title>My first response page</title> </head>');
    res.write('<Body> <h1>Hello FROM NODE JS dudeeeee</h1> </Body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);