import {ApplyOptions} from "@sapphire/decorators";
import type {SubCommandPluginCommandOptions} from "@sapphire/plugin-subcommands";
import {SubCommandPluginCommand} from "@sapphire/plugin-subcommands";
import type {Message} from "discord.js";
import type {Args} from "@sapphire/framework";

@ApplyOptions<SubCommandPluginCommandOptions>({
    aliases: ['ban', 'b'],
    description: 'ping pong',
    subCommands: ['id', 'n']
})
export class UserCommand extends SubCommandPluginCommand{
    public async id(message: Message, args: Args){
        const name = await args.pick('string')
        const user = message.guild?.members.cache.get(name)
        message.guild?.members.ban(user!);
    }
    public async n(message: Message, args: Args){
        const byname = await args.pick('string')
        const user = message.guild?.members.cache.find(member => member.displayName == byname)
        message.guild?.members.ban(user!);
    }
}
