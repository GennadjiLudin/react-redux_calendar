import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import './Form.scss';

const Form = (props) => {
    const { changeMode, argument, title, description, setTitle, setDescription, handleClick } = props;
    
    return (
        <div className="form-wrap">
            <form className="form-add">
                <label htmlFor="title" className="form__name">Название</label>
                <input 
                    type="text"
                    name="title"
                    id="title"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="form__title"
                    maxLength="40"
                    required
                />
                <label htmlFor="description" className="form__name">Описание</label>
                <textarea 
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form__description"
                    maxLength="200"
                />
            </form>
            <div className="button-wrap">
                <FontAwesomeIcon 
                    onClick={() => handleClick()}
                    icon={faCheck}
                    className="save"
                    title="Сохранить"
                />
                <FontAwesomeIcon
                    onClick={() => changeMode(argument)}
                    icon={faTimes}
                    className="cancel"
                    title="Отменить"
                />
            </div>
        </div>
    )
}

export default Form;