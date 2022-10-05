// Service
const Controller = require("./controller");

// Base Path
const basePath = "/todo-items";

module.exports = (app) => {
  app.post(`${basePath}`, Controller.create);
  app.get(`${basePath}`, Controller.list);
  app.get(`${basePath}/:id`, Controller.view);
  app.put(`${basePath}/:id`, Controller.update);
  app.delete(`${basePath}/:id`, Controller.delete);
};
