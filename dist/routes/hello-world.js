"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const plugin_api_1 = require("@sapphire/plugin-api");
class UserRoute extends plugin_api_1.Route {
    constructor(context, options) {
        super(context, {
            ...options,
            route: 'hello-world'
        });
    }
    [plugin_api_1.methods.GET](_request, response) {
        response.json({ message: 'Hello World' });
    }
    [plugin_api_1.methods.POST](_request, response) {
        response.json({ message: 'Hello World' });
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=hello-world.js.map