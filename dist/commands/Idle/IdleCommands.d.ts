import { SubCommandPluginCommand } from "@sapphire/plugin-subcommands";
import type { Message } from "discord.js";
import type { Args } from "@sapphire/framework";
export declare class UserCommand extends SubCommandPluginCommand {
    create(message: Message): Promise<Message<boolean>>;
    delete(message: Message): Promise<Message<boolean>>;
    balance(message: Message): Promise<Message<boolean>>;
    reset(message: Message): Promise<Message<boolean>>;
    shop(message: Message): Promise<Message<boolean>>;
    buy(message: Message, args: Args): Promise<Message<boolean> | undefined>;
    show(message: Message, args?: Args): Promise<Message<boolean>>;
    help(message: Message, args: Args): Promise<Message<boolean>>;
    upgrade(message: Message, args: Args): Promise<Message<boolean>>;
}
//# sourceMappingURL=IdleCommands.d.ts.map