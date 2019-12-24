"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typegoose_1 = require("@typegoose/typegoose");
var Filing_1 = require("./Filing");
var Company_1 = require("./Company");
var Link_1 = require("./Link");
var Fact = /** @class */ (function () {
    function Fact() {
    }
    __decorate([
        typegoose_1.prop({ ref: Filing_1["class"], required: true })
    ], Fact.prototype, "filing");
    __decorate([
        typegoose_1.prop({ ref: Company_1["class"], required: true })
    ], Fact.prototype, "company");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Fact.prototype, "name");
    __decorate([
        typegoose_1.prop({ ref: Link_1["class"] })
    ], Fact.prototype, "link");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "segment");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "date");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "itemType");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "balance");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "sign");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "value");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "createdAt");
    __decorate([
        typegoose_1.prop()
    ], Fact.prototype, "updatedAt");
    return Fact;
}());
exports["class"] = Fact;
exports["default"] = Fact;
var FactModel = typegoose_1.getModelForClass(Fact);
exports.model = FactModel;
