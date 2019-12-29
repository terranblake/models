"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_1 = require("@postilion/utils");
var filingTypes = utils_1.enums.filingTypes, itemStates = utils_1.enums.itemStates;
var filingSchema = new mongoose_1.Schema({
    source: {
        type: String,
        required: true
    },
    company: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    type: {
        type: String,
        "enum": filingTypes,
        required: true
    },
    refId: {
        type: String,
        required: true
    },
    period: {
        type: Date,
        required: true
    },
    fiscalYearEnd: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        "enum": itemStates,
        required: true,
        "default": 'unseeded'
    },
    url: String,
    name: String,
    publishedAt: Date,
    filedAt: Date,
    acceptedAt: Date,
    accessionNumber: String,
    fileNumber: String,
    createdAt: Date,
    updatedAt: Date
});
filingSchema.index({
    company: 1,
    refId: 1
}, {
    unique: true
});
var filingModel = mongoose_1.model('Filing', filingSchema);
exports["default"] = filingModel;
