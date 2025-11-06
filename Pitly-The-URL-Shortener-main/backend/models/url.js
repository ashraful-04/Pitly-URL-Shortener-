const mongoose = require('mongoose');

const urlSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        shortId: {
            type: String,
            required: true,
            unique: true
        },
        redirectURL: {
            type: String,
            required: true
        },
        visitHistory: [{ time: { type: Number } }]
    },
    { timestamps: true }
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;