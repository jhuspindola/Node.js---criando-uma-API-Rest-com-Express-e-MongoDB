import http from "http";

const PORT = 5500;

const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota dos livros",
    "/autores": "Entrei na rota dos autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor escutando!");
});
