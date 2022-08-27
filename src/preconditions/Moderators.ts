import {Precondition} from "@sapphire/framework";
import type {Message} from "discord.js";

export class UserPrecondition extends Precondition{
    public async run(message: Message) {
        if(message.guild?.roles.cache.find(role => role.name == 'Moderator')!.members.get(message.author.id)){
            return this.ok()
        }
        else
        {
            return this.error({message: "You are not a Moderator"})
        }
    }
}
declare module '@sapphire/framework' {
    interface Preconditions {
        Moderators: never;
    }
}