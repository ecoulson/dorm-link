import { Renderer } from './renderer';

export interface ViewModel {
    render(): Renderer;
}
