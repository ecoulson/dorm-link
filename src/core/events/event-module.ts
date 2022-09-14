import { Module } from 'noose-injection';
import { EventEmitterAnnotation } from './event-annotations';
import { EventEmitter } from './event-emitter';

export class EventModule extends Module {
    configure(): void {
        this.registerValue(EventEmitterAnnotation, EventEmitter);
    }
}
