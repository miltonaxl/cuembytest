"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authMiddleware_1 = require("../../middleware/authMiddleware");
var validation_1 = require("../../validations/validation");
var user_controller_1 = require("../users/user.controller");
var token_conmtroller_1 = require("./token.conmtroller");
var _routerToken = express_1.Router();
/**
 *
 * @swagger
 *
 * /authorization:
 *
 *      post:
 *          summary: Returns session create
 *          requestBody:
 *              description: crete a new session
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *
 *                          properties:
 *                              userName:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                          required:
 *                              - fullName
 *                              - userName
 *                              - password
 *
 *          responses:
 *              200:
 *                  description: create a new session
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      status:
 *                                          type: integer
 *                                      token:
*                                           type: string
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
_routerToken.post('/', __spreadArray([], validation_1.ValidateCreateSession), user_controller_1.getSessionUserController);
/**
 * @swagger
 *
 *  /authorization:
 *
 *      delete:
 *
 *          summary: Returns token delete
 *          security:
 *               - bearerAuth: []
 *          responses:
 *              200:
 *                  description: token delete
 *
 *              401:
 *                $ref: '#/components/responses/UnauthorizedError'
 *
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
_routerToken.delete('/', __spreadArray([authMiddleware_1.authMiddleware], validation_1.ValidateCreateSession), token_conmtroller_1.deleteSessionTokenController);
exports.default = _routerToken;
