import { Client } from 'discord.js';
import * as boxen from 'boxen';
import { load } from 'ts-dotenv';

const client = new Client();

const env = load({
    BOT_TOKEN: String,
    BOT_PREFIX: String,
});

(async (): Promise<String> => client.login(env.BOT_TOKEN))();

client.once('ready', (): void => {
    client.user.setActivity(`${env.BOT_PREFIX}help`, { type: 'WATCHING' })
        .then((presence) => console.log(boxen.default(`  Client is ready!\nActivity set to ${presence.activities[0].name}`, { padding: 1, borderColor: '#0883ff' })))
        .catch((err) => console.log(err));
});
