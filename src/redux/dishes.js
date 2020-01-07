import { DISHES } from '../shared/dishes2';

export const Dishes = (state = DISHES, action) => {
    //console.log("dishes reducer " + state[0])
    switch (action.type) {
        default:
            return state;
    }
 
};