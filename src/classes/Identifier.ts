import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

import { default as Role } from './Role';

import { enums } from '@postilion/utils';

const {
    itemTypes,
    identifierPrefixes,
    filingDocumentTypes,
} = enums;

export default class Identifier {
    @prop({ enum: filingDocumentTypes, required: true })
    documentType: string;
    @prop({ enum: itemTypes, required: true })
    itemType: string;
    
    // extracts the last 2 values from the extended link role
    // to provide context on where the identifier => fact can
    // be found in the actual filing document
    @prop({ ref: Role, required: true })
    role: Ref<Role>;

    @prop()
    extendedLinkRole: string;
    @prop({ enum: identifierPrefixes, required: true })
    prefix: string;
    @prop()
    name: string;
    @prop({ required: true })
    label: string;
    @prop()
    depth: number;
    @prop()
    order: number;
    @prop()
    weight: number;
    @prop()
    parent: string;
    @prop()
    abstract: boolean;
    @prop()
    documentation: string;
    @prop()
    createdAt: Date;
    @prop()
    updatedAt: Date;
    @prop()
    version: string;
}

const IdentifierModel = getModelForClass(Identifier);

export {
    IdentifierModel as model,
    Identifier as class
};