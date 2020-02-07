import React from 'react';

import Socials from '../Socials/Socials';

import './Footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <Socials />
            <div> &copy; Copyright 2019-2020. All Rights Reserved. </div>
        </div>
    )
}

export default Footer;