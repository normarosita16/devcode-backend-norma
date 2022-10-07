// Library

const httpStatus = require("http-status-codes");

// UTILS

const response = require("../libs/response-api");

// MODEL

const db = require("../models/index");

const ActivityGroup = db.ActivityGroup;

const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const { title, email } = req.body;

  if (!title) {
    res.status(400).json(response.error(400, `title cannot be null`, false));
  } else {
    ActivityGroup.create({
      title,
      email,
    })

      .then((result) => {
        res.status(httpStatus.OK).json(response.success(httpStatus.OK, result));
      })

      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.list = (req, res) => {
  const { size, page } = req.query;

  const limit = size ? size : 10;

  const offset = page ? page * limit : 0;

  ActivityGroup.findAndCountAll({
    limit,
    offset,
  })

    .then((data) => {
      const payload = {
        content: data.rows,

        totalData: data.count,
      };

      res.status(httpStatus.OK).json(response.success(httpStatus.OK, payload));
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.view = (req, res) => {
  ActivityGroup.findByPk(req.params.id)

    .then((result) => {
      if (!result)
        res
          .status(404)
          .json(
            response.error(
              404,
              `Activity with ID ${req.params.id} Not Found`,
              false
            )
          );

      res.status(httpStatus.OK).json(response.success(httpStatus.OK, result));
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json(response.error(400, `title cannot be null`, false));
  } else {
    ActivityGroup.update(
      {
        title,
      },

      {
        where: { id: req.params.id },
      }
    )

      .then((result) => {
        response.update(req, res).updateResponse(result, req.params.id);
      })

      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  ActivityGroup.destroy({
    where: { id },
  })

    .then((result) => {
      response.delete(req, res).deleteResponse(result, id);
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
