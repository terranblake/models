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
var dateTypes = utils_1.enums.dateTypes;
var FactDate = /** @class */ (function () {
    function FactDate() {
    }
    __decorate([
        typegoose_1.prop({ "enum": dateTypes, required: true })
    ], FactDate.prototype, "type");
    __decorate([
        typegoose_1.prop({ "enum": [1, 2, 3, 4], required: false })
    ], FactDate.prototype, "quarter");
    return FactDate;
}());
exports["default"] = FactDate;
var DateRange = /** @class */ (function () {
    function DateRange() {
    }
    return DateRange;
}());
exports.DateRange = DateRange;
