import { Schema, model } from 'mongoose';
import { enums } from '@postilion/utils';

const { filingDocumentTypes, itemStates } = enums;

const filingDocumentSchema = new Schema({
  filing: {
    type: Schema.Types.ObjectId,
    ref: 'Filing',
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  type: {
    type: String,
    enum: filingDocumentTypes,
    required: true,
  },
  status: {
    type: String,
    enum: itemStates,
    required: true,
    default: 'unseeded',
  },
  // helper field for qualifying a status. e.g. if downloaded, 
  // there should be a local path or bucket id in this field
  statusReason: {
    type: String,
    required: false,
  },
  sequenceNumber: String,
  fileName: String,
  fileType: String,
  fileSize: String,
  fileDescription: String,
  fileUrl: String,
  createdAt: Date,
  updatedAt: Date,
});

filingDocumentSchema.index({
  filing: 1,
  company: 1,
  type: 1
});

const filingDocumentModel = model('FilingDocument', filingDocumentSchema)
export default filingDocumentModel;