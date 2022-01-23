import { combineReducers } from "redux";
import Auth, { AuthState } from "./Auth/Auth.reducer";
import User, { UserState } from "./User/User.reducer";

export interface RootState {
    Auth: AuthState;
    User: UserState;
}
const rootReducer = combineReducers<RootState>({
    Auth,
    User,
});

export default rootReducer;
