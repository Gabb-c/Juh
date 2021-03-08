class BaseCommand {
    name: string;

    category: string;

    args: boolean;

    description: string;

    structure: string;

    cooldown: number;

    constructor(name: string, category: string, args: boolean, description: string, structure: string, cooldown: number) {
        this.name = name;
        this.category = category;
        this.args = args;
        this.description = description;
        this.structure = structure;
        this.cooldown = cooldown;
    }
}

export default BaseCommand;
