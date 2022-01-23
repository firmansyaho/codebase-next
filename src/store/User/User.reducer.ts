import { GET_PROFILE } from "./User.actionTypes";

export interface UserState {
    profile: {
        id: string;
        firstName: string;
        lastName: string;
        location: string;
    };
}

interface Action {
    type: string;
    payload?: UserState["profile"];
}

const initialState = {
    profile: {
        id: "",
        firstName: "",
        lastName: "",
        location: "",
    },
};

const UserReducer = (
    state: UserState = initialState,
    action: Action
): UserState => {
    switch (action.type) {
        case GET_PROFILE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default UserReducer;
