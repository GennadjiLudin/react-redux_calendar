import React, {useState} from 'react';

import Todos from '../../containers/Todos/Todos';
import Editbox from '../../containers/Editbox/Editbox';
import Footer from '../Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft , faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Organizer.scss';

const Organizer = () => {
    const [hide, setHide] = useState(false);

    return (
        <div className={`organizer ${hide ? "hide" : ""}`}>
            <Todos />
            <Editbox />
            <Footer />
            <FontAwesomeIcon
                className={`organizer-btn ${hide ? "organizer-btn-show" : ""}`}
                onClick={() => setHide(!hide)}
                icon={hide ? faArrowCircleRight : faArrowCircleLeft}
            />
        </div>
    )
}

export default Organizer;