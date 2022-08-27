import { SubCommandPluginCommand } from "@sapphire/plugin-subcommands";
import type { Message } from "discord.js";
import type { Args } from "@sapphire/framework";
export declare class UserCommand extends SubCommandPluginCommand {
    add(message: Message, args: Args): Promise<Message<boolean>>;
    remove(message: Message, args: Args): Promise<Message<boolean>>;
}
//# sourceMappingURL=manageroles.d.ts.map