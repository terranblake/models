"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_1 = require("@postilion/utils");
var dateTypes = utils_1.enums.dateTypes;
var factSchema = new mongoose_1.Schema({
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
    prefix: {
        type: String,
        required: true
    },
    context: {
        type: String
    },
    // defines if the fact was created as the result of a link
    // being used (calculation arcs)
    link: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Link'
    },
    // used for facts which have a segment element defined in the
    // context that the fact references
    segment: [{
            // the dimension property of the explicitMember element
            dimension: {
                prefix: {
                    type: String
                },
                name: String
            },
            // the value property of the explicitMember element
            value: {
                prefix: {
                    type: String
                },
                name: String
            }
        }],
    date: {
        type: {
            type: String,
            "enum": dateTypes
        },
        quarter: {
            type: Number,
            "enum": [1, 2, 3, 4]
        },
        year: {
            type: Number
        },
        value: {
            type: mongoose_1.Schema.Types.Mixed
        }
    },
    unit: {
        type: String
    },
    calculation: [{
            prefix: String,
            name: String
        }],
    itemType: {
        type: String
    },
    balance: String,
    sign: Boolean,
    value: String,
    createdAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});
var factModel = mongoose_1.model('Fact', factSchema);
exports["default"] = factModel;
