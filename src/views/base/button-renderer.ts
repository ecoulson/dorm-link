import { Command } from '../../core';

export interface ButtonRenderer {
    text: string;
    command?: Command;
}
