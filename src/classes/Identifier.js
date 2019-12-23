"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typegoose_1 = require("@typegoose/typegoose");
var Role_1 = require("./Role");
var enums_1 = require("@pontilion/enums");
var Identifier = /** @class */ (function () {
    function Identifier() {
    }
    __decorate([
        typegoose_1.prop({ "enum": enums_1.filingDocumentTypes, required: true })
    ], Identifier.prototype, "documentType");
    __decorate([
        typegoose_1.prop({ "enum": enums_1.itemTypes, required: true })
    ], Identifier.prototype, "itemType");
    __decorate([
        typegoose_1.prop({ ref: Role_1.Role, required: true })
    ], Identifier.prototype, "role");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "extendedLinkRole");
    __decorate([
        typegoose_1.prop({ "enum": enums_1.identifierPrefixes, required: true })
    ], Identifier.prototype, "prefix");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "name");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Identifier.prototype, "label");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "depth");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "order");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "weight");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "parent");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "abstract");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "documentation");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "createdAt");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "updatedAt");
    __decorate([
        typegoose_1.prop()
    ], Identifier.prototype, "version");
    return Identifier;
}());
exports["class"] = Identifier;
var IdentifierModel = typegoose_1.getModelForClass(Identifier);
exports.model = IdentifierModel;
