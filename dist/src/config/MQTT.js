"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionAndSendMessage = void 0;
var mqtt_1 = require("mqtt");
var enviroments_1 = __importDefault(require("./../config/enviroments"));
var connectionAndSendMessage = function (message, user_id) {
    try {
        var client_1 = mqtt_1.connect(enviroments_1.default.mqtt_url, { protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout: 1000 });
        client_1.on('connect', function () {
            client_1.subscribe(enviroments_1.default.mqtt_topic, function (err) {
                if (err)
                    console.log(err);
            });
        });
        var string = JSON.stringify({ message: message, user_id: user_id });
        client_1.publish(enviroments_1.default.mqtt_topic, string);
        return message;
    }
    catch (_a) {
        var message_1 = _a.message;
        console.log(message_1);
    }
};
exports.connectionAndSendMessage = connectionAndSendMessage;
