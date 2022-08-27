import { Plugin, preGenericsInitialization, SapphireClient } from '@sapphire/framework';
import type { ClientOptions } from 'discord.js';
import { LoggerOptions } from './lib/Logger';
/**
 * @since 1.0.0
 */
export declare class LoggerPlugin extends Plugin {
    /**
     * @since 1.0.0
     */
    static [preGenericsInitialization](this: SapphireClient, options: ClientOptions): void;
}
declare module '@sapphire/framework' {
    interface ClientLoggerOptions extends LoggerOptions {
    }
}
//# sourceMappingURL=register.d.ts.map