import { LOGIN_ACTION, LOGOUT_ACTION } from "./Auth.actionTypes";

export interface AuthState {
    isLogin: boolean;
}

interface Action {
    type: string;
    payload?: string;
}

const initialState = {
    isLogin: false,
};

const AuthReducer = (
    state: AuthState = initialState,
    action: Action
): AuthState => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, isLogin: true };
        case LOGOUT_ACTION:
            return { ...state, isLogin: true };

        default:
            return state;
    }
};

export default AuthReducer;
