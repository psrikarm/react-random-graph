export const randomNumbers = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_DATA':
            console.log(action);
            return {
                data: action.payload
            };
        default :
            return state;
    }
};