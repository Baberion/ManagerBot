import { Precondition } from "@sapphire/framework";
import type { Message } from "discord.js";
export declare class UserPrecondition extends Precondition {
    run(message: Message): Promise<import("@sapphire/framework").Result<unknown, import("@sapphire/framework").UserError>>;
}
declare module '@sapphire/framework' {
    interface Preconditions {
        Moderators: never;
    }
}
//# sourceMappingURL=Moderators.d.ts.map