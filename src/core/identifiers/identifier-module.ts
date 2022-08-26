import { randomUUID } from 'crypto';
import { Module } from 'noose-injection';
import {
    UUIDGenerationFunctionAnnotation,
    UUIDGeneratorAnnotation,
} from './identifier-annotations';
import { UUIDGenerator } from './uuid-generator';

export class IdentifierModule extends Module {
    configure(): void {
        this.registerValue(UUIDGenerationFunctionAnnotation, randomUUID);
        this.registerClass(UUIDGeneratorAnnotation, UUIDGenerator);
    }
}
