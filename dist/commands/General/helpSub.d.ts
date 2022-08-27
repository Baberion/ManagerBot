import { SubCommandPluginCommand } from "@sapphire/plugin-subcommands";
import type { Message } from "discord.js";
export declare class UserCommand extends SubCommandPluginCommand {
    ping(message: Message): Promise<Message<boolean>>;
    delete(message: Message): Promise<Message<boolean>>;
    ban(message: Message): Promise<Message<boolean>>;
    idle(message: Message): Promise<Message<boolean>>;
    role(message: Message): Promise<Message<boolean>>;
}
//# sourceMappingURL=helpSub.d.ts.map