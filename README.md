# ByronCars - API de Aluguel de Carros

API RESTful desenvolvida para gerenciamento de locação de veículos, construída como projeto final do curso de Capacitação Back-End.

## Tecnologias

- **Node.js** + **TypeScript**
- **Express** - Framework web
- **Prisma ORM** - Gerenciamento de banco de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação e autorização
- **Bcrypt.js** - Criptografia de senhas
- **Multer** - Upload de imagens
- **Swagger** - Documentação da API

## Funcionalidades

### Usuários
- ✅ Cadastro de usuários
- ✅ Autenticação com JWT
- ✅ Visualização de perfil
- ✅ Edição de dados
- ✅ Exclusão de conta

### Carros
- ✅ Cadastro de veículos com imagem
- ✅ Listagem de carros disponíveis
- ✅ Busca por nome
- ✅ Edição de informações
- ✅ Exclusão de veículos

## Segurança

- Autenticação JWT com middleware de verificação
- Senhas criptografadas com bcryptjs
- Rotas protegidas por autenticação
