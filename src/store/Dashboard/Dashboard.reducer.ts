import { Reducer } from "redux";
import { DashboardActions } from "./Dashboard.action";
import {
    GET_NFT_DATA_REQUEST,
    GET_NFT_DATA_REQUEST_FAILED,
    GET_NFT_DATA_REQUEST_SUCCESS,
} from "./Dashboard.actionTypes";

export interface INftData {
    id: string;
    title: string;
    description: string;
    category: number;
    imageUrl: string;
}

// Define the type State
export interface IDashboardState {
    readonly nfts: INftData[];
    isLoading: boolean;
}

// Define the initial state
const initialState: IDashboardState = {
    nfts: [],
    isLoading: false,
};

export const dashboardReducer: Reducer<IDashboardState, DashboardActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case GET_NFT_DATA_REQUEST:
            return { ...state, isLoading: true };
        case GET_NFT_DATA_REQUEST_SUCCESS:
            return { ...state, isLoading: false, nfts: action.payload };
        case GET_NFT_DATA_REQUEST_FAILED:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};

export default dashboardReducer;
