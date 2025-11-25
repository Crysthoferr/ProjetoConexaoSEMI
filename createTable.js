import { sql } from './sql.js';

//UUID CRIA UM ID ALEATORIO
async function createTable(){
    try{
        await sql `
            CREATE TABLE IF NOT EXISTS videos(
                id UUID PRIMARY KEY,
                title TEXT NOT NULL,
                descripton TEXT NOT NULL,
                duration INTERGER NOT NULL
            );
        `;
        console.log("Tabela 'videos' criada com sucesso!");
    } catch(err){
        console.log("Erro ao criar a tabela 'videos':",err);
    } finally{
        process.exit();
    }
}

createTable();