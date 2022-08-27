
import {ApplyOptions} from "@sapphire/decorators";
import {SubCommandPluginCommand, SubCommandPluginCommandOptions} from "@sapphire/plugin-subcommands";
import type {Message} from "discord.js";
import {send} from "@sapphire/plugin-editable-commands";
import type {Args} from "@sapphire/framework";


@ApplyOptions<SubCommandPluginCommandOptions>({
    aliases: ['role'],
    description: 'A command to edit Roles',
    subCommands: ['add', { input: 'create', output: 'add' }, 'remove','clean'],
    preconditions: ['OwnerOnly']


})
export class UserCommand extends SubCommandPluginCommand {

    // Anyone should be able to view the result, but not modify
    public async add(message: Message, args: Args) {
        const guild = message.guild;
        const rolename = await args.pick("string")
        guild?.roles.create({
            name: rolename,
            color: "BLUE",

        })
        return send(message, 'Adding!');
    }

    public async remove(message: Message, args: Args) {
        const rolename = await args.pick('string')
        const role = message.guild?.roles.cache.find(role => role.name == rolename)
        if(role == null)
        {
            return send(message, 'you tried your best 😢');
        }
        role!.delete();
        return send(message, 'Removing!');

    }
    // public async clean(message: Message){
    //     const moderatorid ='Moderator'
    //     const adminid ='Admin'
    //     const botid = 'Bot'
    //     const Devid = 'Dev'
    //     const Memberid= 'Member'
    //     const everyone = '@everyone'
    //     const guild = message.guild;
    //     guild?.roles.cache.forEach(role => {
    //         if(role.) {
    //             role.delete();
    //             send(message, 'deleting: ' + role.id + role.name)
    //         }
    //         console.log(role.id,role.name)
    //     })
    // }
}
