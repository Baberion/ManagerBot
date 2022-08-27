import {ApplyOptions} from "@sapphire/decorators";
import type {SubCommandPluginCommandOptions} from "@sapphire/plugin-subcommands";
import {SubCommandPluginCommand} from "@sapphire/plugin-subcommands";
import type {Message} from "discord.js";
import {send} from "@sapphire/plugin-editable-commands";
import {writeFile} from "fs";
import type {Args} from "@sapphire/framework";
import {PaginatedMessage} from "@sapphire/discord.js-utilities";
import {MessageEmbed} from "discord.js";
import {sendLoadingMessage} from "../../lib/utils";

@ApplyOptions<SubCommandPluginCommandOptions>({
    aliases: ['Idle', 'I' , 'idle', 'i'],
    description:'The Idle System',
    subCommands: ['create','delete','balance','show','shop','buy','upgrade','reset','help'],
})
export class UserCommand extends SubCommandPluginCommand{
    public async create(message: Message) {
        const fs = require('fs')
        let data = fs.readFileSync('IdleUser.json')
        let id = message.author.id
        let IdlePlayer = JSON.parse(data)

        if(Object.keys(IdlePlayer.Player).includes(id) )
        {
            return send(message, 'already there')
        }
         IdlePlayer.Player[id] = {
            member: id,
            money: 200,
             gen:{}
        }
        writeFile("IdleUser.json", JSON.stringify(IdlePlayer, null, 4), err => {
            if (err) throw err;})
        return send(message, 'created your game Environment')
    }
    public async delete(message: Message) {
        const fs = require('fs')
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'))
        let player = message.author.id
        delete IdlePlayer.Player[player]
        fs.writeFileSync('IdleUser.json', JSON.stringify(IdlePlayer, null, 2))

        return  send(message,'You are now removed from the List.')
    }
    public async balance(message: Message){
        const fs = require('fs')
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'))
        return send(message,JSON.stringify(IdlePlayer.Player[message.author.id].money.toString()))
    }
    public async reset(message: Message){
        await this.delete(message)
        await this.create(message)
        return send(message,'your environment got resetted')
    }
    public async shop(message: Message){
        const fs = require('fs')
        let Shop = JSON.parse(fs.readFileSync('IdleShop.json')).Shop
        let keys = Object.keys(Shop).toString().split(',')
        let attributes = Object.keys(Shop[keys[0]]).toString().split(',')

        const response = await sendLoadingMessage(message)

        let Paginated_Message = new PaginatedMessage({
            template: new MessageEmbed().setColor("BLUE").setFooter('More will come!')
        })
        Paginated_Message
            .addPageEmbed((embed)=> embed
                .setTitle('Shop')
                .setDescription('Gen 1')
                .setFields(
                    {name: attributes[0],value: Shop[keys[0]][attributes[0]].toString()},
                    {name: attributes[1],value: Shop[keys[0]][attributes[1]].toString()},
                    {name: attributes[2],value: Shop[keys[0]][attributes[2]].toString()},
                    {name: attributes[3],value: Shop[keys[0]][attributes[3]].toString()}

                )
            )
            .addPageEmbed((embed)=> embed
                .setTitle('Shop')
                .setDescription('Gen 2')
                .setFields(
                    {name: attributes[0],value: Shop[keys[1]][attributes[0]].toString()},
                    {name: attributes[1],value: Shop[keys[1]][attributes[1]].toString()},
                    {name: attributes[2],value: Shop[keys[1]][attributes[2]].toString()},
                    {name: attributes[3],value: Shop[keys[1]][attributes[3]].toString()}
                )
            )
            .addPageEmbed((embed)=> embed
                .setTitle('Shop')
                .setDescription('Gen 3')
                .setFields(
                    {name: attributes[0],value: Shop[keys[2]][attributes[0]].toString()},
                    {name: attributes[1],value: Shop[keys[2]][attributes[1]].toString()},
                    {name: attributes[2],value: Shop[keys[2]][attributes[2]].toString()},
                    {name: attributes[3],value: Shop[keys[2]][attributes[3]].toString()}

                )
            )
            .addPageEmbed((embed)=> embed
                .setTitle('Shop')
                .setDescription('Gen 4')
                .setFields(
                    {name: attributes[0],value: Shop[keys[3]][attributes[0]].toString()},
                    {name: attributes[1],value: Shop[keys[3]][attributes[1]].toString()},
                    {name: attributes[2],value: Shop[keys[3]][attributes[2]].toString()},
                    {name: attributes[3],value: Shop[keys[3]][attributes[3]].toString()}

                )
            )
            .addPageEmbed((embed)=> embed
                .setTitle('Shop')
                .setDescription('Gen 5')
                .setFields(
                    {name: attributes[0],value: Shop[keys[4]][attributes[0]].toString()},
                    {name: attributes[1],value: Shop[keys[4]][attributes[1]].toString()},
                    {name: attributes[2],value: Shop[keys[4]][attributes[2]].toString()},
                    {name: attributes[3],value: Shop[keys[4]][attributes[3]].toString()}

                )
            )

        Paginated_Message.embedFooterSeparator = ' |'
        Paginated_Message.pageIndexPrefix = 'Shop '

        PaginatedMessage.selectMenuOptions = (pageIndex) => ({
            label: `Rule ${pageIndex}`,
            default: true
        });
        await Paginated_Message.run(response,message.author)
        return response

    }// TODO: überarbeiten
    public async buy(message: Message, args: Args){
        const test = await args.pick('string')
        if(test == null )return;
        const fs = require('fs')
        let id = message.author.id
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'))
        let IdleShop = JSON.parse(fs.readFileSync('IdleShop.json'))
        if(Object.keys(IdlePlayer.Player[id].gen).includes(test))
        {
            return send(message, 'already there')
        }
        if (!Object.keys(IdleShop.Shop).includes(test))
        {
            return send(message,"no such item")
        }
        if(IdlePlayer.Player[id].money >= IdleShop.Shop[test].cost)
        {
            IdlePlayer.Player[id].gen[test] = IdleShop.Shop[test]
            IdlePlayer.Player[id].money = IdlePlayer.Player[id].money - IdleShop.Shop[test].cost
            writeFile("IdleUser.json", JSON.stringify(IdlePlayer, null, 4), err => {
                if (err) throw err;})
            return send(message, 'added '+ test +' to your account')
        }
        return send(message, 'money is ot enough or you misspelled the article')
    }
    public async show(message:Message,args?:Args){

        let id = await args?.pick('string')
        const fs = require('fs')
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'))
        let stats = "try using \n NC idle show [UserID]"
        if (id != null){
            stats = JSON.stringify(IdlePlayer.Player[id])
        }


        return send(message, stats)
    }//TODO:stats besser aussehen lassen
    public async help(message: Message,args: Args){
        let text = await args.pick('string')
        if(text == 'shop')return send(message,'shows you available generators and the details')
        if(text == 'create')return send(message,'starts your idle adventure')
        if(text == 'reset')return send(message,'resets all your stats')
        if(text == 'delete')return send(message,'deletes you completely from the Idle adventure')
        if(text == 'balance')return send(message,'shows your current money')
        if(text == 'buy')return send(message,'you can buy a item out of the shop if you have enough money')
        if(text == 'sho')return send(message,'this command shows you the stats of a player [please search for the ID of the player')


        return send(message,'try using NC Idle help ... [shop,buy,create,delete,reset,balance]')
    }
    public async upgrade(message: Message,args: Args){
        let text = await args.pick('string')
        const fs = require('fs')

        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'))
        if(Object.keys(IdlePlayer.Player[message.author.id].gen).includes(text) && IdlePlayer.Player[message.author.id].money >= IdlePlayer.Player[message.author.id].gen[text].upgrade_cost )
        {
            IdlePlayer.Player[message.author.id].money = IdlePlayer.Player[message.author.id].money - IdlePlayer.Player[message.author.id].gen[text].upgrade_cost
            IdlePlayer.Player[message.author.id].gen[text].level += 1
            IdlePlayer.Player[message.author.id].gen[text].mps = IdlePlayer.Player[message.author.id].gen[text].mps * 1.2
            IdlePlayer.Player[message.author.id].gen[text].mps.toFixed(1)
            IdlePlayer.Player[message.author.id].gen[text].upgrade_cost = IdlePlayer.Player[message.author.id].gen[text].upgrade_cost * 1.5

            writeFile('IdleUser.json',JSON.stringify(IdlePlayer,null,2),err => {
                if (err) throw err;})
            return send(message, "upgraded " + text + " to Level: " + IdlePlayer.Player[message.author.id].gen[text].level)
        }
        return send(message,text + " dose not exists or you dont have enough money")

    }


}