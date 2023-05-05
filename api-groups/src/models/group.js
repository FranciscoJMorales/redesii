const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema(
    {
        //Add attributes
    },
    {
        strict: false,
        timestamps: true
    }
);

module.exports = mongoose.model("group", GroupSchema);
