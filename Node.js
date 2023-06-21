const Http = require('http');
const Server = Http.createServer((req, res)=>{
    const Url = req.url;

    if(Url==="/users"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<tittle>My First NodeJs Workshop</tittle>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>users</h1>");  
    res.write("</body>");
    res.write("</html>");
    res.end();
    }
    if(Url==="/categories"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<tittle>My First NodeJs Workshop</tittle>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>categories</h1>");  
        res.write("</body>");
        res.write("</html>");
        res.end();
        }
    if(Url==="/products"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<tittle>My First NodeJs Workshop</tittle>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>products</h1>");  
        res.write("</body>");
        res.write("</html>");
        res.end();
        }
    if(Url==="/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<tittle>My First NodeJs Workshop</tittle>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1Home</h1>");  
        res.write("</body>");
        res.write("</html>");
        res.end();
        }
    if(Url==="/employees"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<tittle>My First NodeJs Workshop</tittle>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>employees</h1>");  
        res.write("</body>");
        res.write("</html>");
        res.end();
        }
    if(Url==="/customers"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<tittle>My First NodeJs Workshop</tittle>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>customers</h1>");  
        res.write("</body>");
        res.write("</html>");
        res.end();
        }
    if(Url==="/shopping"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<tittle>My First NodeJs Workshop</tittle>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>shopping</h1>");  
        res.write("</body>");
        res.write("</html>");
        res.end();
        }

    
})
Server.listen(7000);
