import {ADD_USERNAME} from '../const';

export default (username = 'Guest', action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_USERNAME: return username;
    }

    return articleState;
}
