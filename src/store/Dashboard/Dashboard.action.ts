import API from "../../services/apiHelper";
import {
    GET_NFT_DATA_REQUEST,
    GET_NFT_DATA_REQUEST_FAILED,
    GET_NFT_DATA_REQUEST_SUCCESS,
} from "./Dashboard.actionTypes";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IDashboardState, INftData } from "./Dashboard.reducer";

// Interface for all Actions Type
export interface INftGetDataRequest {
    type: "GET_NFT_DATA_REQUEST";
    payload: INftData[];
}

export interface INftGetData {
    type: "GET_NFT_DATA_REQUEST_SUCCESS";
    payload: INftData[];
}

export interface INftGetDataFailed {
    type: "GET_NFT_DATA_REQUEST_FAILED";
    payload: INftData[];
}

/*
Combine the action types with a union (we assume there are more)
example: export type dashboardAction = IGetAllAction | IGetOneAction ...
*/
export type DashboardActions =
    | INftGetData
    | INftGetDataFailed
    | INftGetDataRequest;

export const getNftData: ActionCreator<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ThunkAction<Promise<any>, IDashboardState, null, INftGetData>
> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: GET_NFT_DATA_REQUEST });
        const response = await API.get("/dashboard");

        if (response.status === 200) {
            dispatch({
                type: GET_NFT_DATA_REQUEST_SUCCESS,
                payload: response.data,
            });
            return response;
        } else {
            dispatch({
                type: GET_NFT_DATA_REQUEST_FAILED,
                payload: response.data,
            });
            return;
        }
    };
};
