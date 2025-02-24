import axios from "axios";
import { createContext, useReducer } from "react";
import { PROJECT_DETAILS_STARTED, PROJECT_DETAILS_SUCCESS, PROJECT_DETAILS_FAIL, PROJECT_FETCH_STARTED, PROJECT_FETCH_SUCCESS, PROJECT_FETCH_FAIL} from "./projectActionTypes"
import { PROJECT_API_URL } from "../../../utils/apiUrls";

export const projectContext = createContext();

// Initial state
const INITIAL_STATE = {
    error: null,
    loading: false,
    projects: []
}

// project reducer
const projectReducer = (state, action) => {

    const { type, payload } = action;
    switch (type) {
        // details
        case PROJECT_DETAILS_STARTED:
            return {
                ...state,
                loading: true,
                error: null,
                project: null
            }
        case PROJECT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                project: payload
            }
        case PROJECT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                project: null  
                }
        case PROJECT_FETCH_STARTED:
            return {
                ...state,
                loading: true,
                error: null,
                projects: []
                }
        case PROJECT_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                projects: payload
            }
        case PROJECT_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                projects: null
            }
        default:
            return state;
    }
}

// Provider
export const ProjectContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectReducer, INITIAL_STATE)

    const getProjectDetailsAction = async name => {
        try {
            const res = await axios.get(`${PROJECT_API_URL}/${name}`)
            dispatch({
                type: PROJECT_DETAILS_SUCCESS,
                payload: res?.data
            })
        } catch (error) {
            dispatch({
                type: PROJECT_DETAILS_FAIL,
                payload: error?.data?.response?.message
            })
        }
    }

    const fetchProjectsAction = async () => {
        try {
            const res = await axios.get(`${PROJECT_API_URL}`)
            if (res?.status === 200) {                
                dispatch({
                    type: PROJECT_FETCH_SUCCESS,
                    payload: res?.data
                })
            }
        } catch (error) {
            dispatch({
                type: PROJECT_FETCH_FAIL,
                payload: error?.data?.resposne?.message
            })
        }
    }

    return (
        <projectContext.Provider value={{
            getProjectDetailsAction,
            project: state?.project,
            fetchProjectsAction,
            projects: state?.projects,
            error: state?.error
        }} >
            {children}
        </projectContext.Provider>
    )
}