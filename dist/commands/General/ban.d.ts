import { SubCommandPluginCommand } from "@sapphire/plugin-subcommands";
import type { Message } from "discord.js";
import type { Args } from "@sapphire/framework";
export declare class UserCommand extends SubCommandPluginCommand {
    id(message: Message, args: Args): Promise<void>;
    n(message: Message, args: Args): Promise<void>;
}
//# sourceMappingURL=ban.d.ts.map