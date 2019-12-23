"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typegoose_1 = require("@typegoose/typegoose");
var utils_1 = require("@postilion/utils");
var exchanges = utils_1.enums.exchanges, supportedRegulators = utils_1.enums.supportedRegulators;
var CompanyClass = /** @class */ (function () {
    function CompanyClass() {
    }
    __decorate([
        typegoose_1.prop({ required: true })
    ], CompanyClass.prototype, "name");
    __decorate([
        typegoose_1.prop({ required: true })
    ], CompanyClass.prototype, "ticker");
    __decorate([
        typegoose_1.prop({ required: true, "enum": Object.keys(supportedRegulators) })
    ], CompanyClass.prototype, "ref");
    __decorate([
        typegoose_1.prop({ required: true })
    ], CompanyClass.prototype, "refId");
    __decorate([
        typegoose_1.prop({ required: true })
    ], CompanyClass.prototype, "refIndustryId");
    __decorate([
        typegoose_1.prop()
    ], CompanyClass.prototype, "fiscalYearEnd");
    __decorate([
        typegoose_1.prop({ required: true, "enum": exchanges })
    ], CompanyClass.prototype, "exchange");
    __decorate([
        typegoose_1.prop()
    ], CompanyClass.prototype, "state");
    __decorate([
        typegoose_1.prop()
    ], CompanyClass.prototype, "country");
    __decorate([
        typegoose_1.prop()
    ], CompanyClass.prototype, "address");
    __decorate([
        typegoose_1.prop({ required: true })
    ], CompanyClass.prototype, "createdAt");
    __decorate([
        typegoose_1.prop({ required: true })
    ], CompanyClass.prototype, "updatedAt");
    return CompanyClass;
}());
exports["class"] = CompanyClass;
exports["default"] = CompanyClass;
var CompanyModel = typegoose_1.getModelForClass(CompanyClass);
exports.model = CompanyModel;
