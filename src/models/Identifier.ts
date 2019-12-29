import { Schema, model } from 'mongoose';
import { enums } from '@postilion/utils';

const {
    itemTypes,
    identifierPrefixes,
    filingDocumentTypes,
} = enums;

const identifierSchema = new Schema({
    documentType: {
        type: String,
        enum: filingDocumentTypes,
        required: true,
    },
    taxonomy: {
        type: Schema.Types.ObjectId,
        ref: 'Taxonomy',
        required: true
    },
    itemType: {
        type: String,
        enum: itemTypes,
        required: false
    },
    extendedLinkRole: {
        type: String,
        required: false,
    },
    // extracts the last 2 values from the extended link role
    // to provide context on where the identifier => fact can
    // be found in the actual filing document
    role: {
        type: {
            type: String,
            enum: ['statement', 'disclosure'],
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
    prefix: {
        type: String,
        enum: identifierPrefixes,
    },
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    depth: {
        type: Number,
        required: false,
    },
    order: {
        type: Number,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
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
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});

identifierSchema.index({
    name: 1
});

identifierSchema.index({
    parent: 1,
    depth: 1,
});

identifierSchema.index({
    depth: 1,
    name: 1,
    'description.id': 1,
});

const identifierModel = model('Identifier', identifierSchema);
export default identifierModel;