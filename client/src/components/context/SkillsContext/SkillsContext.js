import { createContext, useReducer } from "react"
import axios from "axios"
import { SKILL_DETAILS_SUCCESS, SKILL_DETAILS_FAIL, FETCH_SKILLS_SUCCESS, FETCH_SKILLS_FAIL, FETCH_SKILLS_STARTED, SKILL_DETAILS_STARTED } from "./skillActionTypes"
import { SKILL_API_URL } from "../../../utils/apiUrls"

// skill context
export const skillContext = createContext()

// Initial State
const INITIAL_STATE = {
    error: null,
    loading: false,
    skillsByCategory: []
}

// skill Reducer
const skillReducer = (state, action) => {
    
    const { type, payload, category } = action;
    switch (type) {
        // details
        case SKILL_DETAILS_STARTED:
            return {
                ...state,
                loading: true,
                skill: null,
                error: null
            }
        case SKILL_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                skill: payload,
                error: null
                }
        case SKILL_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                skill: null,
                error: payload
            }

        // fetch
        case FETCH_SKILLS_STARTED:
            return {
                ...state,
                skillsByCategory: [],
                loading: true,
                error: null
            }
        case FETCH_SKILLS_SUCCESS:
            return {
                ...state,
                skillsByCategory: {
                    ...state.skillsByCategory,
                    [category]: payload
                },
                loading: false,
                error: null
            }
        case FETCH_SKILLS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default: 
            console.log("default");
            return state
    }
}

// Provider
export const SkillContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(skillReducer, INITIAL_STATE)
    // console.log(state);
    
    // Get skill details action
    const getSkillDetailsAction = async name => {
        try {
            
            const res = await axios.get(`${SKILL_API_URL}/${name}`)
            if (res?.status === 200) {
                // dispatch
                dispatch({
                    type: SKILL_DETAILS_SUCCESS,
                    payload: res?.data
                })
            }
        } catch (error) {
            dispatch({
                type: SKILL_DETAILS_FAIL,
                payload: error?.data?.response?.message,
            })
        }
    }

    // Fetch skills action
    const fetchSkillsAction =  async category => {
        try {
            dispatch({
                type: FETCH_SKILLS_STARTED,
                payload: null,
                category
            })
            const res = await axios.get(`${SKILL_API_URL}/all/${category}`)
            if (res?.status === 200) {
                dispatch({
                    type: FETCH_SKILLS_SUCCESS,
                    payload: res?.data,
                    category
                })
            }
        } catch (error) {
            dispatch({
                type: FETCH_SKILLS_FAIL,
                payload: error?.data?.response?.message,
            })
        }
    }

    return (
        <skillContext.Provider value={{
            getSkillDetailsAction,
            skill: state?.skill,
            fetchSkillsAction,
            skillsByCategory: state?.skillsByCategory,
            loading: state?.loading,
            error: state?.error,
            }} >
            {children}
        </skillContext.Provider>
    )
}