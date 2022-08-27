import type { LoggerOptions } from './lib/Logger';
export * from './lib/Logger';
export * from './lib/LoggerLevel';
export * from './lib/LoggerStyle';
export * from './lib/LoggerTimestamp';
declare module '@sapphire/framework' {
    interface ClientLoggerOptions extends LoggerOptions {
    }
}
//# sourceMappingURL=index.d.ts.map