"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_subcommands_1 = require("@sapphire/plugin-subcommands");
let UserCommand = class UserCommand extends plugin_subcommands_1.SubCommandPluginCommand {
    async id(message, args) {
        const name = await args.pick('string');
        const user = message.guild?.members.cache.get(name);
        message.guild?.members.ban(user);
    }
    async n(message, args) {
        const byname = await args.pick('string');
        const user = message.guild?.members.cache.find(member => member.displayName == byname);
        message.guild?.members.ban(user);
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['ban', 'b'],
        description: 'ping pong',
        subCommands: ['id', 'n']
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=ban.js.map