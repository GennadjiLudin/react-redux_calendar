import React, {useState} from 'react';

import Todo from '../../containers/Todo/Todo';
import Editbox from '../../containers/Editbox/Editbox';

import './Organizer.scss';

const Organizer = () => {
    const [hide, setHide] = useState(false);
    return (
        <div className={`organizer ${hide ? "hide" : ""}`}>
            <Todo />
            <Editbox />
            <div className="footer">Footer</div>
        </div>
    )
}

export default Organizer;