"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
require("./config/enviroments");
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config({ path: './src/.env' });
require("./db/connectionMongo");
//Initializer
var app = express_1.default();
//middleware
app
    .use(cors_1.default())
    .use(express_1.default.json())
    .use(morgan_1.default('dev'))
    //routes 
    .use('/api/v1', routes_1.default);
exports.default = app;
