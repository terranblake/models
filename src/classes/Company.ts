import { prop, getModelForClass } from '@typegoose/typegoose';
import { enums } from '@postilion/utils';

const { exchanges, rssFeeds } = enums;

export default class CompanyClass {
    @prop({ required: true })
    public name: string;
    @prop({ required: true })
    public ticker: string;

    @prop({ required: true, enum: Object.keys(rssFeeds) })
    public ref: string;
    @prop({ required: true })
    public refId: string;
    @prop({ required: true })
    public refIndustryId: string;

    @prop()
    public fiscalYearEnd: Date;

    @prop({ required: true, enum: exchanges })
    public exchange: string;

    @prop()
    public state: string;
    @prop()
    public country: string;
    @prop()
    public address: string;
    
    @prop({ required: true })
    public createdAt: Date;
    @prop({ required: true })
    public updatedAt: Date;
}

const CompanyModel = getModelForClass(CompanyClass);

export {
    CompanyModel as model,
    CompanyClass as class
};