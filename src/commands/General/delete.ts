import {ApplyOptions} from "@sapphire/decorators";
import type {CommandOptions} from "@sapphire/framework";
import {Args, Command} from "@sapphire/framework";
import type {Message} from "discord.js";
import {send} from "@sapphire/plugin-editable-commands";

@ApplyOptions<CommandOptions>({
    aliases: ['delete','d'],
    description: 'ping pong'

})
export class UserCommand extends Command{
    public async messageRun(message: Message, args: Args) {
        let text = await args.pick("string")
        return send(message, 'can not delete ' + text);
    }


}