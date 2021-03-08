import { load } from 'ts-dotenv';

const env = load({
    BOT_TOKEN: String,
    BOT_PREFIX: String,
});

export default env;
