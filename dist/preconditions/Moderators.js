"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrecondition = void 0;
const framework_1 = require("@sapphire/framework");
class UserPrecondition extends framework_1.Precondition {
    async run(message) {
        if (message.guild?.roles.cache.find(role => role.name == 'Moderator').members.get(message.author.id)) {
            return this.ok();
        }
        else {
            return this.error({ message: "You are not a Moderator" });
        }
    }
}
exports.UserPrecondition = UserPrecondition;
//# sourceMappingURL=Moderators.js.map