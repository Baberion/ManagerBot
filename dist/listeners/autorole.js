"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEvent = void 0;
const framework_1 = require("@sapphire/framework");
class UserEvent extends framework_1.Listener {
    async run(member) {
        const role = member.guild.roles.cache.find(role => role.name == 'Member');
        if (role == null) {
            await member.guild.roles.create({
                name: 'Member',
                color: "YELLOW",
                permissions: ["ADD_REACTIONS", "CONNECT", "CHANGE_NICKNAME", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "SPEAK", "STREAM"]
            });
        }
        await member.roles.add(role);
    }
}
exports.UserEvent = UserEvent;
//# sourceMappingURL=autorole.js.map