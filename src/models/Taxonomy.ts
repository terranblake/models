import { Schema, model } from 'mongoose';

import { enums } from '@postilion/utils';

const taxonomySchema = new Schema({
    // plain text name for taxonomy e.g. us gaap 2017
    name: String,
    source: {
        type: String,
        enum: enums.supported.regulators,
        required: true,
    },
    // which link format does this taxonomy follow
    type: {
        type: String,
        enum: enums.supported.taxonomyLinkTypes,
        required: true,
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
        enum: enums.supported.countries,
    },
    formats: [{
        // where can this format be found at? url or s3 info
        location: String,
        // which type of file should be expected when downloading from this url?
        type: {
            type: String,
            enum: enums.supported.taxonomyFileFormats,
            required: true
        },
    }]
});

taxonomySchema.index(
    {
        source: 1,
        year: 1,
        releaseDate: 1
    },
    {
        unique: true
    }
);

const taxonomyModel = model('Taxonomy', taxonomySchema);
export default taxonomyModel;