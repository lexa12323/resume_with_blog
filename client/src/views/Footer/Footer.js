import React from 'react'
import { Content } from '../Content/Content'
import { Signature } from '../../views/Signature/Signature'
import './footer.scss'

export const Footer = () => {
    const currentYear = (new Date()).getFullYear();
    return (
        <footer className="footer">
           <Content>
               <p className="footer__copy">
                    <span>Copyright © 2020 - {currentYear} <Signature inline modificator="signature-small"/></span>
                    <span>Site developed on MERN stack</span>
                </p>
           </Content>
        </footer>
    )
}
