"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typegoose_1 = require("@typegoose/typegoose");
var Company_1 = require("./Company");
var Filing_1 = require("./Filing");
var enums_1 = require("@pontilion/enums");
var FilingDocument = /** @class */ (function () {
    function FilingDocument() {
    }
    __decorate([
        typegoose_1.prop({ ref: Filing_1["class"], required: true })
    ], FilingDocument.prototype, "filing");
    __decorate([
        typegoose_1.prop({ ref: Company_1["class"], required: true })
    ], FilingDocument.prototype, "company");
    __decorate([
        typegoose_1.prop({ "enum": enums_1.filingDocumentTypes, required: true })
    ], FilingDocument.prototype, "type");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "status");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "statusReason");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "sequenceNumber");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "fileName");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "fileSize");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "fileDescription");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "fileUrl");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "createdAt");
    __decorate([
        typegoose_1.prop()
    ], FilingDocument.prototype, "updatedAt");
    return FilingDocument;
}());
exports["class"] = FilingDocument;
var FilingDocumentModel = typegoose_1.getModelForClass(FilingDocument);
exports.model = FilingDocumentModel;
