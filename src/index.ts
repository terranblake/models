// classes
import { default as CompanyClass } from './classes/Company';
import { default as FactClass } from './classes/Fact';
import { default as FactDateClass } from './classes/FactDate';
import { default as FilingClass } from './classes/Filing';
import { default as FilingDocumentClass } from './classes/FilingDocument';
import { default as IdentifierClass } from './classes/Identifier';
import { default as LinkClass } from './classes/Link';

const classes = {
	Company: CompanyClass,
	Fact: FactClass,
	FactDate: FactDateClass,
	Filing: FilingClass,
	FilingDocument: FilingDocumentClass,
	Identifier: IdentifierClass,
	Link: LinkClass
}

// models
const models = {
	// // skip these for now since our exported classes
	// should be compiled into correct models
}

export {
	classes,
	models
}