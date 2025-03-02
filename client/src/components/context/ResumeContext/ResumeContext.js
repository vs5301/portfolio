import { createContext, useReducer } from "react"
import { RESUME_FETCH_STARTED, RESUME_FETCH_SUCCESS, RESUME_FETCH_FAIL } from "./resumeActionTypes.js"
import { RESUME_API_URL } from "../../../utils/apiUrls";
import axios from "axios";

export const resumeContext = createContext();

// INITIAL STATE
const INITIAL_STATE = {
    error: null,
    loading: false,
    resume: null
}

// resume reducer
const resumeReducer = (state, action) => {

    const { type, payload } = action;
    switch (type) {
        case RESUME_FETCH_STARTED:
            return {
                ...state,
                loading: true,
                error: null,
                resume: null,
            }
        case RESUME_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                resume: payload
            }
        case RESUME_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                resume: null
            }
        default:
            return state;
    }
}

// Provider
export const ResumeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(resumeReducer, INITIAL_STATE)

    const fetchResumeAction = async () => {
        try {
            const res = await axios.get(`${RESUME_API_URL}`)
            if (res?.status === 200) {
                dispatch({
                    type: RESUME_FETCH_SUCCESS,
                    payload: res?.data
                })
            }
        } catch (error) {
            dispatch({
                type: RESUME_FETCH_FAIL,
                payload: error?.data?.response?.message
            })
        }
    }

    return (
        <resumeContext.Provider value={{
            fetchResumeAction,
            resume: state?.resume,
            error: state?.error
        }} >
            {children}
        </resumeContext.Provider>
    )
}