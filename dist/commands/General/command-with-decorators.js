"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const plugin_subcommands_1 = require("@sapphire/plugin-subcommands");
const discord_js_1 = require("discord.js");
let UserCommand = class UserCommand extends plugin_subcommands_1.SubCommandPluginCommand {
    // Anyone should be able to view the result, but not modify
    async show(message) {
        return (0, plugin_editable_commands_1.send)(message, 'Showing!');
    }
    async add(message) {
        const embed = new discord_js_1.MessageEmbed() //
            .setColor('#3986E4')
            .setDescription('Added!')
            .setTitle('Configuration Log')
            .setTimestamp();
        return (0, plugin_editable_commands_1.send)(message, { embeds: [embed] });
    }
    async remove(message) {
        return (0, plugin_editable_commands_1.send)(message, 'Removing!');
    }
    async reset(message) {
        return (0, plugin_editable_commands_1.send)(message, 'Resetting!');
    }
};
(0, tslib_1.__decorate)([
    (0, decorators_1.RequiresClientPermissions)('EMBED_LINKS') // This sub-command requires the bot to have EMBED_LINKS permission because it sends a MessageEmbed
    ,
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [discord_js_1.Message]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserCommand.prototype, "add", null);
(0, tslib_1.__decorate)([
    (0, decorators_1.RequiresGuildContext)((message) => (0, plugin_editable_commands_1.send)(message, 'This sub-command can only be used in servers')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [discord_js_1.Message]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserCommand.prototype, "remove", null);
(0, tslib_1.__decorate)([
    (0, decorators_1.RequiresDMContext)((message) => (0, plugin_editable_commands_1.send)(message, 'This sub-command can only be used in DMs')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [discord_js_1.Message]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserCommand.prototype, "reset", null);
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['cwd'],
        description: 'A basic command with some subcommands',
        subCommands: ['add', { input: 'create', output: 'add' }, 'remove', 'reset', { input: 'show', default: true }]
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=command-with-decorators.js.map