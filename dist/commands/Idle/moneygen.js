"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
async function money() {
    const fs = require('fs');
    let data = await fs.readFileSync("IdleUser.json");
    let IdlePlayer = JSON.parse(data);
    let user = Object.keys(IdlePlayer.Player).toString();
    let user_keys = user.split(",");
    let money_ = 0;
    if (user != "") {
        for (let i = 0; i < user_keys.length; i++) {
            let generator = Object.keys(IdlePlayer.Player[user_keys[i]].gen).toString();
            let generator_keys = generator.split(',');
            if (generator != "") {
                for (let j = 0; j < generator_keys.length; j++) {
                    money_ = money_ + IdlePlayer.Player[user_keys[i]].gen[generator_keys[j]].mps;
                }
            }
            IdlePlayer.Player[user_keys[i]].money += money_;
            money_ = 0;
        }
    }
    await (0, fs_1.writeFile)("IdleUser.json", JSON.stringify(IdlePlayer, null, 2), err => {
        if (err)
            throw err;
    });
    setTimeout(money, 1000);
}
money();
//TODO: die JSON wird immer noch gelöscht durch den Fehler undefined 1 : unexpected end of JSON input
//# sourceMappingURL=moneygen.js.map