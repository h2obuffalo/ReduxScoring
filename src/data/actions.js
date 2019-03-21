export const score = ( player )  => {
    return {
        type: 'score',
        player: player,
    };
};

export const reset = () => {
    return {
        type: 'reset',
    };
};

export const set = ({ name1, name2, winNo, serve }) => {
    return {
        type: 'settings',
        name1: name1,
        name2: name2,
        serve: serve,
        winNo: winNo,
    }
};