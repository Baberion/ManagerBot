import { SubCommandPluginCommand } from '@sapphire/plugin-subcommands';
import { Message } from 'discord.js';
export declare class UserCommand extends SubCommandPluginCommand {
    show(message: Message): Promise<Message<boolean>>;
    add(message: Message): Promise<Message<boolean>>;
    remove(message: Message): Promise<Message<boolean>>;
    reset(message: Message): Promise<Message<boolean>>;
}
//# sourceMappingURL=command-with-decorators.d.ts.map