import React from 'react'
import { BrandIcon } from '../common/Icon/Icon';
import './skills.scss'

export const Skills = ({html, icons}) => {
    return (
        <div className="skills">
            <div className="skills__icons">
                { icons.map((icon)=> <BrandIcon name={icon} className="skills__icon"/>) }
            </div>
            <div className="skills__html" dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    )
}
