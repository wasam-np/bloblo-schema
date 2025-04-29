interface RootBlock {
    ['@cls']: '.RootBlock',
    root: BlockElement,
}

interface BlockElement {

}
interface ParentBlockElement extends BlockElement {
    blocks: BlockElement[],
}
interface IControlElement {

}

interface AttractorBlock extends ParentBlockElement {
    ['@cls']: '.Attractor',
}
interface CompositionBlock extends ParentBlockElement {
    ['@cls']: '.Layered',

}

interface ButtonControl extends IControlElement {
    ['@cls']: '.Button',
}