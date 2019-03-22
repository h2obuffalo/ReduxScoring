import initial from './initial'


const loaded = (state, {type, ...action}) => ({...state, ...action});

const reducer = (state, action) => {
    switch (action.type) {
        case "loaded": return loaded(state, action);
        case "reset": return initial;
        default: return state;
    }
};

export default reducer;