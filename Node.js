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

    if(Url==="/"){
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
    
    
        return res.end()};

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
        const Products = [
            { id: 1, name: 'iPhone 12 Pro', price: 999.99 },
            { id: 2, name: 'Samsung Galaxy S21', price: 899.99 },
            { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
            { id: 4, name: 'Nike Air Max 270', price: 129.99 },
            { id: 5, name: 'Amazon Echo Dot', price: 49.99 }
          ];
           
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>Products</h1>");  
        
        let tableProducts=
`
    <table class="table table-dark table-striped" style="width:40%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Agregar filas a la tabla para cada usuario
  Products.forEach(Product => {
    tableProducts += `
      <tr>
        <td>${Product.id}</td>
        <td>${Product.name}</td>
        <td>${Product.price}</td>
      </tr>
    `;
  });

  // Cerrar la tabla HTML
  tableProducts += `
      </tbody>
    </table>
  `;

    res.write(tableProducts);  
        return res.end();
        }
    if(Url==="/employees"){

        const Employees = [
            { id: 1, name: 'John Smith', position: 'Manager', salary: 50000 },
            { id: 2, name: 'Jane Doe', position: 'Developer', salary: 60000 },
            { id: 3, name: 'Michael Johnson', position: 'Sales Representative', salary: 40000 },
            { id: 4, name: 'Emily Davis', position: 'HR Specialist', salary: 45000 },
            { id: 5, name: 'David Wilson', position: 'Marketing Coordinator', salary: 38000 }
          ];
          
           
        res.write("<title>My First NodeJs Workshop</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>Employees</h1>");  
        
        let tableEmployees=
`
    <table class="table table-dark table-striped" style="width:40%">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Agregar filas a la tabla para cada usuario
  Employees.forEach(Employee => {
    tableEmployees += `
      <tr>
        <td>${Employee.name}</td>
        <td>${Employee.position}</td>
        <td>${Employee.salary}</td>
      </tr>
    `;
  });

  // Cerrar la tabla HTML
  tableEmployees += `
      </tbody>
    </table>
  `;

    res.write(tableEmployees);  
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
            console.log(body);
        })
        req.on("end",()=>{
            let formData = new URLSearchParams(body);
            let name = formData.get("name");
            let email = formData.get("email");
            console.log("name: "+name);
            console.log("email: "+email);
            return res.end();
        })

        res.write("<title>EndpointNoEncontrado</title>");
        res.write("</head>");
        res.write("<body>");
        res.write(`<h1>carga</h1>`);  
        return res.end();
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
        res.write("<title>EndpointNoEncontrado</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>Endpoint No Encontrado</h1>");  
        res.end();

})
Server.listen(7000);