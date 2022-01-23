import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { AuthState } from "./Auth/Auth.reducer";
import rootReducer from "./rootReducer";
import { UserState } from "./User/User.reducer";

export interface RootState {
    Auth: AuthState;
    User: UserState;
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
