import {ApplyOptions} from "@sapphire/decorators";
import type {SubCommandPluginCommandOptions} from "@sapphire/plugin-subcommands";
import {SubCommandPluginCommand} from "@sapphire/plugin-subcommands";
import type {Message} from "discord.js";
import {send} from "@sapphire/plugin-editable-commands";

@ApplyOptions<SubCommandPluginCommandOptions>({
    aliases: ['h','?', 'help'],
    subCommands:['delete','ping','ban','idle','role'],
    description:'gives information about commands'
})
export class UserCommand extends SubCommandPluginCommand{


    public async ping(message: Message){
        return send(message, 'test')
    }
    public async delete(message: Message){
        return send(message, 'comming soon ...')
    }
    public async ban(message: Message){
        return send(message, 'comming soon ...')
    }
    public async idle(message: Message){
        return send(message, 'comming soon ...')
    }
    public async role(message: Message){
        return send(message, 'comming soon ...')
    }

}



