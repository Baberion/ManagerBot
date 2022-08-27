"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        let text = await args.pick("string");
        return (0, plugin_editable_commands_1.send)(message, 'can not delete ' + text);
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['delete', 'd'],
        description: 'ping pong'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=delete.js.map