"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const plugin_subcommands_1 = require("@sapphire/plugin-subcommands");
let UserCommand = class UserCommand extends plugin_subcommands_1.SubCommandPluginCommand {
    // Anyone should be able to view the result, but not modify
    async show(message) {
        return (0, plugin_editable_commands_1.send)(message, 'Showing!');
    }
    async add(message) {
        return (0, plugin_editable_commands_1.send)(message, 'Adding!');
    }
    async remove(message) {
        return (0, plugin_editable_commands_1.send)(message, 'Removing!');
    }
    async reset(message) {
        return (0, plugin_editable_commands_1.send)(message, 'Resetting!');
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['cws'],
        description: 'A basic command with some subcommands',
        subCommands: ['add', { input: 'create', output: 'add' }, 'remove', 'reset', { input: 'show', default: true }]
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=command-with-subcommands.js.map