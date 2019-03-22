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

// export const settings = ({ name1, name2, winNo, serve }) => {
//     return {
//         type: 'settings',
//         name1: name1,
//         name2: name2,
//         serve: serve,
//         winNo: winNo,
//     }
// };

export const loaded = ({change_serve, player_1, player_2, winning_score, id, submit }) => {
    return {
        type: 'loaded',
        name1: player_1.name,
        name2: player_2.name,
        player1:player_1.score,
        player2:player_2.score,
        serve: change_serve,
        serving:player_1.serving,
        winNo: winning_score,
        loaded: true,
        id,
        submit: !submit,
    }
};