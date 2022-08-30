import styled from 'styled-components'

const style = (
    bgColor: string,
    width?: number,
    padding?: {
        top: number,
        right: number,
        bottom: number,
        left: number
    },
    color?: string,
    fontSize?: number,
    fontWeight?: number | string
) => styled.button`

    background: ${bgColor};
    width: ${width ? width + 'px' : '100%'};
    border: none;
    padding:
        ${padding?.top ? padding?.top : 0}px
        ${padding?.right ? padding?.right : 0}px
        ${padding?.bottom ? padding?.bottom : 0}px
        ${padding?.left ? padding?.left : 0}px;
    color: ${color ? color : '#706f70'};
    font-size: ${fontSize ? fontSize : 14}px;
    font-weight: ${fontWeight ? fontWeight : 500};
    cursor: pointer;
    border-radius: 5px;

`

export default style