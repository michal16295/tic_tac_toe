"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_ERROR = exports.responseError = exports.responseSuccess = exports.responseWrapper = void 0;
const responseWrapper = (status, data) => {
    return { status, data };
};
exports.responseWrapper = responseWrapper;
// This is a shortcut for success with status 200 and data
const responseSuccess = (data) => {
    return (0, exports.responseWrapper)(200, data);
};
exports.responseSuccess = responseSuccess;
// This is a shortct for error with service setting the status and error message
const responseError = (status, error, data = null) => {
    return (0, exports.responseWrapper)(status, { error, data });
};
exports.responseError = responseError;
// This is used for server error message I.e status 500
exports.SERVER_ERROR = "Server Error";
//# sourceMappingURL=response.js.map