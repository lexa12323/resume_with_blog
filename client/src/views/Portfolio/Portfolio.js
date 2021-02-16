import React from 'react'
import PropTypes from 'prop-types';
import './portfolio.scss'
import './project-card.scss'

export const PortfolioList = ({list}) => {
    return (
        <div className="portfolio">
            { list.map((item, index) => <PortfolioItem key={index} {...item}/>) }
        </div>
    )
}

export const PortfolioItem = ({image, name, link, description}) => {

    return (
        <div className="project-card portfolio__item">
            <img className="project-card__image" src={`/images/portfolio/${image}`} alt='portfolio'/>
            <div className="project-card__name">{name}</div> 
            <div className="project-card__description">{description}</div> 
            {link && <div className="project-card__link">{link}</div> }    
        </div>
    )

}

PortfolioList.propTypes = {
    list: PropTypes.array,
};

PortfolioItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
};