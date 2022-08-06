import { showLoading, hideLoading } from "react-redux-loading-bar";

import { getInitialData } from "../utils/api";

import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'tylermcginnis'; // Hard-coded here to avoid authentication

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({ users, tweets }) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        })
    }
}