import { Schema, model } from 'mongoose';

const linkSchema = new Schema({
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
        required: true,
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
    type: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});

const linkModel = model('Link', linkSchema);
export default linkModel;