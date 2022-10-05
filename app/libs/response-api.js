exports.success = (status_code, data, message = "Success", success = true) => {
  return {
    status_code,
    success,
    message,
    data,
  };
};

exports.error = (
  status_code,
  error_messages = [],
  message = "Failed",
  success = false
) => {
  return {
    status_code,
    success,
    error_type: Array.isArray(error_messages) ? "list" : "string",
    message: !Array.isArray(error_messages) ? error_messages : message,
    error_messages: Array.isArray(error_messages) ? error_messages : [],
  };
};

exports.successPagination = (
  status_code,
  message = "Success",
  success = true,
  data,
  meta,
  link
) => {
  return {
    status_code,
    success,
    message,
    data,
    meta,
    link,
  };
};

exports.delete = (req, res) => {
  const deleteResponse = (result, id, model) => {
    if (result >= 1) {
      res.status(200).json(
        exports.success(200, {
          message: req.__("%s with id %s successfully deleted!", model, id),
        })
      );
    } else {
      res
        .status(404)
        .json(
          exports.error(404, [req.__("%s with id %s not found!", model, id)])
        );
    }
  };

  return { deleteResponse: deleteResponse };
};

exports.update = (req, res) => {
  const updateResponse = (result, id, model) => {
    if (result[0] >= 1) {
      res.status(200).json(
        exports.success(200, {
          message: req.__("%s with id %s successfully updated", model, id),
        })
      );
    } else {
      res
        .status(200)
        .json(exports.success(204, { message: req.__("No data updated") }));
    }
  };

  return { updateResponse: updateResponse };
};
