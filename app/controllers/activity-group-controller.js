// Library

const httpStatus = require("http-status-codes");

// UTILS

const response = require("../libs/response-api");

// MODEL

const db = require("../models/index");

const ActivityGroup = db.ActivityGroup;

const Op = db.Sequelize.Op;

exports.create = async (req, res) => {

  const { title } = req.body;

  if (!title) {

    res.status(400).send({ message: "title cannot be null" });

  } else {

    ActivityGroup.create({

      

      title,

      

      

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

  const { activity_group_id, size, page } = req.query;

  const limit = size ? size : 10;

  const offset = page ? page * limit : 0;

  var condition = activity_group_id

    ? { activity_group_id: { [Op.eq]: activity_group_id } }

    : null;

  console.log(activity_group_id);

  TodoItem.findAndCountAll({

    limit,

    offset,

    where: condition,

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

  TodoItem.findByPk(req.params.id)

    .then((result) => {

      res.status(httpStatus.OK).json(response.success(httpStatus.OK, result));

    })

    .catch((err) => {

      res.status(500).send({ message: err.message });

    });

};

exports.update = async (req, res) => {

  const { title } = req.body;

  if (!title) {

    res.status(400).send({ message: "title cannot be null" });

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

  TodoItem.destroy({

    where: { id },

  })

    .then((result) => {

      response.delete(req, res).deleteResponse(result, id);

    })

    .catch((err) => {

      res.status(500).send({ message: err.message });

    });

};
