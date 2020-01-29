import React from 'react';
import { connect } from 'react-redux';

import { getMonthName } from '../../helpers/helpers';
import { changeMonth, changeYear } from '../../actions/actionHeader';

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
            <span className="header__logo">LOGO</span>
            <span className="header__info">
                <button onClick={() => onClickHandlerPrev()} className="prev-btn" >Prev</button>
                <span className="header__month-year-wrap">
                        <span className="header__month">{getMonthName(month)}</span>
                        <span className="header__year">{year}</span>
                </span>
                <button onClick={() => onClickHandlerNext()} className="next-btn" >Next</button>
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