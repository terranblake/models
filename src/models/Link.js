"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_1 = require("@postilion/utils");
var linkSchema = new mongoose_1.Schema({
    filing: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Filing',
        required: true
    },
    company: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        name: String,
        arc: String
    },
    to: {
        name: String,
        prefix: String
    },
    from: {
        name: String,
        prefix: String
    },
    order: Number,
    weight: Number,
    documentType: {
        type: String,
        "enum": utils_1.enums.filingDocumentTypes
    },
    type: String,
    createdAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});
var linkModel = mongoose_1.model('Link', linkSchema);
exports["default"] = linkModel;
