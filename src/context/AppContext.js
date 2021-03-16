import { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    action.payload
                ]
            }
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        case "UPDATE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.map((expense) => {
                    return (expense.id !== action.payload.id) ? expense : action.payload
                })
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: "shopping", cost: 55 },
        { id: 13, name: "holiday", cost: 100 },
        { id: 14, name: "car service", cost: 85 }
    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider
            value = {{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}
        >
            { props.children }
        </AppContext.Provider>
    )
}