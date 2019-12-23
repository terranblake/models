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
var LinkMetadata_1 = require("./LinkMetadata");
var Link = /** @class */ (function () {
    function Link() {
    }
    __decorate([
        typegoose_1.prop({ ref: Filing_1["class"], required: true })
    ], Link.prototype, "filing");
    __decorate([
        typegoose_1.prop({ ref: Company_1["class"], required: true })
    ], Link.prototype, "company");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Link.prototype, "name");
    __decorate([
        typegoose_1.prop({ ref: LinkMetadata_1.LinkRole, required: true })
    ], Link.prototype, "role");
    __decorate([
        typegoose_1.prop({ ref: LinkMetadata_1.Linkage, required: true })
    ], Link.prototype, "to");
    __decorate([
        typegoose_1.prop({ ref: LinkMetadata_1.Linkage, required: true })
    ], Link.prototype, "from");
    return Link;
}());
exports["class"] = Link;
;
var LinkModel = typegoose_1.getModelForClass(Link);
exports.model = LinkModel;
