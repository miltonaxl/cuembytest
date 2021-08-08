"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var authMiddleware = function (req, res, next) {
    try {
        var api_key = req.headers['x_api_key'];
        if (typeof api_key === "undefined" ||
            api_key === null ||
            api_key.length < 1 ||
            api_key !== process.env.X_API_KEY)
            throw Error('Error authorization. Please verify your key.');
        next();
    }
    catch (_a) {
        var message = _a.message;
        return res.status(401).json({
            status: 401,
            message: message
        });
    }
};
exports.authMiddleware = authMiddleware;
