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
var user_controller_1 = require("./user.controller");
var _router = express_1.Router();
//error contents
/**
 * @swagger
 *
 * components:
 *      schemas:
 *          Error:
 *              type: object
 *              properties:
 *                  status:
 *                      type: integer
 *                  msg:
 *                      type: object
 *          Forbidden:
 *               description: description about problem
 *               content:
 *                  type: string
 */
/**
 *
 * @swagger
 *
 * components:
 *      responses:
 *            UnauthorizedError:
 *               description: Access token is missing or invalid
 *
 *
 *
 *
 */
/**
 *
 * @swagger
 *
 * /users:
 *
 *      post:
 *          summary: Returns create a user
 *          requestBody:
 *              description: add new user
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *
 *                          properties:
 *                              fullName:
 *                                  type: string
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
 *              201:
 *                  description: created one new user
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              '400':
 *                  description: Bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Error'
 *
 *
 *
 */
_router.post('/', __spreadArray([], validation_1.validateUser), user_controller_1.createUserController);
/**
 * @swagger
 *
 *  /users/active:
 *
 *      patch:
 *
 *          summary: Returns if user was active
 *          security:
 *               - bearerAuth: []
 *          responses:
 *              200:
 *                  description: user was activated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
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
_router.patch('/active', [authMiddleware_1.authMiddleware], user_controller_1.activeUserController);
/**
 * @swagger
 *
 *  /users/delete:
 *
 *      delete:
 *
 *          summary: Returns if user was delete
 *          security:
 *               - bearerAuth: []
 *          responses:
 *              200:
 *                  description: user was delete
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
_router.delete('/delete', [authMiddleware_1.authMiddleware], user_controller_1.deleteUserController);
/**
 * @swagger
 *  components:
 *   schemas:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of user
 *              isActive:
 *                  type: string
 *                  description: if user is active or inactive
 *              _id:
 *                  type: string
 *                  description: auto-generated _id mongodb
 *              fullName:
 *                  type: string
 *                  description: full name of user
 *              userName:
 *                  type: string
 *                  description: user name is a user for login
 *              password:
 *                  type: string
 *                  description: password encrypted
 *              createdAt:
 *                  type: string
 *                  description: when was created
 *              updatedAt:
 *                  type: string
 *                  description: when was updated
 *          required:
 *              - id
 *              - isActive
 *              - fullName
 *              - userName
 *
 */
/**
 * @swagger
 *
 *  /users/get:
 *
 *      get:
 *
 *          summary: Returns get user by id
 *          security:
 *               - bearerAuth: []
 *          responses:
 *              200:
 *                  description: get user by id using token
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *
 *              401:
 *                $ref: '#/components/responses/UnauthorizedError'
 *
 *
 */
_router.get('/get', [authMiddleware_1.authMiddleware], user_controller_1.getUserActiveController);
/**
 *
 * @swagger
 *
 * /users/update:
 *
 *      put:
 *          summary: Returns a user updated
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              description: a user updated
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *
 *                          properties:
 *                              fullName:
 *                                  type: string
 *                          required:
 *                              - fullName
 *
 *          responses:
 *              201:
 *                  description: created one new user
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              '400':
 *                  description: Bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Error'
 *
 *
 *
 */
_router.put('/update', __spreadArray([authMiddleware_1.authMiddleware], validation_1.validateUpdateUser), user_controller_1.updateUserController);
exports.default = _router;
