"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const express_useragent_1 = __importDefault(require("express-useragent"));
// This will configure all middlewares
const configure = (app) => {
    app.use((0, compression_1.default)());
    app.use(express_useragent_1.default.express());
    app.set("view engine", "ejs");
    app.use((0, cors_1.default)({
        origin: true,
        credentials: true,
    }));
    app.set("trust proxy", true);
    app.use(express_1.default.json());
};
exports.configure = configure;
//# sourceMappingURL=middlewares.js.map