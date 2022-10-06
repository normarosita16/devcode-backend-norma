const dotEnv = require("dotenv");
const { Router } = require("express");

const activityGroupController = require("../controllers/activity-group-controller");

const router = Router();
dotEnv.config();

router.post("", activityGroupController.create);
router.get("", activityGroupController.list);
router.get("/:id", activityGroupController.view);
router.patch("/:id", activityGroupController.update);
router.delete("/:id", activityGroupController.delete);

module.exports = router;
