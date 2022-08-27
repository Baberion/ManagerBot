import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions} from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
	aliases: ['ping','pong'],
	description: 'ping pong'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		const test = Command.toString();
		let content;
		if(test == 'ping'){
			const msg = await send(message, 'Ping?');

			content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
				(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
			}ms.`;


		}
		else{
			const msg = await send(message, 'Pong?');

			content = `Ping! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
				(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
			}ms.`;
		}
		return send(message, content);
	}

}
