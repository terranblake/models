import { Schema, model } from 'mongoose';
import { enums } from '@postilion/utils';

const { exchanges, rssFeeds } = enums;

const companySchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    ticker: {
        type: String,
        required: true,
        lowercase: true
    },
    ref: {
        type: String,
        enum: Object.keys(rssFeeds),
        required: true,
    },
    refId: {
        type: String,
        required: true,
    },
    refIndustryId: {
        type: String,
        required: true,
    },
    fiscalYearEnd: {
        type: Date,
        required: false,
    },
    exchange: {
        type: String,
        enum: exchanges,
        required: false,
        lowercase: true
    },
    state: String,
    country: String,
    address: String,
    stats: {
        lastSyncedFilingsAt: {
            type: Date,
            // default long in the past to make sure
            // that any syncing starts immediately
            default: new Date(1990, 1, 1)
        },
        lastSyncedEarningsAt: {
            type: Date,
            // default long in the past to make sure
            // that any syncing starts immediately
            default: new Date(1990, 1, 1)
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});

companySchema.index({
    ticker: 1,
    exchange: 1,
    sic: 1
}, { unique: true });

const companyModel = model('Company', companySchema);
export default companyModel;