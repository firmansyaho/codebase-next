import { IProfileData } from "./User.action";
import { UserActionTypes } from "./User.actionTypes";

export interface IUserState {
    profile: IProfileData;
    accessToken: string;
}
export interface UserState {
    profile: {
        id: string;
        firstName: string;
        lastName: string;
        location?: string;
    };
}

interface Action {
    type: string;
    payload?: IUserState;
}

const initialState: IUserState = {
    profile: {
        id: "",
        firstName: "",
        lastName: "",
    },
    accessToken: "",
};

const UserReducer = (state = initialState, action: Action): IUserState => {
    switch (action.type) {
        case UserActionTypes.GET_PROFILE:
            return { ...state, ...action.payload };
        case UserActionTypes.REGISTER_USER:
            return { ...state, ...action.payload };
        case UserActionTypes.REGISTER_USER_SUCCESS:
            return { ...state, ...action.payload };
        case UserActionTypes.REGISTER_USER_FAILED:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default UserReducer;
