import { Args, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';
export declare class UserCommand extends Command {
    messageRun(message: Message, args: Args): Promise<Message<boolean> | null>;
    private eval;
}
//# sourceMappingURL=eval.d.ts.map