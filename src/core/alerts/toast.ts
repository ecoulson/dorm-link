import { ToastType } from './toast-type';

export class Toast {
    constructor(
        public readonly type: ToastType,
        public readonly message: string,
        public readonly duration: number
    ) {}
}
