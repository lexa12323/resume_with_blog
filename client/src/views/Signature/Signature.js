import React from 'react'
import './signature.scss'

export const Signature = ({modificator, inline}) => {
    const display = inline ? 'span' : 'div';
    return React.createElement(display, {className: `signature ${modificator || ''}`}, `Oleksii Horbenko`);
}
