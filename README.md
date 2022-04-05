# Space Flight News - API

O projeto consiste em uma API que se atualiza automaticamente, consumindo dados de uma API externa, além de permitir a adição de novos itens na própria base dados

Além de um CRUD básico, a API tem alguns recursos interessantes:
* O código foi escrito respeitando os preceitos do Clean Code e boas práticas
* Através do comando `yarn seed`, o banco de dados é atualizado de acordo com os artigos disponíveis na [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation), evitando os duplicados
* Após o servidor ser iniciado, todos os dias às 9h é executado automaticamente um *cronjob* que roda a função acima. Ou seja: a base de dados se atualiza automaticamente todos os dias
* Os testes utilizam um environment próprio a cada rodada, criando uma tabela específica para testes, coletando os resultados, e excluindo-a logo em seguida

## O projeto possui os seguintes endpoints:

* `GET /` - Retorna um status 200 para sinalizar o funcionando do app
* `GET /articles:page` - Retorna todos os artigos respeitando a paginação (pode ser definida dentro de `src/config/constants.js`) 
* `GET /articles/{id}` - Retorna um artigo específico pelo
* `POST /articles/` - Cria um artigo
* `PUT /articles/{id}` - Altera um artigo 
* `DELETE /articles/{id}` - Deleta um artigo

Mais detalhes de como usar a API estão disponíveis no tópico "Documentação" logo abaixo

## 🛠 Tecnologias utilizadas:
* Node.JS
* Express
* PostgreSQL
* Prisma ORM
* Axios

## ✅ Além disso, também foi utilizado:
* Swagger para a documentação com padrão OpenAPI 3.0
* Docker para containerização do projeto
* Jest para testes de integração nos endpoints

## 🏃🏽‍♀️ Para rodar o projeto:
*Importante: é necessário ter o Docker instalado*

1. Clone o repositório para a sua máquina
2. Execute `docker-compose up` dentro do diretório do projeto
3. Pronto, o projeto estará rodando e acessível em `localhost:3000`
4. Opcional: acesse o endpoint `GET /seed` para alimentar a base de dados

## 📖 Documentação:
* Execute todas as etapas acima
* Acesse no navegador `localhost:3000/api-docs`

## 🧪 Para rodar os testes:
1. Deixe o Docker rodando (importante)
2. Abra uma outra aba do terminal, execute o comando `docker-compose run web bash` no terminal (dentro do diretório da aplicação)
3. Execute `yarn test` 

## 🤔 Melhorias a serem implementadas:
* Usar o recurso nativo fetch que está disponível no Node, substituindo o Axios
* Implementar uma solução para notificar em caso de falhas com o Sentry.io

<br><br>
> This is a challenge by [Coodesh](https://coodesh.com/)
