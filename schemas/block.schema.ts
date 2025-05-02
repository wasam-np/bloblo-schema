interface RootBlock {
    ['@cls']: '.RootBlock',
    root: BlockElement,
    /**
     * file name => file path
     */
    mediaFiles: Dictionary<string>,
}


interface GenericElement {
    // containerData?: ContainerData,
}
interface BlockElement extends GenericElement {

}
interface ParentBlock extends BlockElement {
    blocks: BlockElement[],
}
interface TolerantParentBlock extends BlockElement {
    blocks: GenericElement[],
}
interface ControlElement extends GenericElement {

}



interface AttractorBlock extends ParentBlock {
    ['@cls']: '.Attractor',
}
interface BookBlock extends ParentBlock {
    ['@cls']: '.Book',
}
interface CameraBlock extends BlockElement {
    ['@cls']: '.Camera',
}
interface CompositionBlock extends TolerantParentBlock {
    ['@cls']: '.Layered',
}
interface GridBlock extends ParentBlock {
    ['@cls']: '.Grid',
}
interface LiveVideoBlock extends BlockElement {
    ['@cls']: '.LiveVideo',
}


interface MediaBlock extends BlockElement {
    ['@cls']: '.MediaBlock',
}
interface MediaUrlBlock extends BlockElement {
    ['@cls']: '.MediaUrl',
}

/**
 * The first child element has to be a 2:1 image or video
 */
interface PanoramaBlock extends TolerantParentBlock {
    ['@cls']: '.View360',
}
interface ReferenceBlock extends BlockElement {
    ['@cls']: '.RefBlock',
}

interface ScrollerBlock extends ParentBlock {
    ['@cls']: '.Scroller',
}
interface SlideShowBlock extends ParentBlock {
    ['@cls']: '.SlideShow',
}
interface StackBlock extends ParentBlock {
    ['@cls']: '.Stack',
}
interface SynchronizerBlock extends ParentBlock {
    ['@cls']: '.Synchronizer',
}

interface TagSelectorBlock extends ParentBlock {
    ['@cls']: '.TagSelector',
}
interface TextBlock extends BlockElement {
    ['@cls']: '.TextBlock',
}
interface ThreeDBlock extends BlockElement {
    ['@cls']: '.ThreeD',
    blocks: (ButtonControl | MediaBlock)[],
}
interface WebBlock extends BlockElement {
    ['@cls']: '.WebBlock',
}
interface WidgetBlock extends BlockElement {
    ['@cls']: '.Widget',
}



interface ButtonControl extends ControlElement {
    ['@cls']: '.Button',
}

interface ContainerData {
    kAARect: AARect,
}
interface AARect {
    ['@cls']: '.AARect',
    x: number,
    y: number,
    width: number,
    height: number,
}

type Dictionary<T> = { [key: string]: T };