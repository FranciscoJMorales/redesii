const Group = require("../models/group");

const controller = {
  //Add attributes for the controller
};

controller.getGroups = async (req, res, next) => {
  try {
      const groups = await Group.find();
      res.status(200).json(groups)
  } catch (error) {
      res.status(500).json({
          error: error,
      });
  }
};

controller.createGroup =  async (req, res, next) => {
  try {
      const group = req.body;
      const result = await Group.create(group);
      res.status(200).json(result);
  }
  catch (error) {
      res.status(500).json({
          error: error,
      });
  }
}

module.exports = controller;
