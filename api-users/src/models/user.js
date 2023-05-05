const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        //Add attributes
    },
    {
        strict: false,
        timestamps: true
    }
);

module.exports = mongoose.model("user", UserSchema);
