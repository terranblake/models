"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_1 = require("@postilion/utils");
var filingDocumentTypes = utils_1.enums.filingDocumentTypes, itemStates = utils_1.enums.itemStates;
var filingDocumentSchema = new mongoose_1.Schema({
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
    type: {
        type: String,
        "enum": filingDocumentTypes,
        required: true
    },
    status: {
        type: String,
        "enum": itemStates,
        required: true
    },
    // helper field for qualifying a status. e.g. if downloaded, 
    // there should be a local path or bucket id in this field
    statusReason: {
        type: String,
        required: false
    },
    sequenceNumber: String,
    fileName: String,
    fileType: String,
    fileSize: String,
    fileDescription: String,
    fileUrl: String,
    createdAt: Date,
    updatedAt: Date
});
filingDocumentSchema.index({
    filing: 1,
    company: 1,
    type: 1
});
var filingDocumentModel = mongoose_1.model('FilingDocument', filingDocumentSchema);
exports["default"] = filingDocumentModel;
