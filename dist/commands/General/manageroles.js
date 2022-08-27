"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_subcommands_1 = require("@sapphire/plugin-subcommands");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
let UserCommand = class UserCommand extends plugin_subcommands_1.SubCommandPluginCommand {
    // Anyone should be able to view the result, but not modify
    async add(message, args) {
        const guild = message.guild;
        const rolename = await args.pick("string");
        guild?.roles.create({
            name: rolename,
            color: "BLUE",
        });
        return (0, plugin_editable_commands_1.send)(message, 'Adding!');
    }
    async remove(message, args) {
        const rolename = await args.pick('string');
        const role = message.guild?.roles.cache.find(role => role.name == rolename);
        if (role == null) {
            return (0, plugin_editable_commands_1.send)(message, 'you tried your best 😢');
        }
        role.delete();
        return (0, plugin_editable_commands_1.send)(message, 'Removing!');
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['role'],
        description: 'A command to edit Roles',
        subCommands: ['add', { input: 'create', output: 'add' }, 'remove', 'clean'],
        preconditions: ['OwnerOnly']
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=manageroles.js.map