"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_1 = require("@postilion/utils");
var taxonomySchema = new mongoose_1.Schema({
    // plain text name for taxonomy e.g. us gaap 2017
    name: String,
    source: {
        type: String,
        "enum": utils_1.enums.supported.regulators,
        required: true
    },
    // which link format does this taxonomy follow
    type: {
        type: String,
        "enum": utils_1.enums.supported.taxonomyLinkTypes,
        required: true
    },
    // what is the primary prefix for this tree?
    prefix: String,
    // year that this taxonomy is for
    year: Number,
    // when was this taxonomy released/accepted?
    releaseDate: Date,
    // where does this taxonomy apply?
    country: {
        type: String,
        "enum": utils_1.enums.supported.countries
    },
    formats: [{
            // where can this format be found at? url or s3 info
            location: String,
            // which type of file should be expected when downloading from this url?
            type: {
                type: String,
                "enum": utils_1.enums.supported.taxonomyFileFormats,
                required: true
            }
        }]
});
var taxonomyModel = mongoose_1.model('Taxonomy', taxonomySchema);
exports["default"] = taxonomyModel;
