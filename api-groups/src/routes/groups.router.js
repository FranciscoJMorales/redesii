var express = require("express");
var router = express.Router();
var groupsController = require("../controllers/groups.controller");

router.get('/', groupsController.getGroups);
router.post('/', groupsController.createGroup);

module.exports = router;