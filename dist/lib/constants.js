"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomLoadingMessage = exports.srcDir = exports.rootDir = void 0;
const path_1 = require("path");
exports.rootDir = (0, path_1.join)(__dirname, '..', '..');
exports.srcDir = (0, path_1.join)(exports.rootDir, 'src');
exports.RandomLoadingMessage = ['Computing...', 'Thinking...', 'Cooking some food', 'Give me a moment', 'Loading...'];
//# sourceMappingURL=constants.js.map