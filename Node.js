const { log } = require('console');
const Http = require('http');
const Server = Http.createServer((req, res)=>{
    const Url = req.url;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write(`<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    
    `);
    if(Url==="/users"){
    res.write("<title>My First NodeJs Workshop</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>users</h1>");

    const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
    { id: 3, name: 'Michael Johnson', email: 'michaeljohnson@example.com' },
    { id: 4, name: 'Emily Davis', email: 'emilydavis@example.com' },
    { id: 5, name: 'David Wilson', email: 'davidwilson@example.com' }
  ];
let tableUsers=
`
    <table class="table table-dark table-striped" style="width:40%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Agregar filas a la tabla para cada usuario
  users.forEach(user => {
    tableUsers += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });

  // Cerrar la tabla HTML
  tableUsers += `
      </tbody>
    </table>
  `;

    res.write(tableUsers);  


    return res.end();
    }
    if(Url==="/categories"){
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>categories</h1>");  
        res.write(`<ul class="list-group">
        <li class="list-group-item">Electrónica</li>
        <li class="list-group-item">Ropa</li>
        <li class="list-group-item">Hogar</li>
        <li class="list-group-item">Deportes</li>
        <li class="list-group-item">Juguetes</li>
      </ul>`);
        return res.end();
        }
    if(Url==="/products"){
        
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>products</h1>");  
        res.write();  
        return res.end();
        }
    if(Url==="/employees"){
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>employees</h1>");  
        res.write();  
        return res.end();
        }
    if(Url==="/customers"){
        
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>customers</h1>");  
        res.write('<form action="/create-customer" method="POST">');
        res.write('<label for="name">Name:</label>');
        res.write('<input type="text" id="name" name="name" required><br>');
        res.write('<label for="email">Email:</label>');
        res.write('<input type="email" id="email" name="email" required><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        return res.end();
        }
    if(Url==="/create-customer" && req.method === "POST"){
        let body = "";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            let formData = new URLSearchParams(body);
            let name = formData.get("name");
            let email = formData.get("email");
            console.log("name: "+name);
            console.log("email: "+email);
            return res.end();
        })
    }
    if(Url==="/sales"){
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>sales</h1>");  
        res.write();  
        return res.end();
        }
    if(Url==="/shopping"){
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>shopping</h1>");  
        res.write();  
        return res.end();
        }
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>My First NodeJs Workshop</h1>");  
        res.write(`
        <br>
        <h3>VentArtemis<h3>
        <table class="table table-dark table-striped text-center " style="width:40%">
            <thead>
                <tr>
                    <th>
                        Atributo
                    </th>
                    <th>
                        Valor
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        name
                    </td>
                    <td>
                        ventartemis
                    </td>
                </tr>
                <tr>
                    <td>
                        address
                    </td>
                    <td>
                        123 Main St, City
                    </td>
                </tr>
                <tr>
                    <td>
                        phone
                    </td>
                    <td>
                        123-456-7890
                    </td>
                </tr>
                <tr>
                    <td>
                        email
                    </td>
                    <td>
                        info@ventartemis.com
                    </td>
                </tr>
            </tbody>
            <tfoot>
            <tr>
                <th colspan="2">
                More About Us...
                </th>
            </tr>
    
            </tfoot>
        </table>

        `);  
    
    
        return res.end();
})
Server.listen(7000);
