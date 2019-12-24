"use strict";
// classes
// import { default as CompanyClass } from './classes/Company';
// import { default as FactClass } from './classes/Fact';
// import { default as FactDateClass } from './classes/FactDate';
// import { default as FilingClass } from './classes/Filing';
// import { default as FilingDocumentClass } from './classes/FilingDocument';
// import { default as IdentifierClass } from './classes/Identifier';
// import { default as LinkClass } from './classes/Link';
exports.__esModule = true;
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
var Company_1 = require("./src/models/Company");
exports.Company = Company_1["default"];
var Fact_1 = require("./src/models/Fact");
exports.Fact = Fact_1["default"];
var Filing_1 = require("./src/models/Filing");
exports.Filing = Filing_1["default"];
var FilingDocument_1 = require("./src/models/FilingDocument");
exports.FilingDocument = FilingDocument_1["default"];
var Identifier_1 = require("./src/models/Identifier");
exports.Identifier = Identifier_1["default"];
var Link_1 = require("./src/models/Link");
exports.Link = Link_1["default"];
// todo: add support for typegoose?
