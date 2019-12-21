import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

import { class as Company } from './Company';

import { filingTypes, itemStates } from '@pontilion/enums';

class Filing {
  @prop({ ref: Company, required: true })
  company: Ref<Company>;
  @prop({ enum: filingTypes, required: true })
  type: string;
  @prop({ enum: itemStates, required: true, default: 'seeded' })
  status: string;

  @prop()
  url: string;
  @prop()
  name: string;

  @prop({ required: true })
  period: Date;
  @prop({ required: true })
  fiscalYearEnd: Date;
  @prop()
  publishedAt: Date;
  @prop()
  filedAt: Date;
  @prop()
  acceptedAt: Date;

  @prop({ required: true })
  source: string;
  @prop()
  refId: string;
  @prop()
  accessionNumber: string;
  @prop()
  fileNumber: string;

  @prop()
  createdAt: Date;
  @prop()
  updatedAt: Date;
}

const FilingModel = getModelForClass(Filing);

export {
    FilingModel as model,
    Filing as class
};