const meta = {
    title: 'Components/Skeleton',
}

export default meta

export const Shapes = {
    render: () => `
        <span aria-busy="true" data-shape="text"></span>
        <br><br>
        <span aria-busy="true" data-shape="rect"></span>
        <br><br>
        <span aria-busy="true" data-shape="circle"></span>
    `,
}

export const Lines = {
    render: () => `
        <span aria-busy="true" data-shape="text" data-lines="3"></span>
        <span aria-busy="true" data-shape="text"></span>
        <span aria-busy="true" data-shape="text"></span>
    `
}