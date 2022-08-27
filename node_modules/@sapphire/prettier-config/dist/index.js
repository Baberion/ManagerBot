"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettierConfig = void 0;
/**
 * Default Prettier configuration for Sapphire Communitys
 * @example
 * ```json
 * {
 *   "prettier": "@sapphire/prettier-config"
 * }
 * ```
 */
exports.prettierConfig = {
    $schema: 'http://json.schemastore.org/prettierrc',
    endOfLine: 'lf',
    printWidth: 150,
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: true,
    overrides: [
        {
            files: '.all-contributorsrc',
            options: {
                parser: 'json'
            }
        },
        {
            files: '*.yml',
            options: {
                tabWidth: 2,
                useTabs: false
            }
        }
    ]
};
module.exports = exports.prettierConfig;
exports.default = exports.prettierConfig;
