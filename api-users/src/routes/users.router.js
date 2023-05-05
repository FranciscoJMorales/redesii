var express = require("express");
var router = express.Router();
var usersController = require("../controllers/users.controller");

router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);

module.exports = router;