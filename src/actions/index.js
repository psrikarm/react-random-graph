
export const saveDataPoints = (dataPoints, time) => ({
    type: 'SAVE_DATA',
    payload: dataPoints,
    time
});