"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Winner = exports.Board = void 0;
class Board {
    constructor() {
        this.position = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
    }
}
exports.Board = Board;
var Winner;
(function (Winner) {
    Winner[Winner["none"] = 0] = "none";
    Winner[Winner["player"] = 1] = "player";
    Winner[Winner["computer"] = 2] = "computer";
    Winner[Winner["tie"] = 3] = "tie";
})(Winner = exports.Winner || (exports.Winner = {}));
//# sourceMappingURL=model.js.map