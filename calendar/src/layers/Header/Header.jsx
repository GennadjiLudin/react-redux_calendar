import React from 'react';
import { connect } from 'react-redux';

import { getMonthName } from '../../helpers/helpers';
import { changeMonth, changeYear, today } from '../../actions/actionHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = (props) => {
    const {month, year, changeMonth, changeYear, today} = props;

    const onClickHandlerPrev = () => {
        changeMonth("");
        if(month === 0) changeYear("");
    }

    const onClickHandlerNext = () => {
        changeMonth("next");
        if(month === 11) changeYear("next");
    }

    // const onClickHandlerToday = () => {
    //     let date = new Date();
    // }


    return (
        <div className="header">
            <span className="header__logo">КАЛЕНДАРЬ-ОРГАНАЙЗЕР</span>
            <span className="header__info">
                <span className="header__month-year-wrap">
                    <span className="header__month">{getMonthName(month)}</span>
                    <span className="header__year">{year}</span>
                </span>
                <FontAwesomeIcon
                    className="prev-btn"
                    onClick={() => onClickHandlerPrev()}
                    icon={faChevronLeft}
                />
                <span
                className="header__today"
                onClick={() => today()}
                >
                    Сегодня
                </span>
                <FontAwesomeIcon
                    className="next-btn"
                    onClick={() => onClickHandlerNext()}
                    icon={faChevronRight}
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
      changeYear: type => dispatch(changeYear(type)),
      today: () => dispatch(today()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);