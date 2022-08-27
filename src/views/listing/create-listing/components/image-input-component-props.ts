import { ImageInputRenderer } from '../renderers/image-input-renderer';

export interface ImageInputComponentProps {
    renderer: ImageInputRenderer;
    onChange: (images: string[]) => void;
}
