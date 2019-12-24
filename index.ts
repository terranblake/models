// classes
// import { default as CompanyClass } from './classes/Company';
// import { default as FactClass } from './classes/Fact';
// import { default as FactDateClass } from './classes/FactDate';
// import { default as FilingClass } from './classes/Filing';
// import { default as FilingDocumentClass } from './classes/FilingDocument';
// import { default as IdentifierClass } from './classes/Identifier';
// import { default as LinkClass } from './classes/Link';

// const classes = {
// 	Company: CompanyClass,
// 	Fact: FactClass,
// 	FactDate: FactDateClass,
// 	Filing: FilingClass,
// 	FilingDocument: FilingDocumentClass,
// 	Identifier: IdentifierClass,
// 	Link: LinkClass
// }

// models
import { default as CompanyModel } from './src/models/Company';
import { default as FactModel } from './src/models/Fact';
import { default as FilingModel } from './src/models/Filing';
import { default as FilingDocumentModel } from './src/models/FilingDocument';
import { default as IdentifierModel } from './src/models/Identifier';
import { default as LinkModel } from './src/models/Link';

export const models = {
	Company: CompanyModel,
	Fact: FactModel,
	Filing: FilingModel,
	FilingDocument: FilingDocumentModel,
	Identifier: IdentifierModel,
	Link: LinkModel
}

// todo: add support for typegoose?