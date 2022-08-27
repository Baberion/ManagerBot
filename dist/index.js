"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/setup");
const framework_1 = require("@sapphire/framework");
const client = new framework_1.SapphireClient({
    defaultPrefix: ['NC', 'nc'],
    regexPrefix: /^(hey +)?bot[,! ]/i,
    caseInsensitiveCommands: true,
    logger: {
        level: 20 /* Debug */
    },
    shards: 'auto',
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_BANS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS'
    ]
});
const main = async () => {
    try {
        client.logger.info('Logging in');
        await client.login();
        client.logger.info('logged in');
    }
    catch (error) {
        client.logger.fatal(error);
        client.destroy();
        process.exit(1);
    }
};
main();
//# sourceMappingURL=index.js.map