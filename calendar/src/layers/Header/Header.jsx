import React from 'react';
import { connect } from 'react-redux';

import { getMonthName } from '../../helpers/helpers';
import { changeMonth, changeYear } from '../../actions/actionHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = (props) => {
    const {month, year, changeMonth, changeYear} = props;

    const onClickHandlerPrev = () => {
        changeMonth("");
        if(month === 0) changeYear("");
    }

    const onClickHandlerNext = () => {
        changeMonth("next");
        if(month === 11) changeYear("next");
    }


    return (
        <div className="header">
            <span className="header__logo">CALENDAR</span>
            <span className="header__info">
                <FontAwesomeIcon
                    className="prev-btn"
                    onClick={() => onClickHandlerPrev()}
                    icon={faChevronCircleLeft}
                />
                <span className="header__month-year-wrap">
                        <span className="header__month">{getMonthName(month)}</span>
                        <span className="header__year">{year}</span>
                </span>
                <FontAwesomeIcon
                    className="next-btn"
                    onClick={() => onClickHandlerNext()}
                    icon={faChevronCircleRight}
                />
            </span>
        </div>
    )
}

const mapStateToProps = state => {
    const { month, year } = state.date;
    return {
        month,
        year,
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
      changeMonth: type => dispatch(changeMonth(type)),
      changeYear: type => dispatch(changeYear(type))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);