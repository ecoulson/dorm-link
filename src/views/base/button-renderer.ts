import { Command } from '../commands/command';

export interface ButtonRenderer {
    text: string;
    action?: Command;
}
