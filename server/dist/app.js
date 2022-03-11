"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./start/middlewares");
const routes_1 = __importDefault(require("./start/routes"));
const app = (0, express_1.default)();
const port = 8080;
(0, middlewares_1.configure)(app);
(0, routes_1.default)(app);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map