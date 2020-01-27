export const CHANGE_MONTH = 'CHANGE_MONTH';
export const CHANGE_YEAR = 'CHANGE_YEAR';

export const changeMonth = (type) => ({
    type: CHANGE_MONTH,
    payload: {
        type,
    }
})

export const changeYear = (type) => ({
    type: CHANGE_YEAR,
    payload: {
        type,
    }
})