import { Message } from 'discord.js';
/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */
export declare function pickRandom<T>(array: readonly T[]): T;
/**
 * Sends a loading message to the current channel
 * @param message The message data for which to send the loading message
 */
export declare function sendLoadingMessage(message: Message): Promise<typeof message>;
//# sourceMappingURL=utils.d.ts.map