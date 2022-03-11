"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This configs all routes
const routes_1 = __importDefault(require("../player/routes"));
function default_1(app) {
    // All the APIs will go here
    app.use("/player", routes_1.default);
}
exports.default = default_1;
//# sourceMappingURL=routes.js.map