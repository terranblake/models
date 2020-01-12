"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_1 = require("@postilion/utils");
var itemTypes = utils_1.enums.itemTypes, identifierPrefixes = utils_1.enums.identifierPrefixes, filingDocumentTypes = utils_1.enums.filingDocumentTypes;
var identifierSchema = new mongoose_1.Schema({
    documentType: {
        type: String,
        "enum": filingDocumentTypes,
        required: true
    },
    taxonomy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Taxonomy',
        required: true
    },
    itemType: {
        type: String,
        "enum": itemTypes,
        required: false
    },
    extendedLinkRole: {
        type: String,
        required: false
    },
    // extracts the last 2 values from the extended link role
    // to provide context on where the identifier => fact can
    // be found in the actual filing document
    role: {
        type: {
            type: String,
            "enum": ['statement', 'disclosure'],
            required: false
        },
        // todo: get list of roles that we actually want
        // to consume and move to common-enums to be
        // used when creating facts using identifiers
        name: String,
        id: String
    },
    // definition: {
    //     id: {
    //         type: String,
    //     },
    //     flag: {
    //         type: String,
    //         enum: identifierDocumentFlags,
    //     },
    //     context: String,
    // },
    prefix: String,
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    depth: {
        type: Number,
        required: false
    },
    order: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    parent: {
        type: String,
        require: false
    },
    abstract: Boolean,
    documentation: String,
    version: String,
    createdAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});
identifierSchema.index({
    name: 1
});
identifierSchema.index({
    parent: 1,
    depth: 1
});
identifierSchema.index({
    depth: 1,
    name: 1,
    'description.id': 1
});
var identifierModel = mongoose_1.model('Identifier', identifierSchema);
exports["default"] = identifierModel;
