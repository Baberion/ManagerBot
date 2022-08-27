"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const discord_js_utilities_1 = require("@sapphire/discord.js-utilities");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const utils_1 = require("../../lib/utils");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message) {
        const response = await (0, utils_1.sendLoadingMessage)(message);
        const paginatedMessage = new discord_js_utilities_1.PaginatedMessage({
            template: new discord_js_1.MessageEmbed()
                .setColor('#FF0000')
                // Be sure to add a space so this is offset from the page numbers!
                .setFooter(' footer after page numbers')
        });
        paginatedMessage
            .addPageEmbed((embed) => embed //
            .setDescription('This is the first page')
            .setTitle('Page 1'))
            .addPageBuilder((builder) => builder //
            .setContent('This is the second page')
            .setEmbeds([new discord_js_1.MessageEmbed().setTimestamp()]));
        await paginatedMessage.run(response, message.author);
        return response;
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['pm'],
        description: 'A command that uses paginated messages.',
        generateDashLessAliases: true
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=paginated-message.js.map