import React from 'react'
import './achievements.scss'

export const Achievements = ({list}) => {
    return (
        <div className="achievements">
            {list.map((item, i) => <Achievement key={i} count={item.count}>{item.name}</Achievement>)}
        </div>
    )
}

export const Achievement = ({count, children}) => {
    return (
        <div className="achievements__item">
            <p className="achievements__counter">{count}</p>
            <p className="achievements__name">{children}</p>
        </div>
    )
}
