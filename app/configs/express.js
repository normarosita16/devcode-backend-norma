const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const glob = require("glob");
const methodOverride = require("method-override");

const scheduler = require("../scheduler");

exports.start = (config) => {
  const app = express();

  app.use(helmet());

  app.use(cors());

  // lets you use HTTP verbs such as PUT or DELETE
  // in places where the client doesn't support it
  app.use(methodOverride());

  // parse body params and attache them to req.body
  app.use(bodyParser.json({ limit: "50mb" }));

  // support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));

  glob
    .sync(`${__dirname}/../controllers/**/route.js`)
    .forEach(async (routeFile) => {
      require(routeFile)(app);
    });

  try {
    app.listen(config.port, () => {
      console.log(`Server start on port ${config.port}`);
    });
  } catch (error) {
    console.log("Error start server:", error);
  }
};
