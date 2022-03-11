"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const newGame = (req, res) => {
    try {
        console.log(`New Game userId: ${req.body.id}`);
        res.json(service_1.default.instance.newGame(req.body.id));
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
};
const step = (req, res) => {
    try {
        console.log(`Making a step`);
        res.json(service_1.default.instance.stepProc(req.body));
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
};
exports.default = { step, newGame };
//# sourceMappingURL=controller.js.map