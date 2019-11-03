"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFields = function (body, wantedFields, required) {
    var temp = {};
    wantedFields.forEach(function (f) {
        temp[f] = body[f];
    });
    if (required && required.length) {
        var allIn = required.every(function (r) { return !!temp[r]; });
        if (!allIn) {
            return null;
        }
    }
    return temp;
};
//# sourceMappingURL=checkFields.js.map