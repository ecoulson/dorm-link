import { Module } from 'noose-injection';
import { HomeView } from './home-view';
import { HomeViewAnnotation } from './home-view-annotations';

export class HomeViewModule extends Module {
    configure(): void {
        this.registerClass(HomeViewAnnotation, HomeView);
    }
}
