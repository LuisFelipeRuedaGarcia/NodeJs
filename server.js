//importacion de módulo global http
const http = require('http');

function requestlistener(req, res){
//puede ser una function anonima
}
//creacion de servidor web
/* http.createServer(requestlistener); */
/* http.createServer(function (req, res){

}); */
//guardamos el server retornado por createServer() en una constante
const server = http.createServer((req, res)=>{
    const url = req.url;
    /* console.log(req.url, req.method, req.headers); */
    /* procces.exit(); */

//routing

    //enviando respuestas
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head> <title>My first response page</title> </head>');
    res.write('<Body> <h1>Hello FROM NODE JS dudeeeee</h1> </Body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);