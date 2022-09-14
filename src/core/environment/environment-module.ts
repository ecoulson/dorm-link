import { Module } from 'noose-injection';
import { Environment } from './environment';
import { EnvironmentAnnotation } from './environment-annotations';

export class EnvironmentModule extends Module {
    configure(): void {
        this.registerClass(EnvironmentAnnotation, Environment);
    }
}
