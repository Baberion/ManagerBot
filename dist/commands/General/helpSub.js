"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_subcommands_1 = require("@sapphire/plugin-subcommands");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
let UserCommand = class UserCommand extends plugin_subcommands_1.SubCommandPluginCommand {
    async ping(message) {
        return (0, plugin_editable_commands_1.send)(message, 'test');
    }
    async delete(message) {
        return (0, plugin_editable_commands_1.send)(message, 'comming soon ...');
    }
    async ban(message) {
        return (0, plugin_editable_commands_1.send)(message, 'comming soon ...');
    }
    async idle(message) {
        return (0, plugin_editable_commands_1.send)(message, 'comming soon ...');
    }
    async role(message) {
        return (0, plugin_editable_commands_1.send)(message, 'comming soon ...');
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['h', '?', 'help'],
        subCommands: ['delete', 'ping', 'ban', 'idle', 'role'],
        description: 'gives information about commands'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=helpSub.js.map