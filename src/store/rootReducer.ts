import { combineReducers } from "redux";
import Auth, { AuthState } from "./Auth/Auth.reducer";
import Dashboard, { IDashboardState } from "./Dashboard/Dashboard.reducer";
import User, { IUserState } from "./User/User.reducer";

export interface RootState {
    Auth: AuthState;
    User: IUserState;
    Dashboard: IDashboardState;
}
const rootReducer = combineReducers<RootState>({
    Auth,
    User,
    Dashboard,
});

export default rootReducer;
