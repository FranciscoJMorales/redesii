const User = require("../models/user");

const controller = {
  //Add attributes for the controller
};

controller.getUsers = async (req, res, next) => {
  try {
      const users = await User.find();
      res.status(200).json(users)
  } catch (error) {
      res.status(500).json({
          error: error,
      });
  }
};

controller.createUser =  async (req, res, next) => {
  try {
      const user = req.body;
      const result = await User.create(user);
      res.status(200).json(result);
  }
  catch (error) {
      res.status(500).json({
          error: error,
      });
  }
}

module.exports = controller;
