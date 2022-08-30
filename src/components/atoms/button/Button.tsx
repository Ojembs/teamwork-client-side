import React, { FC } from 'react'
import style from './Button.css'

export interface IButtton {
    onClick?: Function,
    label?: string,
    background?: any,
    color?: string,
    width?: number
    padding?: any,
    fontSize?: number,
    fontWeight?: any,
    handleClick?: Function | any
}

const FormButton:FC<IButtton> = ({handleClick, label, background, width, padding, color, fontSize, fontWeight}) => {
  const Button = style(background, width, padding, color, fontSize, fontWeight )
  return <Button onClick={() => handleClick} className={background && 'bg-color'}>{label}</Button>
}

export default FormButton