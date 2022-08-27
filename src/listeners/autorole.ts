import {Listener} from "@sapphire/framework";
import type {GuildMember} from "discord.js";

export class UserEvent extends Listener<'guildMemberAdd'> {
   public async run(member: GuildMember){
      const role = member.guild.roles.cache.find(role => role.name == 'Member');
      if(role == null)
      {
         await member.guild.roles.create({
            name: 'Member',
            color: "YELLOW",
            permissions: ["ADD_REACTIONS","CONNECT","CHANGE_NICKNAME", "ATTACH_FILES", "READ_MESSAGE_HISTORY","SPEAK","STREAM"]
         })
      }
      await member.roles.add(role!)
   }

}