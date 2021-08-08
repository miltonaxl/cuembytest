"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authMiddleware_1 = require("../../middleware/authMiddleware");
var message_controller_1 = require("./message.controller");
var _routerMessage = express_1.Router();
/**
 *
 * @swagger
 *
 * /messages/send:
 *
 *      post:
 *          summary: Returns send message mqtt
 *          security:
 *             - bearerAuth: []
 *          requestBody:
 *              description: send message mqtt
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *
 *                          properties:
 *                              message:
 *                                  type: string
 *                          required:
 *                              - message
 *
 *          responses:
 *              200:
 *                  description: send message mqtt
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *
 *              400:
 *                  description: Bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Error'
 *              403:
 *                  description: Forbidden
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Forbidden'
 *
 *
 *
 */
_routerMessage.post('/send', [authMiddleware_1.authMiddleware], message_controller_1.sendMessageMQTT);
exports.default = _routerMessage;
