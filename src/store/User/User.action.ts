import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import API from "../../services/apiHelper";
import { UserActionTypes } from "./User.actionTypes";
import { IUserState } from "./User.reducer";

export interface IProfileData {
    id: string;
    firstName: string;
    lastName: string;
}
export interface IUserRegisterUser {
    type: UserActionTypes.REGISTER_USER;
}
export interface IUserRegisterUserSuccess {
    type: UserActionTypes.REGISTER_USER_SUCCESS;
}
export interface IUserRegisterUserFailed {
    type: UserActionTypes.REGISTER_USER_FAILED;
}

/*
Combine the action types with a union (we assume there are more)
example: export type dashboardAction = IGetAllAction | IGetOneAction ...
*/
export type UserActions =
    | IUserRegisterUser
    | IUserRegisterUserSuccess
    | IUserRegisterUserFailed;

export const registerUser: ActionCreator<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ThunkAction<Promise<any>, IUserState, null, IUserRegisterUser>
> = (data) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: UserActionTypes.REGISTER_USER });
        const response = await API.post("/signup", data);

        if (response.status === 200) {
            dispatch({
                type: UserActionTypes.REGISTER_USER_SUCCESS,
                payload: response.data,
            });
            return response;
        } else {
            dispatch({
                type: UserActionTypes.REGISTER_USER_FAILED,
                payload: response.data,
            });
            return;
        }
    };
};

export const getProfile = () => ({
    type: UserActionTypes.GET_PROFILE,
});
