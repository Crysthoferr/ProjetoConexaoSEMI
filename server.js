import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { DatabaseError } from "pg-protocol";

// Toda variavel criada com underline é privada
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const server = fastify();

// Server arquivos estáticos da pasta 'public'
await server.register(fastifyStatic, {
    root: join(__dirname, "public"),
    prefix: "/",
});

// Configuração do CORS = manipula os metodos do banco de dados, quais metodos que vamos usar
await server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

// Rotas do server
server.post("/videos", async(request, reply) => {
    const { title, description, duration } = request.body;

    await DatabaseError.create({ title, description, duration });

    return reply.status(201).send();
});

server.get("/videos", async(request, reply) => {
    const search = request.query.search;

    const videos = await database.list(search);

    return videos; // sempre retorna array
});

server.put("/videos/:id", async(request, reply) => {
    const videoId = request.params.id;

    const { title, description, duration } = request.body;

    await database.update(videoId, {title, description, duration});

    return reply.status(204).send();
});

server.delete("videos/:id", async(request, reply) => {
    const videoId = request.params.id;

    await database.delete(videoId);

    return reply.status(204).send();
});

server.listen({
    port: process.env.PORT ?? 3333,
}).then(() => console.log("Servidor rodando em http://localhost:3333"));