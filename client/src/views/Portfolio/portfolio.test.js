import React from 'react'
import { PortfolioItem, PortfolioList } from './Portfolio'
//import { shallow } from 'enzyme';

describe('should render PortfolioItem component' , () => {
    it('should contain .portfolio__item item' , () => {
        const component = shallow(<PortfolioItem />);
        const wrapper = component.find('.portfolio__item')
        expect(wrapper.length).toBe(1);
    });
    
    it('should contain .project-card__link item' , () => {
        const component = shallow(<PortfolioItem link="#"/>);
        const wrapper = component.find('.project-card__link')
        expect(wrapper.text()).toBe('#');
    });
})

const data3 = [
    {image: 'gorbenko_resume.png', name: 'Сайт, на котором вы находитесь', description: 'Стек технологий: MERN'},
    {image: 'gorbenko_resume.png', name: 'Сайт, на котором вы находитесь', description: 'Стек технологий: MERN'},
]

describe('PortfolioList component' , () => {
    it('should render PortfolioList component' , () => {
        const component = shallow(<PortfolioList list={data3}/>);
        expect(component).toMatchSnapshot();
    });
})


/*describe('Props' , () => {
    it('should render PortfolioList component' , () => {
        const component = shallow(<PortfolioList list={data3}/>);
        expect(component).toMatchSnapshot();
    });
})*/