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
var Company_1 = require("./models/Company");
var Fact_1 = require("./models/Fact");
var Filing_1 = require("./models/Filing");
var FilingDocument_1 = require("./models/FilingDocument");
var Identifier_1 = require("./models/Identifier");
var Link_1 = require("./models/Link");
var models = {
    Company: Company_1["default"],
    Fact: Fact_1["default"],
    Filing: Filing_1["default"],
    FilingDocument: FilingDocument_1["default"],
    Identifier: Identifier_1["default"],
    Link: Link_1["default"]
};
// todo: add support for typegoose?
exports["default"] = models;
