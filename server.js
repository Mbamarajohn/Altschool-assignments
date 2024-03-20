const http =require('http');


const PORT = 3232;

const requestHandler = (req,res)=>{
    res.setHeader("Content-Type", "application/json");

    if(req.url === '/books'&& req.method === 'GET'){
        res.writeHead(200);
        res.end('this is a route that gets all books');
    };
    if(req.url === '/books'&& req.method === 'PUT'){
        res.writeHead(200);
        res.end('this is a route that updates books');
    };
    if(req.url === '/books'&& req.method === 'DELETE'){
        res.writeHead(200);
        res.end('this is a route that deletes new books');
    };
    if(req.url === '/books/authors'&& req.method === 'GET'){
        res.writeHead(200);
        res.end('this is a  route that gets all books with their authors');
    };
    if(req.url === '/books/authors'&& req.method === 'POST'){
        res.writeHead(200);
        res.end('this is a route that adds new books');
    };
    if(req.url === '/books/authors'&& req.method === 'PUT'){
        res.writeHead(200);
        res.end('this is a  route that updates books');
    };
}

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`sever successfully runing at http://localhost:${PORT}`)
});