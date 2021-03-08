import path from 'path';
import fs from 'fs';
import { Client, Constructable } from 'discord.js';
import BaseCommand from '../model/bot/BaseCommand';
import { Response } from '../model/bot/response';

const registerCommands = async (client: Client, dir: string = ''): Promise<Response<Set<BaseCommand>>> => {
    const result: Response<Set<BaseCommand>> = {
        status: 500,
        error: '',
        message: '',
        data: null,
    };
    const filePath = path.join(__dirname, dir);
    const files = await fs.promises.readdir(filePath);
    files.forEach(async (file) => {
        const stat = await fs.promises.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerCommands(client, path.join(dir, file));
        if (file.endsWith('.ts') || file.endsWith('.js')) {
            // eslint-disable-next-line
            const Command: Constructable<BaseCommand> = require(path.join(filePath, file));

            const command = new Command();
            let commands: Set<BaseCommand>;
            commands.add(command);
        }
    });

    return new Promise<Response<Set<BaseCommand>>>((resolve, reject) => {
    });
};

export default registerCommands;
