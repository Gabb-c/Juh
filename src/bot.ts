import { Client } from 'discord.js';
import * as boxen from 'boxen';
import env from './config/env/env';

const client = new Client();

(async (): Promise<String> => client.login(env.BOT_TOKEN))();

client.once('ready', (): void => {
    client.user.setActivity(`${env.BOT_PREFIX}help`, { type: 'WATCHING' })
        .then((presence) => console.log(boxen.default(`  Client is ready!\nActivity set to ${presence.activities[0].name}`, { padding: 1, borderColor: '#0883ff' })))
        .catch((err) => console.log(err));
});
