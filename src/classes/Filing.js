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
var enums_1 = require("@pontilion/enums");
var Filing = /** @class */ (function () {
    function Filing() {
    }
    __decorate([
        typegoose_1.prop({ ref: Company_1["class"], required: true })
    ], Filing.prototype, "company");
    __decorate([
        typegoose_1.prop({ "enum": enums_1.filingTypes, required: true })
    ], Filing.prototype, "type");
    __decorate([
        typegoose_1.prop({ "enum": enums_1.itemStates, required: true, "default": 'seeded' })
    ], Filing.prototype, "status");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "url");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "name");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Filing.prototype, "period");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Filing.prototype, "fiscalYearEnd");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "publishedAt");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "filedAt");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "acceptedAt");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Filing.prototype, "source");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "refId");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "accessionNumber");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "fileNumber");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "createdAt");
    __decorate([
        typegoose_1.prop()
    ], Filing.prototype, "updatedAt");
    return Filing;
}());
exports["class"] = Filing;
var FilingModel = typegoose_1.getModelForClass(Filing);
exports.model = FilingModel;
