"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var sign = function (user) {
    var admin = user.role === 'admin';
    return jsonwebtoken_1.default.sign({ userId: user.id, admin: admin }, process.env.APP_SECRET, { expiresIn: '24h' });
};
exports.sign = sign;
//# sourceMappingURL=sign.js.map