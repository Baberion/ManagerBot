"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLoadingMessage = exports.pickRandom = void 0;
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
const constants_1 = require("./constants");
/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */
function pickRandom(array) {
    const { length } = array;
    return array[Math.floor(Math.random() * length)];
}
exports.pickRandom = pickRandom;
/**
 * Sends a loading message to the current channel
 * @param message The message data for which to send the loading message
 */
function sendLoadingMessage(message) {
    return (0, plugin_editable_commands_1.send)(message, { embeds: [new discord_js_1.MessageEmbed().setDescription(pickRandom(constants_1.RandomLoadingMessage)).setColor('#FF0000')] });
}
exports.sendLoadingMessage = sendLoadingMessage;
//# sourceMappingURL=utils.js.map