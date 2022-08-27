"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const plugin_api_1 = require("@sapphire/plugin-api");
class UserRoute extends plugin_api_1.Route {
    constructor(context, options) {
        super(context, {
            ...options,
            route: ''
        });
    }
    [plugin_api_1.methods.GET](_request, response) {
        response.json({ message: 'Landing Page!' });
    }
    [plugin_api_1.methods.POST](_request, response) {
        response.json({ message: 'Landing Page!' });
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=main.js.map