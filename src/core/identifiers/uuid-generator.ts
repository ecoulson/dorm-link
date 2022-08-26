import { Injectable } from 'noose-injection';
import { UUIDGenerationFunctionAnnotation } from './identifier-annotations';
import type { IDGenerationFunction } from './id-generation-function';

@Injectable()
export class UUIDGenerator {
    constructor(
        @UUIDGenerationFunctionAnnotation.inject()
        private readonly generationFunction: IDGenerationFunction
    ) {}

    generate(): string {
        return this.generationFunction();
    }
}
