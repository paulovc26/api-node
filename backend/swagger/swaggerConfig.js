const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API do PV",
      version: "1.0.0",
      description: "API Criadas pelo PV para o PV",
      contact: {
        name: "Abacaxi",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
  },
  apis: ["src/routes/*.js"], // Caminho para os seus arquivos de rota onde estão os comentários do Swagger
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerDocs,
};
