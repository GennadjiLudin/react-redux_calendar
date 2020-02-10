import React from 'react';

import './Section.scss';

const Section = ({ children }) => (
    <div className="organizer-section">
        {children}
    </div>
)

export default Section;