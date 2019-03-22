import axios from '../axios';
import { loaded } from './actions';


export const getGame = () => dispatch => {
    axios.get("/").then(({data}) => {
        dispatch(loaded(data.data));
    });
};

export const postGame = ({name1, name2, winNo, serve}) => dispatch => {
    axios.post("/", {
        player_1: name1,
        player_2: name2,
        winning_score: winNo,
        change_serve: serve,
    }).then(({data}) => {
        dispatch(loaded(data.data));
    })
};

export const putScore = (player) => (dispatch, getState) => {
    const id = getState().id;
    axios.patch(`/${id}/score`, {
        player,
    }).then(({data}) => {
        dispatch(loaded(data.data));
            // console.log(data.data);

    })
};