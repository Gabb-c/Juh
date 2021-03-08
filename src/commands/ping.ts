import { Client, Message } from 'discord.js';
import BaseCommand from '../model/bot/BaseCommand';

class Ping extends BaseCommand {
    constructor() {
        super('ping', 'info', false, 'Shows the ping of the server', '', 5);
    }

    async run(client: Client, message: Message, cmdArgs: string) {

    }
}

export default Ping;
