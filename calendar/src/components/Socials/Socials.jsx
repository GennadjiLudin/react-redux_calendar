  
import React from 'react';

// Components
import Social from './Social/Social';

// Styles
import './Socials.scss';

const socials = [
    {socialImg: 'vk', link: 'https://vk.com/ludingennady'},
    {socialImg: 'github', link: 'https://github.com/GennadjiLudin/react-redux_calendar'},
];

const Socials = () => {
    return (
        <div className="socials">
            {socials.map((social, index) => (
                <Social 
                    {...social}
                    key={index}
                />
            ))}
        </div>
    );
}

export default Socials;