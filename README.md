# ProjetoConexaoSEMI

## 🧪 Sobre  
ProjetoConexaoSEMI é uma API backend construída com Fastify + PostgreSQL (usando Neon como serviço de banco). O projeto foi desenvolvido durante o curso Técnico de Desenvolvimento de Sistemas (SENAI) para prática de conexão com banco de dados, criação de tabelas e manipulação de registros por meio de endpoints HTTP.

A API permite cadastrar vídeos com título, descrição e duração — sem arquivos de mídia. Esses dados servem para alimentar dinamicamente cards no front-end usado nas aulas.

## ✅ Funcionalidades  
- Conexão com banco PostgreSQL usando Node.js  
- Cadastro de vídeos no banco (título, descrição, duração)  
- Leitura de vídeos cadastrados  
- Script para criação da tabela (`createTable.js`)  
- API simples usando Fastify (`server.js`)  

## 📡 Endpoints

### POST `/videos`  
Cadastra um novo vídeo.  
Corpo esperado:

json
{
  "titulo": "Exemplo",
  "descricao": "Descrição do vídeo",
  "duracao": 120
}

### GET `/videos`  
Retorna todos os vídeos cadastrados no banco.

## 🛠️ Tecnologias  
- Node.js  
- Fastify  
- PostgreSQL (Neon)  
- Javascript  

## 🚀 Como rodar localmente

### Pré-requisitos  
- Node.js instalado  
- Banco PostgreSQL ativo (local ou Neon)  
- URL de conexão configurada em `databasePostgres.js` ou via variável de ambiente

### Passos  
bash
# clone o repositório  
git clone https://github.com/Crysthoferr/ProjetoConexaoSEMI.git  

# entre na pasta do projeto  
cd ProjetoConexaoSEMI  

# instale as dependências  
npm install  

# (opcional) criar a tabela no banco  
node createTable.js  

# iniciar o servidor  
node server.js  
