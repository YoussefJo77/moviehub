const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },

        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "movie",
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Favorite = mongoose.model("favorite", favoriteSchema);

module.exports = Favorite;