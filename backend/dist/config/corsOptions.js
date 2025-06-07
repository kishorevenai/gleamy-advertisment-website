"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const allowedCors_js_1 = require("./allowedCors.js");
exports.corsOptions = {
    origin: (origin, callback) => {
        if (allowedCors_js_1.allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};
