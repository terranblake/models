import { Schema, model } from 'mongoose';
import { enums } from '@postilion/utils';

const { dateTypes } = enums;

const factSchema = new Schema({
    filing: {
        type: Schema.Types.ObjectId,
        ref: 'Filing',
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
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
        type: String,
    },
    // defines if the fact was created as the result of a link
    // being used (calculation arcs)
    link: {
        type: Schema.Types.ObjectId,
        ref: 'Link',
    },
    // used for facts which have a segment element defined in the
    // context that the fact references
    segment: [{
        // the dimension property of the explicitMember element
        dimension: {
            prefix: {
                type: String,
                // enum: identifierPrefixes
            },
            name: String
        },
        // the value property of the explicitMember element
        value: {
            prefix: {
                type: String,
                // enum: identifierPrefixes
            },
            name: String
        }
    }],
    date: {
        type: {
            type: String,
            enum: dateTypes,
        },
        quarter: {
            type: Number,
            enum: [1, 2, 3, 4],
        },
        year: {
            type: String,
        },
        value: {
            type: Schema.Types.Mixed,
        },
    },
    unit: {
        type: String,
    },
    calculation: [{
        prefix: String,
        name: String
    }],
    itemType: {
        type: String,
        // enum: itemTypes,
    },
    balance: String,
    sign: Boolean,
    value: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});

const factModel = model('Fact', factSchema);
export default factModel;