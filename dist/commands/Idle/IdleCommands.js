"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_subcommands_1 = require("@sapphire/plugin-subcommands");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const fs_1 = require("fs");
const discord_js_utilities_1 = require("@sapphire/discord.js-utilities");
const discord_js_1 = require("discord.js");
const utils_1 = require("../../lib/utils");
let UserCommand = class UserCommand extends plugin_subcommands_1.SubCommandPluginCommand {
    async create(message) {
        const fs = require('fs');
        let data = fs.readFileSync('IdleUser.json');
        let id = message.author.id;
        let IdlePlayer = JSON.parse(data);
        if (Object.keys(IdlePlayer.Player).includes(id)) {
            return (0, plugin_editable_commands_1.send)(message, 'already there');
        }
        IdlePlayer.Player[id] = {
            member: id,
            money: 200,
            gen: {}
        };
        (0, fs_1.writeFile)("IdleUser.json", JSON.stringify(IdlePlayer, null, 4), err => {
            if (err)
                throw err;
        });
        return (0, plugin_editable_commands_1.send)(message, 'created your game Environment');
    }
    async delete(message) {
        const fs = require('fs');
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'));
        let player = message.author.id;
        delete IdlePlayer.Player[player];
        fs.writeFileSync('IdleUser.json', JSON.stringify(IdlePlayer, null, 2));
        return (0, plugin_editable_commands_1.send)(message, 'You are now removed from the List.');
    }
    async balance(message) {
        const fs = require('fs');
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'));
        return (0, plugin_editable_commands_1.send)(message, JSON.stringify(IdlePlayer.Player[message.author.id].money.toString()));
    }
    async reset(message) {
        await this.delete(message);
        await this.create(message);
        return (0, plugin_editable_commands_1.send)(message, 'your environment got resetted');
    }
    async shop(message) {
        const fs = require('fs');
        let Shop = JSON.parse(fs.readFileSync('IdleShop.json')).Shop;
        let keys = Object.keys(Shop).toString().split(',');
        let attributes = Object.keys(Shop[keys[0]]).toString().split(',');
        const response = await (0, utils_1.sendLoadingMessage)(message);
        let Paginated_Message = new discord_js_utilities_1.PaginatedMessage({
            template: new discord_js_1.MessageEmbed().setColor("BLUE").setFooter('More will come!')
        });
        Paginated_Message
            .addPageEmbed((embed) => embed
            .setTitle('Shop')
            .setDescription('Gen 1')
            .setFields({ name: attributes[0], value: Shop[keys[0]][attributes[0]].toString() }, { name: attributes[1], value: Shop[keys[0]][attributes[1]].toString() }, { name: attributes[2], value: Shop[keys[0]][attributes[2]].toString() }, { name: attributes[3], value: Shop[keys[0]][attributes[3]].toString() }))
            .addPageEmbed((embed) => embed
            .setTitle('Shop')
            .setDescription('Gen 2')
            .setFields({ name: attributes[0], value: Shop[keys[1]][attributes[0]].toString() }, { name: attributes[1], value: Shop[keys[1]][attributes[1]].toString() }, { name: attributes[2], value: Shop[keys[1]][attributes[2]].toString() }, { name: attributes[3], value: Shop[keys[1]][attributes[3]].toString() }))
            .addPageEmbed((embed) => embed
            .setTitle('Shop')
            .setDescription('Gen 3')
            .setFields({ name: attributes[0], value: Shop[keys[2]][attributes[0]].toString() }, { name: attributes[1], value: Shop[keys[2]][attributes[1]].toString() }, { name: attributes[2], value: Shop[keys[2]][attributes[2]].toString() }, { name: attributes[3], value: Shop[keys[2]][attributes[3]].toString() }))
            .addPageEmbed((embed) => embed
            .setTitle('Shop')
            .setDescription('Gen 4')
            .setFields({ name: attributes[0], value: Shop[keys[3]][attributes[0]].toString() }, { name: attributes[1], value: Shop[keys[3]][attributes[1]].toString() }, { name: attributes[2], value: Shop[keys[3]][attributes[2]].toString() }, { name: attributes[3], value: Shop[keys[3]][attributes[3]].toString() }))
            .addPageEmbed((embed) => embed
            .setTitle('Shop')
            .setDescription('Gen 5')
            .setFields({ name: attributes[0], value: Shop[keys[4]][attributes[0]].toString() }, { name: attributes[1], value: Shop[keys[4]][attributes[1]].toString() }, { name: attributes[2], value: Shop[keys[4]][attributes[2]].toString() }, { name: attributes[3], value: Shop[keys[4]][attributes[3]].toString() }));
        Paginated_Message.embedFooterSeparator = ' |';
        Paginated_Message.pageIndexPrefix = 'Shop ';
        discord_js_utilities_1.PaginatedMessage.selectMenuOptions = (pageIndex) => ({
            label: `Rule ${pageIndex}`,
            default: true
        });
        await Paginated_Message.run(response, message.author);
        return response;
    } // TODO: überarbeiten
    async buy(message, args) {
        const test = await args.pick('string');
        if (test == null)
            return;
        const fs = require('fs');
        let id = message.author.id;
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'));
        let IdleShop = JSON.parse(fs.readFileSync('IdleShop.json'));
        if (Object.keys(IdlePlayer.Player[id].gen).includes(test)) {
            return (0, plugin_editable_commands_1.send)(message, 'already there');
        }
        if (!Object.keys(IdleShop.Shop).includes(test)) {
            return (0, plugin_editable_commands_1.send)(message, "no such item");
        }
        if (IdlePlayer.Player[id].money >= IdleShop.Shop[test].cost) {
            IdlePlayer.Player[id].gen[test] = IdleShop.Shop[test];
            IdlePlayer.Player[id].money = IdlePlayer.Player[id].money - IdleShop.Shop[test].cost;
            (0, fs_1.writeFile)("IdleUser.json", JSON.stringify(IdlePlayer, null, 4), err => {
                if (err)
                    throw err;
            });
            return (0, plugin_editable_commands_1.send)(message, 'added ' + test + ' to your account');
        }
        return (0, plugin_editable_commands_1.send)(message, 'money is ot enough or you misspelled the article');
    }
    async show(message, args) {
        let id = await args?.pick('string');
        const fs = require('fs');
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'));
        let stats = "try using \n NC idle show [UserID]";
        if (id != null) {
            stats = JSON.stringify(IdlePlayer.Player[id]);
        }
        return (0, plugin_editable_commands_1.send)(message, stats);
    } //TODO:stats besser aussehen lassen
    async help(message, args) {
        let text = await args.pick('string');
        if (text == 'shop')
            return (0, plugin_editable_commands_1.send)(message, 'shows you available generators and the details');
        if (text == 'create')
            return (0, plugin_editable_commands_1.send)(message, 'starts your idle adventure');
        if (text == 'reset')
            return (0, plugin_editable_commands_1.send)(message, 'resets all your stats');
        if (text == 'delete')
            return (0, plugin_editable_commands_1.send)(message, 'deletes you completely from the Idle adventure');
        if (text == 'balance')
            return (0, plugin_editable_commands_1.send)(message, 'shows your current money');
        if (text == 'buy')
            return (0, plugin_editable_commands_1.send)(message, 'you can buy a item out of the shop if you have enough money');
        if (text == 'sho')
            return (0, plugin_editable_commands_1.send)(message, 'this command shows you the stats of a player [please search for the ID of the player');
        return (0, plugin_editable_commands_1.send)(message, 'try using NC Idle help ... [shop,buy,create,delete,reset,balance]');
    }
    async upgrade(message, args) {
        let text = await args.pick('string');
        const fs = require('fs');
        let IdlePlayer = JSON.parse(fs.readFileSync('IdleUser.json'));
        if (Object.keys(IdlePlayer.Player[message.author.id].gen).includes(text) && IdlePlayer.Player[message.author.id].money >= IdlePlayer.Player[message.author.id].gen[text].upgrade_cost) {
            IdlePlayer.Player[message.author.id].money = IdlePlayer.Player[message.author.id].money - IdlePlayer.Player[message.author.id].gen[text].upgrade_cost;
            IdlePlayer.Player[message.author.id].gen[text].level += 1;
            IdlePlayer.Player[message.author.id].gen[text].mps = IdlePlayer.Player[message.author.id].gen[text].mps * 1.2;
            IdlePlayer.Player[message.author.id].gen[text].mps.toFixed(1);
            IdlePlayer.Player[message.author.id].gen[text].upgrade_cost = IdlePlayer.Player[message.author.id].gen[text].upgrade_cost * 1.5;
            (0, fs_1.writeFile)('IdleUser.json', JSON.stringify(IdlePlayer, null, 2), err => {
                if (err)
                    throw err;
            });
            return (0, plugin_editable_commands_1.send)(message, "upgraded " + text + " to Level: " + IdlePlayer.Player[message.author.id].gen[text].level);
        }
        return (0, plugin_editable_commands_1.send)(message, text + " dose not exists or you dont have enough money");
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['Idle', 'I', 'idle', 'i'],
        description: 'The Idle System',
        subCommands: ['create', 'delete', 'balance', 'show', 'shop', 'buy', 'upgrade', 'reset', 'help'],
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=IdleCommands.js.map