"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const type_1 = require("@sapphire/type");
const utilities_1 = require("@sapphire/utilities");
const util_1 = require("util");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const code = await args.rest('string');
        const { result, success, type } = await this.eval(message, code, {
            async: args.getFlags('async'),
            depth: Number(args.getOption('depth')) ?? 0,
            showHidden: args.getFlags('hidden', 'showHidden')
        });
        const output = success ? (0, utilities_1.codeBlock)('js', result) : `**ERROR**: ${(0, utilities_1.codeBlock)('bash', result)}`;
        if (args.getFlags('silent', 's'))
            return null;
        const typeFooter = `**Type**: ${(0, utilities_1.codeBlock)('typescript', type)}`;
        if (output.length > 2000) {
            return (0, plugin_editable_commands_1.send)(message, {
                content: `Output was too long... sent the result as a file.\n\n${typeFooter}`,
                files: [{ attachment: Buffer.from(output), name: 'output.js' }]
            });
        }
        return (0, plugin_editable_commands_1.send)(message, `${output}\n${typeFooter}`);
    }
    async eval(message, code, flags) {
        if (flags.async)
            code = `(async () => {\n${code}\n})();`;
        // @ts-expect-error value is never read, this is so `msg` is possible as an alias when sending the eval.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const msg = message;
        let success = true;
        let result = null;
        try {
            // eslint-disable-next-line no-eval
            result = eval(code);
        }
        catch (error) {
            if (error && error instanceof Error && error.stack) {
                this.container.client.logger.error(error);
            }
            result = error;
            success = false;
        }
        const type = new type_1.Type(result).toString();
        if ((0, utilities_1.isThenable)(result))
            result = await result;
        if (typeof result !== 'string') {
            result = (0, util_1.inspect)(result, {
                depth: flags.depth,
                showHidden: flags.showHidden
            });
        }
        return { result, success, type };
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        aliases: ['ev'],
        description: 'Evals any JavaScript code',
        quotes: [],
        preconditions: ['OwnerOnly'],
        flags: ['async', 'hidden', 'showHidden', 'silent', 's'],
        options: ['depth']
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=eval.js.map