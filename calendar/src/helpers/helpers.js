export const range = (arr, from, to) => {
    let newArr = [...arr];
    for (let i = from; i <= to; i++) {
        newArr.push(i);
    }
    return newArr;
}

export const addFirstElemsNum = (num, elem, arr) => {
    let newArr = [...arr];
    for (let i = 0; i < num; i++) {
        newArr.unshift(elem);
        elem--;
    }
    return newArr;
}

export const addLastElemsNum = (num, elem, arr) => {
    let newArr = [...arr];
    for (let i = 0; i < num; i++) {
        newArr.push(elem);
        elem++;
    }
    return newArr;
}

export const getLastDateOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

export const getFirstElemsNum = (year, month) => {
    let jsFirstDay = getFirstDayOfMonth(year, month);
    let realFirstDay = getRealDayOfWeek(jsFirstDay);
    return realFirstDay - 1;
}

export const getLastElemsNum = (year, month) => {
    let jsLastDay = getLastDayOfMonth(year, month);
    let realLastDay = getRealDayOfWeek(jsLastDay);
    return 7 - realLastDay + 7;
}

export const getRealDayOfWeek = (jsDay) => {
    if (jsDay === 0) {
        return 7;
    } else {
        return jsDay;
    }
}

export const getFirstDayOfMonth = (year, month) => {
    let date = new Date(year, month, 1);
    return date.getDay();
}

export const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDay();
}

export const getLastDateOfPrevMonth = (year, month) => {
    let date = new Date(year, month, 0);
    return date.getDate();
}

export const getNextYear = (year, month) => {
    if (month === 11) {
        return year + 1;
    } else {
        return year;
    }
}

export const getNextMonth = (month) => {
    if (month === 11) {
        return 0;
    } else {
        return month + 1;
    }
}

export const getPrevYear = (year, month) => {
    if (month === 0) {
        return year - 1;
    } else {
        return year;
    }
}

export const getPrevMonth = (month) => {
    if (month === 0) {
        return 11;
    } else {
        return month - 1;
    }
}

export const getMonthName = (num) => {
    let monthes = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    return monthes[num];
}

export const setNumWithZero = (num) => {
    if (num < 10) {
        return num = '0' + num;
    } else {
        return num;
    }
}