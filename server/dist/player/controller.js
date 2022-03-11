"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../game/service"));
const createUser = (req, res) => {
    try {
        console.log(`Creating new player ${req.body.name}`);
        res.json({ id: service_1.default.instance.addPlayer(req.body) });
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
};
const getUsers = (req, res) => {
    try {
        console.log(`Get all users`);
        res.json(service_1.default.instance.getPlayers());
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
};
const getUser = (req, res) => {
    try {
        console.log(`Get user id: ${req.params.id}`);
        res.json(service_1.default.instance.getPlayer(req.params.id));
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
};
exports.default = { createUser, getUsers, getUser };
//# sourceMappingURL=controller.js.map