import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

import { class as Company } from './Company';
import { class as Filing } from './Filing';

import { enums } from '@postilion/utils';

const { filingDocumentTypes } = enums;

export default class FilingDocument {
  @prop({ ref: Filing, required: true })
  filing: Ref<Filing>;
  @prop({ ref: Company, required: true })
  company: Ref<Company>;

  @prop({ enum: filingDocumentTypes, required: true })
  type: string;

  @prop()
  status: string;
  // helper field for qualifying a status. e.g. if downloaded, 
  // there should be a local path or bucket id in this field
  @prop()
  statusReason: string;

  @prop()
  sequenceNumber: string;
  @prop()
  fileName: string;
  fileType: string;
  @prop()
  fileSize: string;
  @prop()
  fileDescription: string;
  @prop()
  fileUrl: string;
  @prop()
  createdAt: Date;
  @prop()
  updatedAt: Date;
}

const FilingDocumentModel = getModelForClass(FilingDocument);

export {
    FilingDocumentModel as model,
    FilingDocument as class
};