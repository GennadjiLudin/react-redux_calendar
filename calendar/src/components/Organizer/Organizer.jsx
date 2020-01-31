import React, {useState} from 'react';

import Todos from '../../containers/Todos/Todos';
import Editbox from '../../containers/Editbox/Editbox';

import './Organizer.scss';

const Organizer = () => {
    const [hide, setHide] = useState(false);
    return (
        <div className={`organizer ${hide ? "hide" : ""}`}>
            <Todos />
            <Editbox />
            <div className="footer">
                Footer
                <button className={`organizer-btn ${hide ? "organizer-btn-show" : ""}`} onClick={() => {setHide(!hide)}}>{hide ? "=>" : "<="}</button>
            </div>
        </div>
    )
}

export default Organizer;