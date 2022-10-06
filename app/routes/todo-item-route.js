const dotEnv = require("dotenv");
const { Router } = require("express");

const todoItemController = require("../controllers/todo-item-controller");

const router = Router();
dotEnv.config();

router.post("", todoItemController.create);
router.get("", todoItemController.list);
router.get("/:id", todoItemController.view);
router.patch("/:id", todoItemController.update);
router.delete("/:id", todoItemController.delete);

module.exports = router;
