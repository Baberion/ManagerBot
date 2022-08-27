import { Listener } from "@sapphire/framework";
import type { GuildMember } from "discord.js";
export declare class UserEvent extends Listener<'guildMemberAdd'> {
    run(member: GuildMember): Promise<void>;
}
//# sourceMappingURL=autorole.d.ts.map